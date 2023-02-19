import React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";

function Home({ navigation }) {
  return (
    <View>
      <View>
        <View style={styles.header}>
          <View style={styles.profile}>
            <Ionicons name="people-circle" size={50} color="white" />
          </View>
          <View style={styles.name}>
            <Text style={styles.peopleName}>Fahad Mahmood</Text>
            <Text style={styles.dez}>Software Devloper</Text>
          </View>
          <View style={styles.safety}>
            <Text style={styles.dez}>Safety Pas No.</Text>
            <Text style={styles.peopleName}>S1234567</Text>
          </View>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.container1}>
          <Icon style={styles.img} name="user-o" size={38} color="black" />
          <View>
            <Text style={styles.text1}>Profile</Text>
          </View>
        </View>
        <View style={styles.container2}>
          <Icon
            style={styles.img}
            onPress={() => navigation.navigate("PunchIn")}
            name="dropbox"
            size={38}
            color="white"
          />
          <View>
            <Text style={styles.text1}>Punch</Text>
          </View>
        </View>
        <View style={styles.container3}>
          <Icon style={styles.img} name="calendar" size={38} color="white" />
          <View>
            <Text style={styles.text1}>Leaves</Text>
          </View>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.container4}>
          <Icon style={styles.img} name="line-chart" size={38} color="white" />
          <View>
            <Text style={styles.text2}>Performance</Text>
          </View>
        </View>
        <View style={styles.container5}>
          <Icon style={styles.img} name="warning" size={38} color="white" />
          <View>
            <Text style={styles.text3}>Violation</Text>
          </View>
        </View>
        <View style={styles.container6}>
          <Icon style={styles.img1} name="bookmark" size={38} color="white" />
          <View>
            <Text style={styles.text3}>Remarks</Text>
          </View>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.container7}>
          <Icon style={styles.img} name="newspaper-o" size={38} color="white" />
          <View>
            <Text style={styles.text4}>Company News</Text>
          </View>
        </View>
        <View style={styles.container8}>
          <Icon style={styles.img1} name="rupee" size={38} color="white" />
          <View>
            <Text style={styles.text4}>Account</Text>
          </View>
        </View>
        <View style={styles.container9}>
          <Icon
            style={styles.img1}
            name="hand-peace-o"
            size={38}
            color="white"
          />
          <View>
            <Text style={styles.text4}>Jobs</Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          fontSize: "22",
          marginTop: 35,
          marginLeft: 20,
          fontWeight: "700",
        }}
      >
        Monthly Update
      </Text>
      {/* <View style={styles.monthly}>
        <View style={styles.tab}>
          <Text style={{ fontSize: "18", color: "#000" }}>Present Days</Text>
          <Text style={{ fontSize: "25", marginTop: 5, color: "#f443361" }}>
            12
          </Text>
        </View>
        <View style={styles.tab1}>
          <Text style={{ fontSize: "18", color: "#000" }}>Absent Days</Text>
          <Text style={{ fontSize: "25", marginTop: 5, color: "#f443361" }}>
            12
          </Text>
        </View>
        <View style={styles.tab2}>
          <Text style={{ fontSize: "18", color: "#000" }}>Over Time</Text>
          <Text style={{ fontSize: "25", marginTop: 5, color: "#f443361" }}>
            12
          </Text>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 65,
    width: "100%",
    backgroundColor: "#0f52ba",
    display: "flex",
    flexDirection: "row",
    padding: 5,
  },
  name: {
    color: "white",
    marginHorizontal: 5,
    marginVertical: 10,
    fontWeight: 18,
  },
  peopleName: {
    color: "white",
    fontSize: 18,
  },
  dez: {
    color: "white",
  },
  safety: {
    marginHorizontal: 120,
    marginVertical: 10,
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
  container1: {
    height: 125,
    width: 125,
    marginHorizontal: 5,
    backgroundColor: "#ffff",
    borderRadius: 2,
  },
  container2: {
    height: 125,
    width: 125,
    marginHorizontal: 5,
    backgroundColor: "#4caf50",
    borderRadius: 2,
  },

  container3: {
    height: 125,
    width: 125,
    marginHorizontal: 5,
    backgroundColor: "#03a9f4",
    borderRadius: 2,
  },
  container4: {
    height: 125,
    width: 125,
    marginHorizontal: 5,
    backgroundColor: "#1769aa",
    borderRadius: 2,
  },
  container5: {
    height: 125,
    width: 125,
    marginHorizontal: 5,
    backgroundColor: "#ff9800",
    borderRadius: 2,
  },
  container6: {
    height: 125,
    width: 125,
    marginHorizontal: 5,
    backgroundColor: "#3f51b5",
    borderRadius: 2,
  },
  container7: {
    height: 125,
    width: 125,
    marginHorizontal: 5,
    backgroundColor: "#229954",
    borderRadius: 2,
  },
  container8: {
    height: 125,
    width: 125,
    marginHorizontal: 5,
    backgroundColor: "#ff5722",
    borderRadius: 2,
  },
  container9: {
    height: 125,
    width: 125,
    marginHorizontal: 5,
    backgroundColor: "#3d5afe",
    borderRadius: 2,
  },

  img: {
    paddingHorizontal: 45,
    paddingTop: 20,
  },
  img1: {
    paddingHorizontal: 49,
    paddingTop: 20,
  },
  text1: {
    fontSize: 19,
    marginHorizontal: 30,
    marginTop: 6,
    fontWeight: "700",
    color: "gray",
  },
  text2: {
    fontSize: 16,
    marginHorizontal: 13,
    marginTop: 6,
    fontWeight: "600",
    color: "white",
  },
  text3: {
    fontSize: 18,
    marginHorizontal: 23,
    marginTop: 6,
    fontWeight: "600",
    color: "white",
  },
  text4: {
    fontSize: 18,
    marginHorizontal: 15,
    marginTop: 6,
    fontWeight: "700",
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
  monthly: {
    marginTop: 0,
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
  },
  tab: {
    marginTop: 20,
    height: 70,
    width: 130,
    backgroundColor: "#84c887",
    padding: 5,
  },
  tab1: {
    marginTop: 20,
    height: 70,
    width: 130,
    backgroundColor: "#f27573",
    padding: 5,
  },
  tab2: {
    marginTop: 20,
    height: 70,
    width: 130,
    backgroundColor: "#ffb851",
    padding: 5,
  },
});

export default Home;
