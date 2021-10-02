import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import COLORS from '../assets/Colors';
import {SCREEN_NAME, TIMEOUT} from '../constants/Constant';
import Strings from '../constants/Strings';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.background,
    textAlign: 'center',
  },
  logo: {
    width: '60%',
    height: '80%',
    resizeMode: 'contain',
  },
});

const SplashScreen = () => {
  const navigation = useNavigation();
  const parent = useSelector(state => state.parent.parent);
  useEffect(() => {
    setTimeout(() => {
      if (parent && Object.keys(parent).length === 0) {
        navigation.navigate(SCREEN_NAME.REGISTER);
      } else {
        navigation.navigate(SCREEN_NAME.DASHBOARD);
      }
    }, TIMEOUT);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.sectionTitle}>{Strings.title}</Text>
    </View>
  );
};

export default SplashScreen;
