import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from "../screens/HomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const navigation = useNavigation();
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen}  />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name = "ForgotPassword" component = {ForgotPasswordScreen} />
      </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
