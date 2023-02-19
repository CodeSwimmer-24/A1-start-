import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from "./src/routes";
import Login from "./src/Login/Login";
import Home from "./src/Home/Home";
import PunchIn from "./src/punchIn/PunchIn";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View>
    //   <Login />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PunchIn" component={PunchIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
