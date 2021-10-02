import React, {useEffect} from 'react';
import {
  FlatList,
  BackHandler,
  TouchableOpacity,
  Image,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import BackNavigationBar from '../../components/BackNavigationBar';
import Card from '../../components/Card';
import {SCREEN_NAME} from '../../constants/Constant';
import cardIcon from '../../assets/images/ic_card.png';
import Strings from '../../constants/Strings';
import styles from './style';
import shop from '../../assets/images/ic_shop.png';
import FAB from '../../components/FAB';

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const children = route.params?.children;
  const listofCards = useSelector(state => state.card.listofCards);
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

  const RenderTextContainer = ({title, description}) => {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.headertitle}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  };
  const getDefaultCard = () => {
    return getCards()?.find(card => card.isDefault === true);
  };
  const getCards = () => {
    return listofCards.filter(card => card.childId === children.id);
  };
  return (
    <SafeAreaView style={styles.container}>
      <BackNavigationBar isShow={true} title={Strings.details} />
      <RenderTextContainer title={Strings.Name} description={children.name} />
      <RenderTextContainer
        title={Strings.ageTitle}
        description={children.age}
      />
      <FlatList
        data={getCards()}
        contentContainerStyle={styles.flatContainer}
        renderItem={({item}) => <Card item={item} />}
        ListHeaderComponent={() => (
          <Text style={styles.headertitle}>List of Cards</Text>
        )}
        ListFooterComponent={() => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {
              navigation.navigate(SCREEN_NAME.ADD_CARD, {children: children});
            }}>
            <Image source={cardIcon} style={styles.icon} />
            <Text style={styles.content}>{Strings.addCardTitle}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>Card list is empty</Text>
        )}
      />
      {getCards()?.length > 0 ? (
        <FAB
          icon={shop}
          navigationScreenName={SCREEN_NAME.PRODUCT}
          card={getDefaultCard()}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default Details;
