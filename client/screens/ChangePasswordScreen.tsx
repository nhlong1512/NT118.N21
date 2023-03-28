import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";

const ChangePasswordScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView className="flex-1 px-[20px] pt-[25px] flex mb-[25px]">
      <View>
        <View className="">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Verification");
            }}
            className="absolute top-[30px] z-[20]"
          >
            <View className="bg-[#6667AB] flex flex-row justify-center items-center py-[4px] px-[14px] rounded-[10px]">
              <Image source={require("../assets/icons/arrow_back.png")} />
            </View>
          </TouchableOpacity>
          <View>
            <Image source={require("../assets/images/logo1.png")} />
          </View>
        </View>
        <Text className="text-[24px] font-[700] text-[#6667AB] leading-[32px] text-center mb-[14px]">
          TẠO MẬT KHẨU MỚI
        </Text>

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
          placeholder="Nhập mật khẩu mới"
          right={
            <TextInput.Icon icon={require("../assets/icons/visibility.png")} />
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
          placeholder="Xác nhận mật khẩu mới"
          right={
            <TextInput.Icon icon={require("../assets/icons/visibility.png")} />
          }
        />
        <TouchableOpacity>
          <Button
            // icon="camera"
            mode="contained"
            compact={true}
            className="rounded-[10px] py-[4px] bg-[#6667AB] mt-[48px]"
            onPress={() => {
              navigation.navigate("SuccessChangePassword");
            }}
          >
            <Text className="text-[18px] font-[700] leading-[24px]">
              ĐẶT LẠI
            </Text>
          </Button>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({});
