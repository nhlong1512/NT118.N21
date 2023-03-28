
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { TextInput, Button } from "react-native-paper";

const SignInScreen = ({navigation}: {navigation: any}) => {
  const [text, setText] = useState("");
  return (
    <SafeAreaView className="flex-1 px-[20px] pt-[25px] flex justify-between mb-[25px]">
      <StatusBar style="light" />
      <View>
        <View>
          <Image source={require("../assets/images/logo1.png")} />
        </View>
        <Text className="text-[24px] font-[700] text-[#6667AB] leading-[32px] text-center mb-[14px]">
          ĐĂNG NHẬP
        </Text>
        <TextInput
          // value={text}
          // onChangeText={(text) => setText(text)}
          className="mt-[8px] rounded-[10px]"
          theme={{ roundness: 10 }}
          outlineColor="transparent"
          activeOutlineColor="#6667AB"
          placeholderTextColor="#969393"
          mode="outlined"
          placeholder="Tên đăng nhập"
          left={
            <TextInput.Icon icon={require("../assets/icons/person_2.png")} />
          }
        />
        <TextInput
          // value={text}
          // onChangeText={(text) => setText(text)}
          secureTextEntry={true}
          className="mt-[24px] rounded-[10px]"
          theme={{ roundness: 10 }}
          outlineColor="transparent"
          activeOutlineColor="#6667AB"
          placeholderTextColor="#969393"
          mode="outlined"
          placeholder="Mật khẩu"
          left={<TextInput.Icon icon={require("../assets/icons/lock.png")} />}
          right={
            <TextInput.Icon icon={require("../assets/icons/visibility.png")} />
          }
        />
        <View className="flex justify-between items-center flex-row mt-[16px]">
          <Text>
            <Image source={require("../assets/icons/check_circle_2.png")} />
            &nbsp;
            <Text className="text-[#969393] underline">Lưu mật khẩu</Text>
          </Text>
          <Text className="text-[#969393] underline">Quên mật khẩu?</Text>
        </View>
        <View className="">
          <TouchableOpacity>
            <Button
              // icon="camera"
              mode="contained"
              compact={true}
              className="rounded-[10px] py-[4px] bg-[#6667AB] mt-[48px]"
              onPress={() => console.log("Pressed")}
            >
              <Image source={require("../assets/icons/telegram_icon.png")} />
              <Text className="text-[18px] font-[700]">&nbsp; ĐĂNG NHẬP</Text>
            </Button>
          </TouchableOpacity>
        </View>
        <Text className="text-center flex flex-row justify-center items-center mt-[24px] text-[16px] leading-[20px]">
          Chưa có tài khoản?
          <Text> </Text>
          <Text
            className="font-[500] underline"
            onPress={() => {
              navigation.navigate('SignUp')
            }}
          >
            Đăng Ký
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
