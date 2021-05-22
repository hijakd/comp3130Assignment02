import React from "react";
import { createStackNavigation } from "@react-navigation/stack";

import RegisterScreen from "../screens/RegisterScreen";

const AppStack = createStackNavigation();

const AppNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Register" component={RegisterScreen} options={{title: "Back"...}}/>
  </AppStack.Navigator>
);

export default AppNavigator;
