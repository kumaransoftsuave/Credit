import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Alert,
  View,
  KeyboardAvoidingView,
  ScrollView,
  BackHandler,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {editCard} from '../../redux/actions/actions';
import Strings from '../../constants/Strings';
import CustomTextInput from '../../components/CustomTextInput';
import ConfirmButton from '../../components/ConfirmButton';
import styles from './style';
import {KEYBOARD_NUMBER, KEYBOARD_TAP_HANDLED} from '../../constants/Constant';
import BackNavigationBar from '../../components/BackNavigationBar';
import {validateAmount} from '../../utils/utils';
import RadioButton from '../../components/RadioButton';

const EditMonthlyLimit = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const listofCards = useSelector(state => state.card.listofCards);
  const card = route.params?.card;
  const dispatch = useDispatch();
  const [monthlyLimit, setMonthlyLimit] = useState(card.monthlyLimit);
  const [enableConfirm, setEnableConfirm] = useState(true);
  const [selectedCard, setSelectedCard] = useState(card.isDefault);
  const changeSelect = () => {
    if (listofCards.length > 1 && !selectedCard) {
      setSelectedCard(!selectedCard);
    } else {
      Alert.alert('Alert', 'You cannot change the default card');
    }
  };
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

  const update = () => {
    if (enableConfirm && monthlyLimit) {
      card.monthlyLimit = monthlyLimit;
      card.isDefault = selectedCard;
      dispatch(editCard(card));
      navigation.goBack();
    } else {
      changeConfirm();
    }
  };
  const changeConfirm = () => {
    setEnableConfirm(validateAmount(monthlyLimit));
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView enabled={true} style={styles.keyboardContainer}>
        <ScrollView
          scrollEnabled={false}
          keyboardShouldPersistTaps={KEYBOARD_TAP_HANDLED}
          contentContainerStyle={styles.scrollContainer}>
          <BackNavigationBar isShow={true} title={Strings.editMonthlyLimit} />
          <View style={styles.container}>
            <CustomTextInput
              itemName={monthlyLimit}
              invalidData={!enableConfirm}
              errorMessage={'Please enter a valid month limit'}
              placeholder={'Enter Monthly Limit'}
              textLength={10}
              keyboardType={KEYBOARD_NUMBER}
              onChange={value => {
                setMonthlyLimit(value);
                changeConfirm();
              }}
              onEndEdit={value => {
                setMonthlyLimit(value);
                changeConfirm();
              }}
            />
            <RadioButton
              selected={selectedCard}
              text={'Default Card'}
              onSelected={changeSelect}
            />
            <ConfirmButton
              enableConfirm={enableConfirm}
              buttonText={Strings.update}
              submit={update}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default EditMonthlyLimit;
