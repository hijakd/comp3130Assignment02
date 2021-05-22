import React, {useState} from 'react';
import {Image, View, StyleSheet, TouchableHighlight, Modal, Button, FlatList} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from "./AppText";
import AppColors from "../configs/AppColors";
import AppModal from "./AppModal";

const AppCard = ({image, title, subtitle, date, onPress, onSwipeLeft, data}) => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Swipeable renderRightActions={onSwipeLeft}>
      <TouchableHighlight onPress={()=> setModalVisible(true)} underlayColor={AppColors.brightGreen} style={styles.touchStyle}>
        <View style={styles.card}>
          <Image source={image} style={styles.cardImage}/>
          <View style={styles.cardDetails}>
            <AppText style={styles.cardText}>{title}</AppText>
            <View style={styles.cardSubDetails}>
              <AppText style={styles.cardSubText}>{subtitle}</AppText>
              <AppText style={styles.cardSubText}>{date}</AppText>
            </View>

          </View>
        </View>
      </TouchableHighlight>
      {/*<Modal visible={modalVisible} animationType="slide">*/}
      {/*  <AppModal>*/}
      {/*    <Button title="Close" onPress={()=> setModalVisible(false)}/>*/}
      {/*  </AppModal>*/}
      {/*</Modal>*/}
    </Swipeable>


  );
};

const styles = StyleSheet.create({
  card:{
    backgroundColor: AppColors.sandy,
    borderRadius: 20,
    overflow: "hidden",
  },
  cardImage:{
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 150,
    width: "100%",
  },
  cardDetails: {
    justifyContent: "space-around"
  },
  cardText:{
    marginLeft: 15,
    fontWeight: "bold",
    fontSize: 22,
  },
  cardSubText:{
    flex: 1,
    marginLeft: 20,
    fontSize: 18,
    fontStyle: 'italic',
  },
  touchStyle:{
    borderRadius: 20,
  },
  cardSubDetails: {
    flexDirection: "row",
  }
});

export default AppCard;

