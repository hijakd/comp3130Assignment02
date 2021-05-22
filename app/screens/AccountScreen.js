import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppColors from "../configs/AppColors";


function AccountScreen (){
  return (
    <AppScreen style={styles.container}>
      <View style={styles.accountContainer}>
        <AppText style={styles.accountTitle}>Account Details</AppText>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.sandy,
  },
  accountContainer:{
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  accountTitle:{
    marginTop: 20,
    fontSize: 26,
    fontWeight: "bold",
    color: AppColors.white,
    textAlign: "center",
    textShadowColor: "black",
    textShadowRadius: 25,
  },
});
export default AccountScreen;

