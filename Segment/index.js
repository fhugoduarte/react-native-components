import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

class Segment extends PureComponent {
  constructor(props) {
    super(props);

    this.initialState = {
      selected: 0,
    };

    this.state = {
      ...this.initialState,
    };
  }

  componentDidMount() {
    const { initialTab } = this.props;
    if (initialTab) return this.setState({ selected: initialTab });
  }

  onClick = ({ item, index }) => {
    const { onChange } = this.props;
    if (onChange) {
      if (item.value) onChange(item.value);
      else onChange(index);
    }
    this.setState({ selected: index });
  };

  getCustomTabStyle = (index) => {
    const { data, tabStyle, selectedTabStyle } = this.props;

    const isFirst = index === 0;
    const isLast = index === data.length - 1;
    const selected = index === this.state.selected;

    let customStyle = [styles.tab];
    if (isFirst) customStyle = [...customStyle, styles.firstTab];
    if (isLast) customStyle = [...customStyle, styles.lastTab];
    if (selected)
      customStyle = [...customStyle, styles.selectedTab, selectedTabStyle];
    if (tabStyle) customStyle = [...customStyle, tabStyle];

    return customStyle;
  };

  getCustomTextStyle = (index) => {
    const { tabTextStyle, selectedTabTextStyle } = this.props;

    const selected = index === this.state.selected;

    let customStyle = [styles.text];
    if (tabTextStyle) customStyle = [...customStyle, tabTextStyle];
    if (selected)
      customStyle = [...customStyle, styles.selectedText, selectedTabTextStyle];

    return customStyle;
  };

  renderTab = ({ item, index }) => {
    const customTabStyle = this.getCustomTabStyle(index);
    const customTabTextStyle = this.getCustomTextStyle(index);

    return (
      <TouchableOpacity
        key={index}
        onPress={() => this.onClick({ item, index })}
        style={customTabStyle}
      >
        {item.renderItem ? (
          this.renderItem
        ) : (
          <Text style={customTabTextStyle}>{item.title}</Text>
        )}
      </TouchableOpacity>
    );
  };

  render() {
    const { data } = this.props;

    return (
      <View style={styles.segment}>
        {data.map((item, index) => this.renderTab({ item, index }))}
      </View>
    );
  }
}

export default Segment;
