import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppColors from "../configs/AppColors";
import DataMan from "../configs/DataMan";

const getLocs = () => {
  let commonData = DataMan.getInstance();
  let user = commonData.getUserID();
  return commonData.getLocations(user);
};

function NewTravelScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [date, setDate] = useState("");
  // const [image, setImage] = useState(null);

  const [titleError, setTitleError] = useState("");
  const [subTitleError, setSubtitleError] = useState("");
  const [dateError, setDateError] = useState("");
  // const [imageError, setImageError] = useState("");

  const doErrorCheck = () => {
    setTitleError(title.length > 0 ? "" : "Please enter a valid Location");
    setSubtitleError(subtitle.length > 0 ? "" : "Please enter a valid Region");
    setDateError(date.length > 0 ? "" : "Please enter a valid Date");
    return title.length > 0 && subtitle.length > 0 && date ? true : false;
  };

  const addNewLocation = () => {
    let commonData = DataMan.getInstance();
    let user = commonData.getUserID();

    const locations = commonData.getLocations(user);
    const locationId = locations.length + 2;
    const newLocation = {
      title: title,
      subtitle: subtitle,
      date: date,
      locId: locationId,
      userid: user,
    };

    commonData.addNewLocation(newLocation);
  };

  return (
    <AppScreen>
      <View style={styles.screenContainer}>
        <AppTextInput
          icon="map-marker-plus"
          placeholder="Location"
          value={title}
          onChangeText={(inputText) => setTitle(inputText)}
        />
        {titleError.length > 0 ? (
          <AppText style={styles.errorText}>{titleError}</AppText>
        ) : (
          <></>
        )}

        <AppTextInput
          icon="map-marker-plus"
          placeholder="Region"
          value={subtitle}
          onChangeText={(inputText) => setSubtitle(inputText)}
        />
        {subTitleError.length > 0 ? (
          <AppText style={styles.errorText}>{subTitleError}</AppText>
        ) : (
          <></>
        )}

        <AppTextInput
          icon="calendar-range"
          placeholder="Date"
          value={date}
          keyboardType="numeric"
          onChangeText={(inputText) => setDate(inputText)}
        />
        {dateError.length > 0 ? (
          <AppText style={styles.errorText}>{dateError}</AppText>
        ) : (
          <></>
        )}

        <View style={styles.addButton}>
          <AppButton
            title="Add Location"
            color="primeColor"
            onPress={() => {
              if (doErrorCheck()) {
                addNewLocation();
                navigation.navigate("Home");
              }
            }}
          />
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    margin: 25,
  },
  addButton: {
    marginTop: 40,
    height: 150,
    width: "75%",
    justifyContent: "center",
    alignSelf: "center",
  },
  errorText: {
    margin: 5,
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
    textShadowColor: AppColors.black,
    textShadowRadius: 20,
  },
});

export default NewTravelScreen;
