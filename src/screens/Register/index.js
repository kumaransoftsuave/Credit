import React, {useEffect, useState, useReducer} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  BackHandler,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {addParent} from '../../redux/actions/actions';
import Strings from '../../constants/Strings';
import {validateText, validateEmail} from '../../utils/utils';
import CustomTextInput from '../../components/CustomTextInput';
import ConfirmButton from '../../components/ConfirmButton';
import {NAME, EMAIL} from '../../redux/actions/types';
import styles from './style';
import {
  EMAIL_TEXT_LENGTH,
  KEYBOARD_EMAIL,
  KEYBOARD_TAP_HANDLED,
  NAME_TEXT_LENGTH,
} from '../../constants/Constant';
import {SCREEN_NAME} from '../../constants/Constant';

const Register = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [enableConfirm, setEnableConfirm] = useState(false);
  const initialState = {
    name: '',
    email: '',
    isInValidUserName: false,
    isInValidUserEmail: false,
  };

  const handleBackButtonClick = () => {
    BackHandler.exitApp();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener(Strings.backPress, handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(Strings.backPress, handleBackButtonClick);
    };
  }, []);
  const reducer = (inputState, action) => {
    switch (action.type) {
      case NAME:
        return {
          ...inputState,
          name: action.name,
          isInValidUserName: !validateText(action.name),
        };
      case EMAIL:
        return {
          ...inputState,
          email: action.email,
          isInValidUserEmail: !validateEmail(action.email),
        };
      default:
        return state;
    }
  };
  const [state, dispatcher] = useReducer(reducer, initialState);

  const login = () => {
    if (validateText(state.name) && validateEmail(state.email)) {
      let id = 1;
      let data = {
        id: id,
        name: state.name.replace(/^[ ]+/g, '').trim(),
        email: state.email,
      };
      dispatch(addParent(data));
      navigation.navigate(SCREEN_NAME.DASHBOARD);
    }
  };
  const changeConfirm = () => {
    setEnableConfirm(validateText(state.name) && validateEmail(state.email));
  };
  const updateName = name => {
    dispatcher({type: NAME, name});
    changeConfirm();
  };
  const updateEmail = email => {
    dispatcher({type: EMAIL, email});
    changeConfirm();
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView enabled={true} style={styles.keyboardContainer}>
        <ScrollView
          scrollEnabled={false}
          keyboardShouldPersistTaps={KEYBOARD_TAP_HANDLED}
          contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <Text style={styles.logo}>{Strings.register}</Text>
            <CustomTextInput
              itemName={state.email}
              invalidData={state.isInValidUserEmail}
              errorMessage={Strings.errorEmail}
              placeholder={Strings.email}
              textLength={EMAIL_TEXT_LENGTH}
              keyboardType={KEYBOARD_EMAIL}
              onChange={updateEmail}
              onEndEdit={updateEmail}
            />
            <CustomTextInput
              itemName={state.name}
              invalidData={state.isInValidUserName}
              errorMessage={Strings.errorName}
              placeholder={Strings.name}
              textLength={NAME_TEXT_LENGTH}
              onChange={updateName}
              onEndEdit={updateName}
            />
            <ConfirmButton
              enableConfirm={enableConfirm}
              buttonText={Strings.register}
              submit={login}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default Register;
