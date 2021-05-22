import React, {useState} from "react";
import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";


import AppCard from "../components/AppCard";
import AppIcon from "../components/AppIcon";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppColors from "../configs/AppColors";
import DataMan from "../configs/DataMan";

const getLocs = () => {
  let commonData = DataMan.getInstance();
  let user = commonData.getUserID();
  return commonData.getLocations(user);
}

function HomeScreen(props) {

  const [locData, setLocData] = useState(getLocs());
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (location) => {
    const newLocData = locData.filter (item => item.locId !== location.locId);
    setLocData(newLocData);
  }

  return (
    <AppScreen>
      <View style={styles.headerContainer}>
        <View style={styles.welcomeContainer}>
          <AppIcon
            name="cactus"
            size={150}
            color={AppColors.primeColor}
          />
        </View>
        <View style={styles.outerContainer}>
          <AppText style={styles.welcomeText}>Your travels are memories, keep track of them, show them off</AppText>
        </View>
      </View>

      {/** Display Travel Cards */}
      <View style={styles.travelContainer}>
        <View style={styles.listContainer}>
          <FlatList ItemSeparatorComponent={() => (<View style={{marginBottom: 15}}/>)} data={locData}
                    refreshing={refreshing}
                    keyExtractor={userLocation => userLocation.locId.toString()}
                    onRefresh={()=> setLocData(getLocs())}
                    renderItem={({item}) => (
                      <AppCard
                        image={item.image}
                        title={item.title}
                        subtitle={item.subtitle}
                        date={item.date}
                        onPress={()=> console.log(item)}
                        onSwipeLeft={()=> (
                          <View style={styles.deleteView}>
                            <TouchableOpacity onPress={()=> handleDelete(item)}>
                              <AppIcon name={"trash-can"} iconColor={"red"} backgroundColor={"black"} size={80}/>
                            </TouchableOpacity>

                          </View>)}
                      />
                    )}
          />
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
  },
  welcomeContainer: {
    // justifyContent: "center",
    // alignItems: "center",
  },
  outerContainer: {
    flex: 1,
    margin: 20,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: "bold",
    color: AppColors.white,
    textAlign: "center",
    textShadowColor: "black",
    textShadowRadius: 25,
  },
  homeText: {
    fontSize: 18,
    justifyContent: "center",
    alignContent: "center",
  },
  buttonsContainer:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 50,
  },
  homeButtons:{
    margin: 25,
    justifyContent: "center",
  },
  container: {
    backgroundColor: AppColors.sandy,
  },
  travelContainer:{
    flex: 5,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  listContainer:{
    flex: 1,
    justifyContent: "flex-start",
  },
  deleteView:{
    backgroundColor: AppColors.blazing,
    width: "95%",
    borderRadius: 20,
    paddingRight: 15,
    justifyContent: "center",
    alignItems: "flex-end"
  }
});

export default HomeScreen;
