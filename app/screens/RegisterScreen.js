import React, {useState} from "react";
import {StyleSheet, View} from "react-native";

import AppButton from "../components/AppButton";
import AppIcon from "../components/AppIcon";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppColors from "../configs/AppColors";
import DataMan from "../configs/DataMan";
import AppStyles from "../configs/AppStyles";


function RegisterScreen({navigation}) {

  const [userName, setUserName] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [fullnameError, setFullnameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const addNewUser = () => {
    let commonData = DataMan.getInstance();
    let user = commonData.users.length.toString()+1;

    const userid = user.length + 1;
    const newUser = {
      username: userName,
      password: password,
      fullName: fullname,
      userid: "user_" + userid
    };
    console.log(newUser);
    commonData.addNewUser(newUser);
  }

  const doErrorCheck = () => {
    setUserNameError(userName.length > 0 ? "" : "Please enter a valid Username");
    setFullnameError(fullname.length > 0 ? "" : "Please enter Full Name");
    setPasswordError(password.length > 4 ? "" : "Please enter a valid Password");
    return ((userName.length>0) && (fullname.length>0) && (password.length>0) ? true: false)
  }

  return (
    <AppScreen>
      <View style={styles.screenContainer}>
        <View style={styles.welcomeContainer}>
          <AppIcon name="cactus" size={250} color={AppColors.primeColor}/>
        </View>
        <View style={styles.textInputContainer}>
          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="account"
            placeholder="User Name"
            textContentType="emailAddress"
            onChangeText={(inputText) => setUserName(inputText)}
          />
          {userNameError.length > 0 ? <AppText style={AppStyles.errorText}>{userNameError}</AppText> : <></>}

          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            placeholder="Full Name"
            keyboardType="default"
            onChangeText={(inputText) => setFullname(inputText)}
          />
          {fullnameError.length > 0 ? <AppText style={AppStyles.errorText}>{fullnameError}</AppText> : <></>}

          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            secureTextEntry
            textContentType="newPassword"
            onChangeText={(inputText) => setPassword(inputText)}
          />
          {passwordError.length > 0 ? <AppText style={AppStyles.errorText}>{passwordError}</AppText> : <></>}

        </View>
        <View>
          <AppButton title="Register" color="blazing" onPress={() => {
            if (doErrorCheck()) {
              console.log(userName, fullname, password);
              addNewUser();
              navigation.navigate("Landing")
            }
          }}/>
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    marginLeft: 25,
    marginRight: 25,
    // backgroundColor: AppColors.sandy,
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
