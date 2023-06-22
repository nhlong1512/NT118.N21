import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";
import Detailofnews from "../screens/Detailofnews";
import News from "../screens/News";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import PleaseSignIn from "../screens/PleaseSignIn";
import HomePageScreen from "../screens/HomePageScreen";
import DetailsScreen from "../screens/DetailsScreen";
import DetailsMoreJobs from "../screens/DetailsMoreJobs";
import UpLoadCV from "../screens/UpLoadCV";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import VerificationScreen from "../screens/VerificationScreen";
import DeleteJob from "../screens/Admin/DeleteJob";
import DeleteSuccessScreen from "../screens/Admin/DeleteSuccessScreen";
import Statistic from "../screens/Statistic";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import MoreJobs from "../screens/MoreJobs";
import UpdateSuccessScreen from "../screens/Profile/UpdateSuccessScreen";
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>    
      <Stack.Screen name="HomeSc" component={HomePageScreen}/>
      <Stack.Screen name="PlSignIn" component={PleaseSignIn}/>
      <Stack.Screen name="Detail" component={DetailsScreen}/>
      <Stack.Screen name="DetailMore" component={DetailsMoreJobs}/>
      <Stack.Screen name="Upload" component={UpLoadCV}/>
      <Stack.Screen name="DeleteJ" component={DeleteJob}/>
      <Stack.Screen name="SignIn" component={SignInScreen}/>
      <Stack.Screen name="More" component={MoreJobs}/>
      <Stack.Screen name="SignUp" component={SignUpScreen}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
      <Stack.Screen name="Verification" component={VerificationScreen}/>
      <Stack.Screen name="DeleteSuccess" component={DeleteSuccessScreen}/>
      <Stack.Screen name="ThongKe" component={Statistic}/>
      <Stack.Screen name="Tintuc" component={News}/>
      <Stack.Screen name="Xemthem" component={Detailofnews} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="UpdateSuccess" component={UpdateSuccessScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});