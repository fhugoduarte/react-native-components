import { StyleSheet } from 'react-native';

import colors from '../../../util/colors';

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    flex: 0,
    padding: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  title: {
    fontWeight: '400',
    color: colors.BLACK,
    fontSize: 16,
    paddingTop: 10,
  },
});

export default styles;
