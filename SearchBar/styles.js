import { StyleSheet, Platform } from 'react-native';
import colors from '../../../util/colors';

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.SEARCH_BAR_BACKGROUND,
    flexDirection: 'row',
    flex: 0,
    paddingHorizontal: 7,
    alignItems: 'center',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  microphoneIcon: {
    width: 24,
    height: 24,
    paddingRight: 9,
  },
  inputStyle: {
    flex: 1,
    color: colors.BLACK_64_OPACITY,
    fontSize: 14,
    paddingVertical: Platform.OS === 'ios' ? 10 : 0
  },
});

export default styles;
