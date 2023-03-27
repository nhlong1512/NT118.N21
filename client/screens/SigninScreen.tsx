import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Image, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TextInput, Button } from "react-native-paper";

const SigninScreen = () => {
  const [text, setText] = useState("");
  return (
    <SafeAreaView className="flex-1 px-[20px] pt-[25px] flex justify-between mb-[20px]">
      <StatusBar style="light" />
      <View>
        <Text className="text-[32px] font-[400] text-[#303030] mt-[75px] leading-[45px]">
          Welcome!
        </Text>
        <Text className="text-[16px] leading-[20px] font-[300] text-[#505050]">
          Please sign in to continue
        </Text>
        <Text className="text-[#303030] text-[18px] leading-[22px] font-[400] mt-[38px]">
          Email
        </Text>
        <TextInput
          // value={text}
          // onChangeText={(text) => setText(text)}
          className="mt-[8px] rounded-[5px]"
          outlineColor="#969393"
          activeOutlineColor="#505050"
          placeholderTextColor="#969393"
          mode="outlined"
          placeholder="example@gmail.com"
          right={
            <TextInput.Icon
              icon={require("../assets/icons/Mail_outline.png")}
            />
          }
        />
        <Text className="text-[#303030] text-[18px] leading-[22px] font-[400] mt-[23px]">
          Password
        </Text>
        <TextInput
          // value={text}
          // onChangeText={(text) => setText(text)}
          secureTextEntry={true}
          className="mt-[8px] rounded-[5px]"
          outlineColor="#969393"
          activeOutlineColor="#505050"
          placeholderTextColor="#969393"
          mode="outlined"
          placeholder="••••••••••••••••"
          right={<TextInput.Icon icon="eye" />}
        />
        <View className="flex justify-between items-center flex-row mt-[8px]">
          <Text className="text-[#969393]">
            <Image source={require("../assets/icons/Check_circle.png")} />
            &nbsp; Remember password
          </Text>
          <Text className="text-[#969393]">Forgot password?</Text>
        </View>
        <Button
          // icon="camera"
          mode="contained"
          compact={true}
          className="rounded-[10px] px-[32px] bg-[#EC7160] mt-[48px]"
          onPress={() => console.log("Pressed")}
        >
          Sign In
        </Button>
      </View>

      <Text className="text-center flex flex-row justify-center items-center mt-[48px] text-[16px] leading-[20px]">
        Don't have an account yet? Sign up
      </Text>
    </SafeAreaView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({});
