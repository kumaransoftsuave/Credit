import React, {useEffect} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  BackHandler,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import BackNavigationBar from '../../components/BackNavigationBar';
import CreditCardForm from '../../components/CreditCardForm';
import Strings from '../../constants/Strings';
import styles from './style';

const AddCard = () => {
  const route = useRoute();
  const children = route.params?.children;
  const navigation = useNavigation();
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

  return (
    <SafeAreaView style={styles.container}>
      <BackNavigationBar isShow={true} title={Strings.addCardTitle} />
      <KeyboardAvoidingView
        style={styles.avoider}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <CreditCardForm children={children} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddCard;
