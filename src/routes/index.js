import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "./Routes";

function Index() {
  const AppStack = createStackNavigator();
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="Auth" component={Routes} />
    </AppStack.Navigator>
  );
}

export default Index;
