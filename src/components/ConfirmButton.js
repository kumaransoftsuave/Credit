import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import COLORS from '../assets/Colors';

const styles = StyleSheet.create({
  confirmButton: {
    width: '85%',
    height: 45,
    marginTop: 25,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
    borderRadius: 10,
  },
  disabledConfirmButton: {
    width: '85%',
    height: 45,
    marginTop: 25,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.gray,
    borderRadius: 10,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '600',
  },
});
const ConfirmButton = ({enableConfirm, buttonText, submit}) => (
  <TouchableOpacity
    disabled={!enableConfirm}
    style={enableConfirm ? styles.confirmButton : styles.disabledConfirmButton}
    onPress={submit}>
    <Text style={styles.confirmButtonText}>{buttonText}</Text>
  </TouchableOpacity>
);
export default ConfirmButton;
