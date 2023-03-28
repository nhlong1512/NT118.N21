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

const SuccessChangePasswordScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView className="flex-1 px-[20px] pt-[25px] flex mb-[25px]">
      <View>
        <View className="items-center mt-[120px]">
          <Image source={require("../assets/images/tick.png")} />
        </View>
        <Text className="mt-[36px] text-[18px] font-[700] text-[#26277D] leading-[32px] text-center mb-[14px]">
          ĐỔI MẬT KHẨU THÀNH CÔNG
        </Text>
        <View className="flex justify-center items-center flex-row mt-[70px]">
          <Text className="text-[#26277D] text-[22px] font-[400] leading-[22px]">
            Quay lại
          </Text>
          <TouchableOpacity>
            <Button
              // icon="camera"
              mode="text"
              compact={true}
              onPress={() => {
                navigation.navigate("SignIn");
              }}
              className="py-0"
            >
              <Text className="text-[#26277D] text-[22px] font-[700] leading-[22px]">
                Đăng Nhập
              </Text>
            </Button>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SuccessChangePasswordScreen;

const styles = StyleSheet.create({});
