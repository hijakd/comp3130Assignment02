import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import AppColors from '../configs/AppColors'

function RegisterScreen() {
  return (
    <AppScreen>
      <View style={styles.screenContainer}>
        <View  style={styles.welcomeContainer}>

        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    margin: 25,
    backgroundColor: AppColors.sandy,
  },
  welcomeContainer: {
    // backgroundColor: 'red',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  textInputContainer: {
    marginTop: 50,
    marginBottom: 30,
  },
});

export default RegisterScreen;

