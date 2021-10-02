import React, {useEffect, useState} from 'react';
import {FlatList, BackHandler, SafeAreaView, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {removeCard, removeChildren} from '../../redux/actions/actions';
import BackNavigationBar from '../../components/BackNavigationBar';
import FAB from '../../components/FAB';
import ListContentItem from '../../components/ListContentItem';
import ConfirmPopup from '../../components/ConfirmPopup';
import Strings from '../../constants/Strings';
import styles from './style';
import {SCREEN_NAME} from '../../constants/Constant';
import addIcon from '../../assets/images/ic_add.png';

const DashboardListview = () => {
  const dispatch = useDispatch();
  const listofChildren = useSelector(state => state.children.listofChildren);
  const [showModel, setShowModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);
  const handleBackButtonClick = () => {
    BackHandler.exitApp();
    return true;
  };
  const hidePopupModal = () => {
    setShowModal(false);
    setDeleteItem(null);
  };
  const showPopupModal = item => {
    setShowModal(true);
    setDeleteItem(item);
  };
  const deleteItems = () => {
    dispatch(removeChildren(deleteItem));
    dispatch(removeCard(deleteItem));
    setShowModal(false);
    setDeleteItem(null);
  };
  useEffect(() => {
    BackHandler.addEventListener(Strings.backPress, handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(Strings.backPress, handleBackButtonClick);
    };
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <BackNavigationBar isShow={false} title={Strings.dashboardTitle} />
      <FlatList
        data={listofChildren}
        contentContainerStyle={styles.flatContainer}
        renderItem={({item}) => (
          <ListContentItem item={item} showPopup={showPopupModal} />
        )}
        ListEmptyComponent={() => (
          <View style={styles.viewContainer}>
            <Text style={styles.textContainer}>{Strings.emptyList}</Text>
          </View>
        )}
      />
      <FAB icon={addIcon} navigationScreenName={SCREEN_NAME.ADD_CHILDREN} />
      <ConfirmPopup
        hidePopupModal={hidePopupModal}
        showModal={showModel}
        deleteItem={deleteItems}
      />
    </SafeAreaView>
  );
};

export default DashboardListview;
