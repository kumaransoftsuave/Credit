import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_NAME} from '../constants/Constant';
import Strings from '../constants/Strings';
import COLORS from '../assets/Colors';
import cardIcon from '../assets/images/ic_card.png';
const deleteIcon = require('../assets/images/ic_delete.png');

const ListContentItem = ({item, showPopup}) => {
  const navigation = useNavigation();

  const RenderImageContainer = () => {
    return (
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => {
            navigation.navigate(SCREEN_NAME.ADD_CARD, {children: item});
          }}>
          <Image source={cardIcon} style={styles.icon} />
          <Text style={styles.content}>{Strings.addCardTitle}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => {
            showPopup(item);
          }}>
          <Image source={deleteIcon} style={styles.icon} />
          <Text style={styles.content}>{Strings.delete}</Text>
        </TouchableOpacity>
      </View>
    );
  };

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
        onPress={() => {
          navigation.navigate(SCREEN_NAME.DETAILS, {children: item});
        }}
        style={styles.containerText}>
        <Text style={styles.title}>{item.name}</Text>
        <RenderTextContainer title={Strings.ageTitle} description={item.age} />
        <RenderImageContainer />
      </TouchableOpacity>
    </View>
  );
};

export default ListContentItem;

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
    flex: 1,
    fontSize: 16,
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
  },
  headertitle: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
  },
  description: {
    flex: 1,
    fontSize: 12,
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
