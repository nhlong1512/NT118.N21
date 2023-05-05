import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { Feather, AntDesign, Entypo } from "@expo/vector-icons";

const SettingsScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView className="flex-1 px-[20px] pt-[25px] flex justify-start mb-[25px]">
      <View className="bg-[#fff] rounded-[20px] flex justify-center items-center py-[20px] mt-[20px]">
        <Image
          className="w-[150px] h-[150px] rounded-[100]"
          style={{ borderRadius: 100 }}
          source={require("../assets/images/user.jpg")}
        />
        <Text className="text-[24px] text-[#6667AB] font-[700] mt-[20px]">
          Long Nguyen
        </Text>
      </View>
      <View>
        <Button
          className="mt-[40px] bg-[#6667AB] "
          mode="contained"
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Feather name="user" size={20} color="white" className="mr-[20px]" />
          <View style={{ width: 16, height: 1 }} />
          <Text>Thông tin của tôi</Text>
        </Button>
        <Button
          className="mt-[20px] bg-[#6667AB]"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          <AntDesign name="paperclip" size={20} color="white" />
          <View style={{ width: 16, height: 1 }} />
          <Text className="text-center ml-[20px]">Công việc đã lưu</Text>
        </Button>
        <Button
          className="mt-[20px] bg-[#6667AB] "
          mode="contained"
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <Entypo name="log-out" size={20} color="white" />
          <View style={{ width: 16, height: 1 }} />
          <Text>Đăng xuất</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
