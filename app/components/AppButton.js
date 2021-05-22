import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import AppColors from '../configs/AppColors';


function AppButton({title, color="primaryColor", textColor = "white", cellPad = 15, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, {backgroundColor:AppColors[color]},
        {padding: cellPad}]}>
        <Text style={[styles.buttonText, {color: AppColors[textColor]}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    borderStyle: "solid",
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
