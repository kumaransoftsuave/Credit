import React, {useState} from 'react';
import {Text, Alert, View, TextInput, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {yupResolver} from '@hookform/resolvers/yup';
import {useSelector, useDispatch} from 'react-redux';
import {KEYBOARD_NUMBER} from '../constants/Constant';
import Strings from '../constants/Strings';
import ConfirmButton from './ConfirmButton';
import schema from '../schema/schema';
import {
  cardNumberFormatter,
  expirationDateFormatter,
  validateExpiry,
} from '../utils/formatters';
import {addCard, nextId} from '../redux/actions/actions';
import {checkCreditCard} from '../utils/utils';
import RadioButton from './RadioButton';
import {validCards} from '../constants/Constant';
const CreditCardForm = ({children}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    watch,
  } = useForm({resolver: yupResolver(schema)});
  const listofCards = useSelector(state => state.card.listofCards);
  const watchShowLanguage = watch('cardNumber');
  const [selectedCard, setSelectedCard] = useState(!(listofCards.length > 0));
  const changeSelect = () => {
    if (listofCards.length > 0) {
      setSelectedCard(!selectedCard);
    } else {
      Alert.alert('Alert', 'You cannot change the default card');
    }
  };
  const defaultValues = {
    cardNumber: '',
    expiry: '',
    cvv: '',
    monthlyLimit: '',
  };
  const isExistingCard = (number, id) => {
    let isExist = listofCards.find(
      card => card.cardNumber === number && card.childId === id,
    );
    let isValidCard = validCards.find(cardNumber => cardNumber === number);
    return isValidCard !== undefined && isExist === undefined && isExist?.cardNumber !== number;
  };

  const onSubmit = data => {
    let valid = checkCreditCard(data.cardNumber);
    if (valid.success) {
      if (validateExpiry(data.expiry)) {
        if (isExistingCard(data.cardNumber, children.id)) {
          let id = nextId(listofCards);
          let item = {
            id: id,
            childId: children.id,
            parentId: children.parentId,
            cardType: valid.type,
            isDefault: selectedCard,
            name: children.name,
            ...data,
          };
          dispatch(addCard(item));
          navigation.goBack();
        } else {
          Alert.alert('Alert', 'Already exisiting Card or Invalid card');
        }
      } else {
        Alert.alert('Alert', 'Please enter a valid expiry date');
      }
    } else {
      Alert.alert('Alert', 'Please enter a valid card number');
    }
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={errors?.cardNumber ? styles.errorInput : styles.input}
              onBlur={onBlur}
              onChangeText={text => {
                onChange(cardNumberFormatter(value, text));
              }}
              value={value}
              maxLength={20}
              keyboardType={KEYBOARD_NUMBER}
              placeholder="Card Number"
              placeholderTextColor="gray"
            />
          )}
          name="cardNumber"
          defaultValue={defaultValues.cardNumber}
        />
        {errors?.cardNumber?.message && (
          <Text style={styles.error}>{errors?.cardNumber?.message}</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={errors?.expiry ? styles.errorInput : styles.input}
              onBlur={onBlur}
              onChangeText={text =>
                onChange(expirationDateFormatter(value, text))
              }
              maxLength={5}
              value={value}
              keyboardType={KEYBOARD_NUMBER}
              placeholder="Expiry Date"
              placeholderTextColor="gray"
            />
          )}
          name="expiry"
          defaultValue={defaultValues.expiry}
        />
        {errors?.expiry?.message && (
          <Text style={styles.error}>{errors?.expiry?.message}</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={errors?.cvv ? styles.errorInput : styles.input}
              onBlur={onBlur}
              onChangeText={text => onChange(text)}
              value={value}
              maxLength={4}
              secureTextEntry={true}
              keyboardType={KEYBOARD_NUMBER}
              placeholder="CVV"
              placeholderTextColor="gray"
            />
          )}
          name="cvv"
          defaultValue={defaultValues.cvv}
        />
        {errors?.cvv?.message && (
          <Text style={styles.error}>{errors?.cvv?.message}</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={errors?.monthlyLimit ? styles.errorInput : styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              maxLength={10}
              keyboardType={KEYBOARD_NUMBER}
              placeholder="Monthly Limit"
              placeholderTextColor="gray"
            />
          )}
          name="monthlyLimit"
          defaultValue={defaultValues.monthlyLimit}
        />
        {errors?.monthlyLimit?.message && (
          <Text style={styles.error}>{errors?.monthlyLimit?.message}</Text>
        )}
      </View>
      <RadioButton
        selected={selectedCard}
        text={'Default Card'}
        onSelected={changeSelect}
      />
      <ConfirmButton
        enableConfirm={errors && Object.keys(errors).length === 0}
        buttonText={Strings.save}
        submit={handleSubmit(onSubmit)}
      />
    </View>
  );
};
export default CreditCardForm;

const styles = StyleSheet.create({
  input: {
    marginTop: 15,
    flexDirection: 'row',
    width: '85%',
    borderWidth: 1,
    padding: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: 'lightgrey',
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  errorInput: {
    padding: 10,
    marginTop: 15,
    flexDirection: 'row',
    borderRadius: 10,
    width: '85%',
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: 'red',
  },
  error: {
    color: '#ff0000',
    marginStart: 45,
    fontSize: 12,
  },
  inputContainer: {
    margin: 5,
    flex: 0,
    color: '#f0f8ff',
    textDecorationColor: '#000',
  },
});
