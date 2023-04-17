import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigator/Navigation";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { BottomNavigation } from "react-native-paper";
import BottomTabNavigation from "./navigator/BottomTabNavigation";

const App = () => {
  let [fontsLoaded] = useFonts({
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });
  if (!fontsLoaded) return null;
  else {
    return (
      <NavigationContainer>
        <BottomTabNavigation />
      </NavigationContainer>
    );
  }
};

export default App;
