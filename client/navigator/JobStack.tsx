import { StyleSheet} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddJobScreen from "../screens/ManageJob/AddJobScreen";
import JobPostedScreen from "../screens/ManageJob/JobPostedScreen";
import JobDetailScreen from "../screens/ManageJob/JobDetailScreen";

const Stack = createNativeStackNavigator();
const JobStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>  
      <Stack.Screen name="JobPosted" component={JobPostedScreen}/>
      <Stack.Screen name="AddJob" component={AddJobScreen}/>
      <Stack.Screen name="JobDetail" component={JobDetailScreen}/>

    </Stack.Navigator>
  );
};

export default JobStack;

const styles = StyleSheet.create({});
