import React from 'react';
import { Card } from 'native-base';
import { Text, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

import styles from './styles';
import colors from '../../../util/colors';

const loadingModal = (props) => {
  const { isVisible, title } = props;
  return (
    <Modal isVisible={isVisible} style={styles.modalContainer}>
      <Card style={styles.modalContent}>
        <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
        <Text style={styles.title}>{title}</Text>
      </Card>
    </Modal>
  );
};

loadingModal.propTypes = {
  isVisible: PropTypes.bool,
  title: PropTypes.string,
};

loadingModal.defaultProps = {
  isVisible: false,
  title: 'Carregando...',
};

export default loadingModal;
