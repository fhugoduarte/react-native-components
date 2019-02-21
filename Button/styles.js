import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  base: {
    padding: 13,
    borderRadius: 5,
  },
  baseText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
    alignSelf: 'center',
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
    backgroundColor: 'transparent',
  },
  light: {
    fontWeight: '200',
  },
});

export default styles;
