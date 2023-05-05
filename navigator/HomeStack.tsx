import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import VerificationScreen from "../screens/VerificationScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import SuccessChangePasswordScreen from "../screens/SuccessChangePasswordScreen";
import Detailofnews from "../screens/Detailofnews";
import News from "../screens/News";
import PleaseSignIn from "../screens/PleaseSignIn";
import DetailsScreen from "../screens/DetailsScreen";
import UpLoadCV from "../screens/UpLoadCV";
import DeleteJob from "../screens/DeleteJob";
import DeleteSuccessScreen from "../screens/DeleteSuccessScreen";
import Statistic from "../screens/Statistic";
import Home from "../screens/Home";
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>    
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="Verification" component={VerificationScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen
        name="SuccessChangePassword"
        component={SuccessChangePasswordScreen}
      />
      <Stack.Screen name="PlSignIn" component={PleaseSignIn}/>
      <Stack.Screen name="Detail" component={DetailsScreen}/>
      <Stack.Screen name="Upload" component={UpLoadCV}/>
      <Stack.Screen name="DeleteJ" component={DeleteJob}/>
      <Stack.Screen name="DeleteSuccess" component={DeleteSuccessScreen}/>
      <Stack.Screen name="ThongKe" component={Statistic}/>
      <Stack.Screen name="Tintuc" component={News}/>
      <Stack.Screen name="Xemthem" component={Detailofnews} />
      <Stack.Screen name="TrangChu" component={Home} />

    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
