import { Platform, StyleSheet } from "react-native";
import AppColors from "./AppColors";

export default StyleSheet.create({

// App styles
  container: {
    backgroundColor: AppColors.sandy,
  },

// AppScreen styles
  screen: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },

// AppCard styles
  card:{
    backgroundColor: AppColors.sandy,
    borderRadius: 20,
    overflow: "hidden",
  },
  cardImage:{
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 150,
    width: "100%",
  },
  cardDetails: {
    // flexDirection: "row",
    justifyContent: "space-around"
  },
  cardText:{
    marginLeft: 15,
    fontWeight: "bold",
    fontSize: 22,
  },
  cardSubText:{
    marginLeft: 20,
    fontSize: 18,
    fontStyle: 'italic',
  },

// HomeScreen styles
  outerContainer: {
    flex: 1,
    // backgroundColor:AppColors.otherColor,
    margin: 25,
  },
  homeContainer: {
    backgroundColor: AppColors.sandy,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  profileContainer: {
    marginTop: 100,
  },

// WelcomeScreen styles
  welcomeBackground: {
    flex: 1,
  },
  welcomeContainer: {
    // backgroundColor: 'red',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  buttonContainer: {
    // backgroundColor: 'red',
    marginTop: 150,
    justifyContent: "space-between",
    height: 150,
    width: "50%",
    // alignSelf: "flex-end",
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

//LoginScreen & RegisterScreen
  loginContainer: {
    flex: 1,
    backgroundColor: AppColors.secondaryColor,
    padding: 0, // for SafeAreaView check OS in AppScreen and pad there for iOS
  },
  loginButton: {
    marginTop: 50,
    height: 150,
    width: "50%",
    justifyContent: "center",
    alignSelf: "center",
  },
  textInputContainer: {
    marginTop: 50,
    marginBottom: 30,
  },
  inputScreenContainer: {
    margin: 25,
  },
  inputPad:{
    marginBottom: 25,
  },

  errorText: {
    color: "red",
    fontSize: 16,
  },

// AccountScreen styles
  accountContainer:{
    flex: 1,
    marginTop: 100,
    // justifyContent: "center",
    alignItems: "center",
  },
  accountTitle:{
    marginTop: 20,
    fontSize: 26,
    fontWeight: "bold",
    color: AppColors.white,
    textAlign: "center",
    textShadowColor: "black",
    textShadowRadius: 25,
  },

// AppListItem styles
  listPanel: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  pic: {
    height: 75,
    width: 75,
    borderRadius: 35,
  },
  textPanel: {
    flex: 1,
    // flexDirection: "column",
    backgroundColor: AppColors.secondaryColor,
    borderRadius: 10,
    marginLeft: 15,
    padding: 10,
  },
  textTitle: {
    fontWeight: "bold",
  },
  textSubtitle: {
    fontSize: 13,
  },

// AppTextInput styles
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

// AppButton styles
  button: {
    // backgroundColor: AppColors.primeColor,
    width: "100%",
    padding: 15,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    borderStyle: "solid",
    borderWidth: 1,
  },
  buttonText: {
    color: AppColors.white,
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
