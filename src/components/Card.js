import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_NAME} from '../constants/Constant';
import COLORS from '../assets/Colors';

const Card = ({item}) => {
  const navigation = useNavigation();

  const RenderTextContainer = ({title, description}) => {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.headertitle}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerText}
        onPress={() => {
          navigation.navigate(SCREEN_NAME.EDIT_CARD, {card: item});
        }}>
        <Text style={styles.title}>{item.cardNumber}</Text>
        <Text style={styles.title}>{item.cardType}</Text>
        {item.isDefault && <Text style={styles.title}>Default Card</Text>}
        <RenderTextContainer title={'Expiry: '} description={item.expiry} />
        <RenderTextContainer
          title={'Monthly Limit: $'}
          description={item.monthlyLimit}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: '#FFF',
    elevation: 2,
  },
  title: {
    fontSize: 18,
    padding: 5,
    color: '#000',
    fontWeight: 'bold',
  },
  containerText: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
    justifyContent: 'center',
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
  },
  headertitle: {
    fontSize: 18,
    color: '#000',
  },
  description: {
    fontSize: 18,
    justifyContent: 'center',
  },
  content: {
    fontSize: 16,
    marginStart: 5,
    justifyContent: 'center',
    fontWeight: 'bold',
    color: COLORS.white,
  },
  photo: {
    height: 50,
    width: 50,
  },
  icon: {
    height: 20,
    width: 20,
    tintColor: COLORS.white,
  },
  imageContainer: {
    marginTop: 5,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
  },
  itemContainer: {
    flex: 0.5,
    margin: 5,
    padding: 5,
    borderRadius: 10,
    backgroundColor: COLORS.background,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
