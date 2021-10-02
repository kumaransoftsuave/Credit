import React, {useState, useEffect, useReducer} from 'react';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  BackHandler,
  SafeAreaView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {addChildren, nextId} from '../../redux/actions/actions';
import BackNavigationBar from '../../components/BackNavigationBar';
import CustomTextInput from '../../components/CustomTextInput';
import {validateText, validateAge} from '../../utils/utils';
import ConfirmButton from '../../components/ConfirmButton';
import Strings from '../../constants/Strings';
import styles from './style';
import {
  AGE_TEXT_LENGTH,
  KEYBOARD_NUMBER,
  KEYBOARD_DEFAULT,
  KEYBOARD_TAP_HANDLED,
  NAME_TEXT_LENGTH,
} from '../../constants/Constant';
import {NAME, AGE} from '../../redux/actions/types';

const AddChild = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const initialState = {
    name: '',
    age: '',
    isInValidUserName: false,
    isInValidUserAge: false,
  };
  const listofChildren = useSelector(state => state.children.listofChildren);
  const parent = useSelector(state => state.parent.parent);
  const [enableConfirm, setEnableConfirm] = useState(false);
  const reducer = (state, action) => {
    switch (action.type) {
      case NAME:
        return {
          ...state,
          name: action.name,
          isInValidUserName: !validateText(action.name),
        };
      case AGE:
        return {
          ...state,
          age: action.age,
          isInValidUserAge: !validateAge(action.age),
        };
      default:
        return state;
    }
  };

  const [state, dispatcher] = useReducer(reducer, initialState);

  const handleBackButtonClick = () => {
    navigation.goBack();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener(Strings.backPress, handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(Strings.backPress, handleBackButtonClick);
    };
  }, []);

  const submitData = () => {
    if (validateText(state.name) && validateAge(state.age)) {
      let id = nextId(listofChildren);
      let data = {
        id: id,
        parentId: parent.id,
        name: state.name.replace(/^[ ]+/g, '').trim(),
        age: state.age,
      };
      dispatch(addChildren(data));
      navigation.goBack();
    }
  };
  const changeConfirm = () => {
    setEnableConfirm(validateText(state.name) && validateAge(state.age));
  };
  const updateName = name => {
    dispatcher({type: NAME, name});
    changeConfirm();
  };
  const updateAge = age => {
    dispatcher({type: AGE, age});
    changeConfirm();
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <BackNavigationBar isShow={true} title={Strings.add} />
      <KeyboardAvoidingView enabled={true} style={styles.keyboardContainer}>
        <ScrollView
          scrollEnabled={false}
          keyboardShouldPersistTaps={KEYBOARD_TAP_HANDLED}
          contentContainerStyle={styles.scrollContainer}>
          <View style={styles.viewContainer}>
            <CustomTextInput
              itemName={state.name}
              invalidData={state.isInValidUserName}
              errorMessage={Strings.errorName}
              placeholder={Strings.name}
              keyboardType={KEYBOARD_DEFAULT}
              textLength={NAME_TEXT_LENGTH}
              onChange={updateName}
              onEndEdit={updateName}
            />
            <CustomTextInput
              multiline={true}
              itemName={state.age}
              invalidData={state.isInValidUserAge}
              errorMessage={Strings.errorAge}
              placeholder={Strings.age}
              keyboardType={KEYBOARD_NUMBER}
              textLength={AGE_TEXT_LENGTH}
              onChange={updateAge}
              onEndEdit={updateAge}
            />
            <ConfirmButton
              enableConfirm={enableConfirm}
              buttonText={Strings.save}
              submit={submitData}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddChild;
