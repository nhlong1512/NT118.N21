import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";
import Detailofnews from "../screens/Detailofnews";
import News from "../screens/News";
import HomePageScreen from "../screens/HomePageScreen";
import PleaseSignIn from "../screens/PleaseSignIn";
import DetailsScreen from "../screens/DetailsScreen";
import UpLoadCV from "../screens/UpLoadCV";
import DeleteJob from "../screens/DeleteJob";
import DeleteSuccessScreen from "../screens/DeleteSuccessScreen";
import Statistic from "../screens/Statistic";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import MoreJobs from "../screens/MoreJobs";
import FindJobs from "../screens/FindJobs";
import InfoCompany from "../screens/InfoCompany";
import UpdateSuccessScreen from "../screens/Profile/UpdateSuccessScreen";
import Drawer from "../screens/Drawer";
import SignInScreen from "../screens/SignInScreen";

const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>    
      <Stack.Screen name="HomeSc" component={HomePageScreen}/>
      <Stack.Screen name="PlSignIn" component={PleaseSignIn}/>
      <Stack.Screen name="Detail" component={DetailsScreen}/>
      <Stack.Screen name="Upload" component={UpLoadCV}/>
      <Stack.Screen name="DeleteJ" component={DeleteJob}/>
      <Stack.Screen name="DeleteSuccess" component={DeleteSuccessScreen}/>
      <Stack.Screen name="ThongKe" component={Statistic}/>
      <Stack.Screen name="Tintuc" component={News}/>
      <Stack.Screen name="Xemthem" component={Detailofnews} />
      <Stack.Screen name="More" component={MoreJobs} />
      <Stack.Screen name="Find" component={FindJobs} />
      <Stack.Screen name="Info" component={InfoCompany} />
      <Stack.Screen name="Drawer" component={Drawer} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="UpdateSuccess" component={UpdateSuccessScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
