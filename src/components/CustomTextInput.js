import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import COLORS from '../assets/Colors';
import {KeyboardRTNext} from '../constants/Constant';

const CustomTextInput = ({
  multiline,
  keyboardType,
  style,
  itemName,
  invalidData,
  errorMessage,
  placeholder,
  textLength,
  onChange,
  onEndEdit,
}) => {
  return (
    <View style={styles.editTextView}>
      <View
        style={invalidData ? styles.errorTextFieldView : styles.textFieldView}>
        <TextInput
          style={style ?? styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={COLORS.placeholder}
          editable={true}
          multiline={multiline}
          value={itemName}
          keyboardType={keyboardType}
          maxLength={textLength}
          onChangeText={text => {
            onChange(text);
          }}
          onEndEditing={value => {
            onEndEdit(value.nativeEvent.text);
          }}
          returnKeyType={KeyboardRTNext}
          blurOnSubmit={false}
        />
      </View>
      {invalidData && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

export default CustomTextInput;
const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  viewContainer: {
    flexDirection: 'column',
    flex: 0,
  },
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
  confirmButtonText: {
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '600',
  },
  textInput: {
    fontSize: 14,
    textAlignVertical: 'center',
    height: 50,
    width: '100%',
    color: 'black',
    borderRadius: 5,
    overflow: 'hidden',
    paddingStart: 15,
  },
  textFieldView: {
    marginTop: 15,
    flexDirection: 'row',
    width: '90%',
    borderWidth: 1,
    justifyContent: 'space-between',
    borderColor: 'lightgrey',
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  errorTextFieldView: {
    marginTop: 15,
    flexDirection: 'row',
    borderRadius: 10,
    width: '90%',
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    justifyContent: 'space-between',
    borderColor: 'red',
  },
  errorMessage: {
    marginTop: 5,
    alignSelf: 'flex-start',
    fontWeight: '400',
    fontSize: 10,
    color: 'red',
  },
  headingTextView: {
    width: '95%',
    textAlignVertical: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 5,
    fontSize: 25,
    color: '#fff',
    marginStart: 20,
    marginEnd: 20,
  },
  textLargeInput: {
    fontSize: 14,
    textAlignVertical: 'center',
    height: '10%',
    width: '100%',
    color: 'black',
    borderRadius: 3,
    overflow: 'hidden',
    paddingStart: 15,
  },
  editTextView: {
    flex: 1,
    marginStart: 15,
    marginEnd: 15,
    marginTop: 10,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 0,
    backgroundColor: 'white',
  },
  mainContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  bottomEndText: {
    textAlignVertical: 'center',
    color: COLORS.black,
    fontSize: 16,
    marginStart: 20,
    marginEnd: 15,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
