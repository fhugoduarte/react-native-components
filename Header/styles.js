import { StyleSheet, Platform } from 'react-native';

import colors from '../../../util/colors';

const styles = StyleSheet.create({
  header: {
    elevation: 0,
    backgroundColor: colors.HEADER_BACKGROUND,
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
    paddingBottom: 20,
  },
  left: {
    maxWidth: 60,
    flex: 1,
  },
  body: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    height: 50,
    marginLeft: 0,
    paddingLeft: 0,
  },
  title: {
    fontSize: 22,
    color: colors.HEADER_TEXT,
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },
  buttonBack: {
    flex: 0,
    width: 48,
    height: 48,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.TRANSPARENT,
    elevation: 0,
  },
  backButtonIcon: {
    height: 18.51,
    width: 11.42,
  },
  button: {
    flex: 0,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: colors.TRANSPARENT,
    color: colors.GRAY,
    elevation: 0,
  },
  right: {
    flex: 0,
    width: 48,
    height: 48,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.TRANSPARENT,
    elevation: 0,
  },
});

export default styles;
