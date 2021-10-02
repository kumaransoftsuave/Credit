import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import COLORS from '../assets/Colors';
const RadioButton = props => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.onSelected();
      }}>
      <View style={[styles.radioCircle, props.style]}>
        {props.selected ? <View style={styles.button} /> : null}
      </View>
      <Text style={styles.paragraph}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton;
const styles = StyleSheet.create({
  paragraph: {
    fontSize: 16,
    marginStart: 5,
    fontWeight: 'bold',
    color: COLORS.background,
  },
  button: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.background,
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {flexDirection: 'row', marginStart: 35, marginTop: 20},
});
