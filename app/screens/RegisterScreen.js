import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import AppColors from '../configs/AppColors'

function RegisterScreen() {
  return (
    <AppScreen>
      <View style={styles.screenContainer}>
        <View>

        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    margin: 25,
    backgroundColor: AppColors.sandy,
  }
});

export default RegisterScreen;

