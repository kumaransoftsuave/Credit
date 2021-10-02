import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  BackHandler,
  TouchableOpacity,
  ToastAndroid,
  Platform,
  Alert,
} from 'react-native';
import BackNavigationBar from '../../components/BackNavigationBar';
import {useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {editCard} from '../../redux/actions/actions';
import Strings from '../../constants/Strings';
import productList from '../../constants/product';
import styles from './style';

const Product = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const card = route.params?.card;
  const dispatch = useDispatch();
  const [monthlyLimit, setMonthlyLimit] = useState(card.monthlyLimit);
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
    if (monthlyLimit && parseInt(monthlyLimit, 10) > 0) {
      dispatch(editCard(card));
    }
  };

  const onBuy = item => {
    if (deductAmount(item.price)) {
      update();
      notifyMessage('You bought ' + item.name);
    }
  };
  const deductAmount = price => {
    if (parseInt(monthlyLimit, 10) > 0) {
      let charge = price + price * (3 / 100);
      if (charge < parseInt(monthlyLimit, 10)) {
        let total = parseInt(monthlyLimit, 10) - charge;
        setMonthlyLimit(total);
        card.monthlyLimit = total.toString();
        return true;
      } else {
        Alert.alert('Alert', 'Product price is higher than your limit.');
        return false;
      }
    } else {
      Alert.alert('Alert', 'Your are not having enough money to buy');
      return false;
    }
  };

  function notifyMessage(msg) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      Alert.alert(msg);
    }
  }
  return (
    <View style={styles.container}>
      <BackNavigationBar isShow={true} title={Strings.productTitle} />
      <Text
        style={
          styles.monthlyLimit
        }>{`Your default card monthly limit ${monthlyLimit}$`}</Text>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={productList}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => {
          return item.id;
        }}
        renderItem={({item}) => {
          return (
            <View style={styles.card}>
              <Image style={styles.cardImage} source={{uri: item.image}} />
              <Text style={styles.toysName}>{item.name}</Text>
              <Text style={styles.toysName}>{`Price :$${item.price}`}</Text>
              <Text style={styles.toysName}>{`+ 3% charges`}</Text>
              <TouchableOpacity
                style={styles.container}
                onPress={() => onBuy(item)}>
                <Text style={styles.onPressText}>Buy</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};
export default Product;
