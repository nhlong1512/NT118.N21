import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { Feather, AntDesign, Entypo } from "@expo/vector-icons";

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  const [text, setText] = useState<string>("");

  return (
    <SafeAreaView className="flex-1 px-[20px] pt-[25px] flex justify-start mb-[25px]">
      <View className="bg-[#fff] rounded-[20px] flex justify-center items-center py-[20px] mt-[20px]">
        <Image
          className="w-[150px] h-[150px] rounded-[100]"
          style={{ borderRadius: 100 }}
          source={require("../../assets/images/user.jpg")}
        />
        <Text className="text-[24px] text-[#6667AB] font-[700] mt-[20px]">
          Long Nguyen
        </Text>
      </View>
      <View className="mt-[40px]">
        <View className="px-[10px] bg-red-500">
          {/* <Feather name="user" color="white" className="w-[20px]" /> */}
        </View>
        <View>
          <TextInput
            label="Họ tên"
            value="Long Nguyen"
            // onChangeText={(text) => setText(text)}
          />
          <TextInput
            label="Số điện thoại"
            value="0123456789"
            className="mt-[20px]"
            // onChangeText={(text) => setText(text)}
          />
          <TextInput
            label="Email"
            value="abc@12345"
            className="mt-[20px]"
            // onChangeText={(text) => setText(text)}
          />
        </View>
        <Button
          className="mt-[20px] bg-[#6667AB] "
          mode="contained"
          onPress={() => {
            navigation.navigate("UpdateSuccess");
          }}
        >
          <Text>Cập nhật</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
