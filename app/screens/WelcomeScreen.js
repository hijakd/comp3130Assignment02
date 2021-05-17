import React from 'react'
import { StyleSheet, View } from 'react-native'

import AppButton from "../components/AppButton";
import AppIcon from '../components/AppIcon';
import AppScreen from '../components/AppScreen';
import AppText from "../components/AppText";
import AppColors from "../configs/AppColors";

function WelcomeScreen({navigation}) {
    return (
        <AppScreen>
            <View style={styles.welcomeContainer}>
                <AppIcon name="cactus" size={250}/>
                <AppText style={styles.welcomeText}>Welcome to the Sojourning Cactus!?!</AppText>
                <View>
                  <AppButton title="Register" color="blazing" onPress={() => navigation.navigate("Register")}/>
                  <AppButton title="Login" color="primeColor" onPress={() => navigation.navigate("Login")}/>
                </View>
            </View>
        </AppScreen>
    );
}


const styles = StyleSheet.create({
    welcomeContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
      },
      welcomeText: {
        marginTop: 20,
        fontSize: 26,
        fontWeight: "bold",
        color: AppColors.white,
        textAlign: "center",
        textShadowColor: "black",
        textShadowRadius: 25,
      },
      buttonContainer: {
        // backgroundColor: 'red',
        marginTop: 150,
        justifyContent: "space-between",
        height: 150,
        width: "50%",
      },

});

export default WelcomeScreen;
