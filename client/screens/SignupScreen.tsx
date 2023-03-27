
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-paper";

const SignUpScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView className="flex-1 px-[20px] pt-[25px] flex justify-between mb-[25px]">
      <View>
        <View className="flex justify-between items-center flex-row">
          <Button className="bg-[#6667AB] flex justify-center items-center">
            <Image source={require("../assets/icons/arrow_back.png")} />
          </Button>
          <Text className="mt-[48px] text-[24px] font-[700] text-[#6667AB] leading-[32px] text-center mb-[14px]">
            ĐĂNG KÝ
          </Text>
        </View>
        <Button
          mode="contained"
          compact={true}
          className="rounded-[10px] py-[4px] bg-[#6667AB] mt-[48px]"
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <Text className="text-[18px] font-[700]">&nbsp; ĐĂNG NHẬP</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
