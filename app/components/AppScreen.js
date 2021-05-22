import React from "react";
import { ImageBackground, Platform, SafeAreaView, StyleSheet } from "react-native";

import AppStyles from "../configs/AppStyles";

const blurRadiusValue = Platform.OS === "android" ? 0.7 : 5.5;

function AppScreen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <ImageBackground
        source={require("../../assets/images/Saguaro-cacti_cropped.jpg")}
        style={styles.screenBackground}
        blurRadius={blurRadiusValue}
      >
        {children} 
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenBackground: {
    flex: 1,
  },
});

export default AppScreen;
