import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Login/Login";
import SignUp from "../Signup/SignUp";

function Routes() {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="signIn" component={Login} />
      <AuthStack.Screen name="signUp" component={SignUp} />
    </AuthStack.Navigator>
  );
}

export default Routes;
