import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import COLORS from '../assets/Colors';

const backIcon = require('../assets/images/ic_back.png');

const BackNavigationBar = ({title, isShow}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title}</Text>
      {isShow && (
        <TouchableOpacity
          onPress={() => {
            handleBackPress();
          }}>
          <Image source={backIcon} style={styles.arrow} />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default BackNavigationBar;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: COLORS.background,
  },
  headerText: {
    fontSize: 18,
    width: '100%',
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    color: '#fff',
  },
  arrow: {
    width: 50,
    height: 30,
    aspectRatio: 1,
    marginStart: 10,
    marginTop: 10,
    marginBottom: 15,
  },
});
