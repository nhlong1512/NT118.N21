import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";

const ForgotPasswordScreen = () => {
  return (
    <SafeAreaView className="flex-1 px-[20px] pt-[25px] flex mb-[25px]">
      <View>
        <View>
          <Image source={require("../assets/images/logo1.png")} />
        </View>
        <Text className="text-[24px] font-[700] text-[#6667AB] leading-[32px] text-center mb-[14px]">
          QUÊN MẬT KHẨU
        </Text>
        <Text className="text-center text-[14px] leading-[20px] text-[#00000080] mb-[40px]">
        Tiến hành nhập Email cá nhân dùng để đăng ký tài khoản, sau đó hệ thống sẽ gửi mã xác minh vào tài khoản Email đó.
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
          placeholder="Email"
          left={
            <TextInput.Icon icon={require("../assets/icons/mail.png")} />
          }
        />
        <View className="">
          <TouchableOpacity>
            <Button
              // icon="camera"
              mode="contained"
              compact={true}
              className="rounded-[10px] py-[4px] bg-[#6667AB] mt-[48px]"
              onPress={() => console.log("Pressed Send Email")}
            >
              <Text className="text-[18px] font-[700]">&nbsp; GỬI</Text>
            </Button>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({});
