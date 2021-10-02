import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../assets/Colors';

const FAB = ({style, navigationScreenName, icon, card}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={style ?? styles.fabButton}
      onPress={() => {
        navigation.navigate(navigationScreenName, {card: card});
      }}>
      <Image source={icon} style={styles.imageIcon} />
    </TouchableOpacity>
  );
};
export default FAB;

const styles = StyleSheet.create({
  fabButton: {
    position: 'absolute',
    height: 60,
    width: 60,
    bottom: 15,
    right: 15,
    borderRadius: 30,
    padding: 15,
    backgroundColor: COLORS.background,
    zIndex: 15,
    alignContent: 'center',
    alignSelf: 'center',
  },
  imageIcon: {
    width: '80%',
    height: '90%',
    alignSelf: 'center',
    tintColor: COLORS.white,
  },
});
