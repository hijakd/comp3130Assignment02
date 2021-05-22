import React, { useState } from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";

const blurRadiusValue = Platform.OS === "android" ? 0.7 : 5.5;

const categories = [
  {
    label: "Adventure",
    value: 1,
    icon: "airplane-takeoff",
    backgroundColor: "red",
  },
  { label: "Thriller", value: 2, icon: "ghost", backgroundColor: "blue" },
  { label: "Fiction", value: 3, icon: "flash", backgroundColor: "green" },
];

function AppModal({ children, style }) {
  const [categories, setCategories] = useState();

  return (
    <SafeAreaView style={[styles.screen, style]}>
      <TravelsScreen />
      {children}
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

export default AppModal;
