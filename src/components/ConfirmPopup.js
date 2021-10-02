import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import COLORS from '../assets/Colors';
import Strings from '../constants/Strings';

const ConfirmPopup = ({hidePopupModal, showModal, deleteItem}) => (
  <Modal
    style={styles.modalStyle}
    transparent={true}
    visible={showModal}
    onBackdropPress={() => {
      hidePopupModal();
    }}>
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.mainContainer}>
          <Text style={styles.headerText}>{Strings.deleteTitle}</Text>
        </View>
        <TouchableOpacity onPress={deleteItem}>
          <Text style={styles.textContainer}>{Strings.yes}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={hidePopupModal}>
          <Text style={styles.textContainer}>{Strings.no}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);
export default ConfirmPopup;
const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  viewContainer: {
    backgroundColor: 'white',
    width: '95%',
    height: 170,
    margin: 25,
    alignItems: 'center',
    borderRadius: 7,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  mainContainer: {
    flexDirection: 'row',
    flex: 0,
    marginTop: 10,
  },
  headerText: {
    alignItems: 'flex-end',
    textAlign: 'right',
    fontSize: 20,
    color: COLORS.background,
    fontWeight: 'bold',
  },
  textContainer: {
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'flex-end',
    textAlign: 'right',
    fontSize: 16,
    color: COLORS.background,
    marginRight: 15,
  },
});
