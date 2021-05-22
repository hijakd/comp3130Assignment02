import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TabNavigator from "./TabNavigation";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const AppStack = createStackNavigator();

const AppNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        title: "Back",
        headerTitleStyle: { fontSize: 18 },
      }}
    />
    <AppStack.Screen
      name="Register"
      component={RegisterScreen}
      options={{
        title: "Back",
        headerTitleStyle: { fontSize: 18 },
      }}
    />
    <AppStack.Screen
      name="Landing"
      component={TabNavigator}
      options={{
        headerTitle: "Sojourning Cactus",
        headerTitleAlign: "center",
        // headerShown: false
      }}
    />
  </AppStack.Navigator>
);

export default AppNavigator;
