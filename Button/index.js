import React from 'react';
import { View, TouchableOpacity, ViewPropTypes } from 'react-native';
import { Text } from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';

const button = (props) => {
  const {
    disabled,
    onPress,
    block,
    full,
    rounded,
    bordered,
    transparent,
    invertBaseColors,
    style,
    children,
    light,
    textStyle,
    title,
  } = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.base,
        block && styles.block,
        full && styles.full,
        rounded && styles.rounded,
        bordered && styles.bordered,
        disabled && (bordered ? styles.borderedDisable : styles.disabled),
        transparent && styles.transparent,
        invertBaseColors && styles.invertBaseColor,
        style,
      ]}
    >
      <Choose>
        <When condition={children}>
          <View>{children}</View>
        </When>
        <Otherwise>
          <Text
            allowFontScaling={false}
            style={[
              styles.baseText,
              (bordered || transparent) && styles.coloredText,
              disabled &&
                ((bordered || transparent) && styles.borderedTextDisable),
              light && styles.light,
              invertBaseColors && styles.invertBaseTextColor,
              textStyle,
            ]}
          >
            {title}
          </Text>
        </Otherwise>
      </Choose>
    </TouchableOpacity>
  );
};

button.propTypes = {
  textStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  onPress: PropTypes.func,
  title: PropTypes.string,
  light: PropTypes.bool,
  block: PropTypes.bool,
  full: PropTypes.bool,
  rounded: PropTypes.bool,
  bordered: PropTypes.bool,
  disabled: PropTypes.bool,
  transparent: PropTypes.bool,
  invertBaseColors: PropTypes.bool,
  style: ViewPropTypes.style,
  children: PropTypes.node,
};

export default button;
