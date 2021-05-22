export default class DataMan {
  static dmInstance = null;
  userID = "";

  users = [
    {
      userid: "user_1",
      username: "tron",
      password: "fight",
      fullName: "Tron",
    },
    {
      userid: "user_2",
      username: "flynn",
      password: "fight",
      fullName: "Kevin Flynn",
    },
  ];

  locations = [
    {
      locId: 1,
      userid: "user01",
      image: require("../../assets/images/wp2748190-tron.jpg"),
      title: "The Grid",
      subtitle: "Cyberspace",
      date: "9.7.1982"
      // image source; https://wallpapercave.com/w/wp2748190
    },
    {
      locId: 2,
      userid: "user02",
      image: require("../../assets/images/HERO-Vancouver-Tech-Companies.png"),
      title: "Vancouver",
      subtitle: "The Real World",
      date: "9.7.1982"
      // image source; https://www.northeastern.edu/graduate/blog/vancouver-tech-companies/
    },
    {
      locId: 3,
      userid: "user02",
      image: require("../../assets/images/wp2748190-tron.jpg"),
      title: "The Grid",
      subtitle: "Cyberspace",
      date: "9.7.1982"
      // image source; https://wallpapercave.com/w/wp2748190
    },
    {
      locId: 4,
      userid: "user02",
      image: require("../../assets/images/sydney.jpg"),
      title: "Sydney",
      subtitle: "New South Wales",
      date: "21.9.1999"
      // image source; https://www.australia.com/en/places/sydney-and-surrounds/guide-to-sydney.html
    }
  ];

  static getInstance() {
    if (DataMan.dataInstance == null) {
      DataMan.dataInstance = new DataMan();
    }
    return this.dataInstance;
  }

  getUserID() {
    return this.userID;
  }

  setUserID(id) {
    this.userID = id;
  }

  addNewUser(user){
    this.users.push(user);
  }

  setLoggedOut(id) {
    this.userID = "";
  }

  addNewLocation(location){
    this.locations.push(location);
  }

  getLocations(id) {
    return this.locations.filter((location) => location.userid === id);
  }
}
