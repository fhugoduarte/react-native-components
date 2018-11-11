import React from 'react';
import { TextInput, Image } from 'react-native';
import { Card } from 'native-base';
import PropTypes from 'prop-types';

import Search from '../../../imgs/buscar_cinza.png';
import colors from '../../../util/colors';
import styles from './styles';

const searchBar = (props) => {
  const { onChange, placeholder, initialValue } = props;
  return (
    <Card style={styles.card}>
      <Image source={Search} style={styles.searchIcon} />
      <TextInput
        defaultValue={initialValue}
        onChangeText={onChange}
        placeholderTextColor={colors.BLACK_27_OPACITY}
        placeholder={placeholder}
        underlineColorAndroid={colors.TRANSPARENT}
        style={styles.inputStyle}
      />
    </Card>
  );
};

searchBar.defaultProps = {
  placeholder: 'Ex: dor ocular',
  initialValue: '',
};

searchBar.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  initialValue: PropTypes.string,
};

export default searchBar;
