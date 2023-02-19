import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import logo from "../asset/logo.jpeg";
import Ionicons from "@expo/vector-icons/Ionicons";

function Login({ navigation }) {
  //   const logo =
  //     "https://dcassetcdn.com/design_img/3641256/145813/145813_20436302_3641256_947524b4_thumbnail.png";
  return (
    <>
      <View style={styles.root}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Enter Your Employee Id" />
      </View>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Enter Your password" />
      </View>
      <View style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate("Home")}
        >
          Login User
        </Text>
      </View>
      <View style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
      </View>
      <View style={styles.website}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="logo-google" size={32} color="#ea4335" />
          <Text style={styles.websiteText}>Visit Our Website</Text>
        </View>
      </View>
      <View style={styles.call}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="people-outline" size={32} color="#2f414d" />
          <Text style={styles.callText}>Signup Yourself</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 0,
  },
  logo: {
    width: "100%",
    maxWidth: 500,
    marginTop: 20,
    height: 300,
  },
  container: {
    backgroundColor: "#f9fbfc",
    width: "90%",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderColor: "lightgrey",
    marginVertical: 10,
    marginLeft: 20,
  },
  button: {
    backgroundColor: "#3b71f3",
    width: "90%",
    textAlign: "center",
    alignItems: "center",
    color: "white",
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 10,
    marginLeft: 20,
  },
  buttonText: { color: "white", fontSize: 18 },

  forgotPassword: {
    width: "90%",
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginVertical: 10,
    marginLeft: 20,
  },
  forgotPasswordText: {
    color: "#3b71f3",
    fontSize: 18,
  },
  website: {
    display: "flex",
    backgroundColor: "#fae9ea",
    width: "90%",
    color: "white",
    borderRadius: 4,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 14,
    marginLeft: 20,
  },
  websiteText: {
    display: "flex",
    alignContent: "center",
    flexDirection: "column",
    justifyContent: "center",
    color: "#dd4d44",
    fontSize: 18,
    marginTop: 4,
    marginLeft: 5,
  },
  call: {
    display: "flex",
    backgroundColor: "#daeefe",
    width: "90%",
    color: "white",
    borderRadius: 4,
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 15,
    marginVertical: 14,
    marginLeft: 20,
  },
  callText: {
    display: "flex",
    alignContent: "center",
    flexDirection: "column",
    justifyContent: "center",
    color: "#2f414d",
    fontSize: 18,
    marginTop: 5,
    marginLeft: 5,
  },
});

export default Login;
