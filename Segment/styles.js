import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  segment: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 5,
  },
  tab: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
  },
  firstTab: {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  lastTab: {
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
  },
  selectedTab: {
    backgroundColor: 'blue',
  },
  text: {
    fontWeight: '400',
    fontSize: 16,
  },
  selectedText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default styles;
