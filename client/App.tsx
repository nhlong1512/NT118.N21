import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
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
import BottomTabNavigation from "./navigator/BottomTabNavigation";
import useUserStore from './store/user'
import { shallow } from 'zustand/shallow'
import Toast from 'react-native-toast-message'
import toastConfig from './config/toast'
import AuthNav from "./navigator/AuthNav";

const App = () => {
  const [user] = useUserStore((state) => [state.user], shallow)

  console.log('App USER: ', user);
  
  const getNav = () => {
    if (!user) return <AuthNav />
    // if (user.email === 'huulongn2@gmail.com') return <AdminTab />
    return <BottomTabNavigation />
  }

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
        {getNav()}
        <Toast config={toastConfig} position='bottom' />
      </NavigationContainer>
    );
  }
};

export default App;
