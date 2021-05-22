import React from 'react';
import {View, TextInput, Platform, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.inputContainer}>
      <MaterialCommunityIcons name={icon} size={22}/>
      <TextInput style={styles.textInput} {...otherProps}/>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "lightgrey",
    flexDirection: "row",
    borderRadius: 25,
    padding: 10,
    marginVertical: 10,
    width: "100%",
  },
  textInput: {
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir-Roman",
    marginLeft: 10,
    flex: 1,
  },
});

export default AppTextInput;
