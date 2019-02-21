import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import * as colors from './colors';

import styles from './styles';

const button = (props) => {
  const {
    disabled,
    onPress,
    full,
    rounded,
    bordered,
    transparent,
    style,
    children,
    light,
    textStyle,
    title = '',
    info,
    primary,
    success,
    warning,
    danger,
    dark,
    ...rest
  } = props;

  let customTextStyle = { color: colors.white };

  const getMainColor = () => {
    if (disabled) return colors.disabled;
    if (info) return colors.info;
    if (primary) return colors.primary;
    if (success) return colors.success;
    if (warning) return colors.warning;
    if (danger) return colors.danger;
    if (dark) return colors.dark;
    return colors.primary;
  };

  const getCustomStyle = () => {
    const mainColor = getMainColor();
    let customStyle = { ...styles.base, backgroundColor: mainColor };

    if (full) customStyle = { ...customStyle, ...styles.full };
    if (rounded) customStyle = { ...customStyle, ...styles.rounded };
    if (bordered) {
      customTextStyle = { color: mainColor };
      customStyle = {
        ...customStyle,
        ...styles.bordered,
        borderColor: mainColor,
      };
    }
    if (transparent) {
      customTextStyle = { color: mainColor };
      customStyle = { backgroundColor: colors.transparent };
    }
    return customStyle;
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[getCustomStyle(), style]}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <Text
          style={[
            styles.baseText,
            customTextStyle,
            light && styles.light,
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default button;
