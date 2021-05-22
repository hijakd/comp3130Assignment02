import React from "react";
import {StyleSheet, View} from "react-native";
import {Formik} from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppIcon from "../components/AppIcon";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppColors from "../configs/AppColors";
import DataMan from "../configs/DataMan";

// TODO display of background image changes (re-scales) when keyboard is active

const valSchema = Yup.object().shape({
  userName: Yup.string().required().label("Username"),
  password: Yup.string().required().min(4).max(12).label("Password"),
});

const users = [
  {
    userid: "user01",
    userName: "tron",
    password: "fight",
  },
  {
    userid: "user02",
    userName: "flynn",
    password: "fight",
  },
];

const validateUser = ({userName, password}) => {
  return (
    users.filter(
      (user) => user.userName === userName && user.password === password
    ).length > 0
  );
};

const getUser = ({userName}) => {
  return users.find((user) => user.userName === userName);
};

const startUser = ({userName}) => {
  let commonData = DataMan.getInstance();
  let userID = getUser({userName}).userid;
  commonData.setUserID(userID);
};

function LoginScreen({navigation}) {
  return (
    <AppScreen style={styles.loginContainer}>
      <View style={styles.welcomeContainer}>
        <AppIcon name="cactus" size={250} color={AppColors.primeColor}/>
      </View>

      <Formik
        initialValues={{userName: "", password: ""}}
        onSubmit={(values, {resetForm}) => {
          if (validateUser(values)) {
            resetForm();
            startUser(values);
            navigation.replace("Landing", {
              screen: "Landing",
              params: {
                paramUser: values.userName,
                paramName: getUser(values).name,
              },
            });
          } else {
            resetForm();
            alert("Invalid login details.");
          }
        }}
        validationSchema={valSchema}
      >
        {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
            values,
          }) => (
          <>
            <View style={styles.inputScreenContainer}>
              {/*<View style={AppStyles.textInputContainer}>*/}
              <View style={styles.inputPad}>
                <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="account-circle"
                  placeholder="Username"
                  keyboardType="default"
                  onBlur={() => setFieldTouched("userName")}
                  onChangeText={handleChange("userName")}
                />
                {touched.userName && (
                  <AppText style={{color: "red", fontSize: 16}}>
                    {errors.userName}
                  </AppText>
                )}
              </View>
              <View>
                <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="lock"
                  placeholder="Password"
                  secureTextEntry
                  textContentType="password"
                  onBlur={() => setFieldTouched("password")}
                  onChangeText={handleChange("password")}
                />
                {touched.password && (
                  <AppText style={{color: "red", fontSize: 16}}>
                    {errors.password}
                  </AppText>
                )}
              </View>
              <View style={styles.loginButton}>
                <AppButton title="Login" color="primeColor" onPress={handleSubmit}/>
              </View>

            </View>
          </>
        )}
      </Formik>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: AppColors.secondaryColor,
    padding: 0, // for SafeAreaView check OS in AppScreen and pad there for iOS
  },
  screenContainer: {
    margin: 25,
    backgroundColor: AppColors.sandy,
  },
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  textInputContainer: {
    marginTop: 50,
    marginBottom: 30,
  },
  inputScreenContainer: {
    margin: 25,
  },
  inputPad: {
    marginBottom: 25,
  },
  loginButton: {
    marginTop: 50,
    height: 150,
    width: "50%",
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default LoginScreen;
