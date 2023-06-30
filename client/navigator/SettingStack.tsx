import { StyleSheet} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
import AddJobScreen from "../screens/ManageJob/AddJobScreen";
import SignInScreen from "../screens/SignInScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();
const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>  
      <Stack.Screen name="Setting" component={SettingsScreen}/>
      <Stack.Screen name="Profile" component={ProfileScreen}/>
    </Stack.Navigator>
  );
};

export default SettingStack;

const styles = StyleSheet.create({});
