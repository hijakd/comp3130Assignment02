import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";

import AppColors from "../configs/AppColors";
import AppIcon from "../components/AppIcon";
import AccountScreen from "../screens/AccountScreen";
import NewTravelScreen from "../screens/NewTravelScreen";

const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
  <AppTab.Navigator
    tabBarOptions={{
      activeTintColor: "black",
      activeBackgroundColor: AppColors.primeColor,
      inactiveTintColor: AppColors.sandy,
      inactiveBackgroundColor: AppColors.secondaryColor,
      labelStyle: { fontSize: 20 },
      style: { height: 72 },
      // tabStyle: {height: 72}
    }}
  >
    <AppTab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: () => (
          <AppIcon
            name="home-variant-outline"
            size={50}
            iconColor={AppColors.black}
          />
        ),
      }}
    />
    {/*<AppTab.Screen*/}
    {/*  name="Travels"*/}
    {/*  component={TravelsNonPersist}*/}
    {/*  options={{ tabBarIcon: () => <AppIcon name="book-plus" size={50} iconColor={AppColors.sandy}/> }}*/}
    {/*/>*/}
    <AppTab.Screen
      name="Travels"
      component={NewTravelScreen}
      options={{
        tabBarIcon: () => (
          <AppIcon name="book-plus" size={50} iconColor={AppColors.sandy} />
        ),
      }}
    />
    <AppTab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: () => (
          <AppIcon
            name="book-open-variant"
            size={50}
            iconColor={AppColors.sandy}
          />
        ),
      }}
    />
  </AppTab.Navigator>
);

const styles = StyleSheet.create({});

export default TabNavigator;
