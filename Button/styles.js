import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../../util/colors';

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.PRIMARY_GREEN,
    padding: 13,
    borderRadius: 5,
    elevation: 1,
  },
  invertBaseColor: {
    backgroundColor: colors.WHITE,
  },
  baseText: {
    fontSize: 16,
    color: colors.WHITE,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  invertBaseTextColor: {
    color: colors.PRIMARY_GREEN,
  },
  block: {
    width: '100%',
    alignItems: 'center',
  },
  full: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  rounded: {
    borderRadius: 6,
  },
  bordered: {
    borderWidth: 2,
    borderColor: colors.PRIMARY_GREEN,
    backgroundColor: colors.TRANSPARENT,
  },
  coloredText: {
    color: colors.PRIMARY_GREEN,
    fontWeight: '400',
  },
  disabled: {
    backgroundColor: colors.BLACK_13_OPACITY,
  },
  borderedDisable: {
    borderColor: colors.SILVER,
  },
  borderedTextDisable: {
    color: colors.SILVER,
  },
  transparent: {
    backgroundColor: colors.TRANSPARENT,
    borderColor: colors.TRANSPARENT,
    elevation: 0,
  },
  light: {
    fontWeight: '200',
  },
});

export default styles;
