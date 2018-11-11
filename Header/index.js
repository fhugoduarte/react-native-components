import React from 'react';
import { ViewPropTypes, View, Image, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Body, Header, Left, Right, Title } from 'native-base';
import PropTypes from 'prop-types';

import SettingsMenu from '../SettingsMenu';
import BackButton from '../../../imgs/voltar.png';
import Button from '../../UI/Button';
import colors from '../../../util/colors';
import styles from './styles';

const header = (props) => {
  let alreadyPressBack = false;

  const {
    backButtonAction,
    style,
    disableBack,
    body,
    bodyStyle,
    title,
    filter,
    leftComponent,
    rightComponent,
    children,
    settings,
  } = props;

  const onPress = () => {
    if (!alreadyPressBack) {
      backButtonAction();
      alreadyPressBack = true;
    }
  };

  const bodyMarginLeft = disableBack ? { marginLeft: 10 } : null;
  return (
    <Header style={[styles.header, style]}>
    <StatusBar backgroundColor={colors.HEADER_BACKGROUND} barStyle="light-content" animated/>
      <If condition={!disableBack && !leftComponent}>
        <Left style={styles.left}>
          <Button onPress={onPress} style={styles.buttonBack}>
            <Image source={BackButton} style={styles.backButtonIcon} />
          </Button>
        </Left>
      </If>
      <If condition={leftComponent}>
        <Left style={styles.left}>
          <View>{leftComponent}</View>
        </Left>
      </If>
      <If condition={body}>
        <Body style={[styles.body, bodyMarginLeft, bodyStyle]}>{body}</Body>
      </If>

      <If condition={!body}>
        <Body style={[styles.body, bodyMarginLeft]}>
          <Title style={styles.title}>{title}</Title>
          <If condition={filter}>{filter}</If>
        </Body>
      </If>

      <If condition={rightComponent}>
        <Right style={styles.right}>
          <View>{rightComponent}</View>
        </Right>
      </If>
      <If condition={!rightComponent && settings}>
        <Right style={styles.right}>
          <SettingsMenu />
        </Right>
      </If>

      <If condition={children}>{children}</If>
    </Header>
  );
};

header.defaultProps = {
  backButtonAction: Actions.pop,
  disableBack: false,
  title: '',
  bodyStyle: {},
  settings: false,
};

header.propTypes = {
  style: ViewPropTypes.style,
  title: PropTypes.string,
  backButtonAction: PropTypes.func,
  disableBack: PropTypes.bool,
  leftComponent: PropTypes.element,
  rightComponent: PropTypes.element,
  body: PropTypes.element,
  filter: PropTypes.element,
  children: PropTypes.element,
  bodyStyle: ViewPropTypes.style,
  settings: PropTypes.bool,
};

export default header;
