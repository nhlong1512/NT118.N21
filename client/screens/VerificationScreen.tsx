import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const VerificationScreen = ({ navigation }: { navigation: any }) => {
  const [verifyNumber, setVerifyNumber] = useState<string>("");
  const ref = useBlurOnFulfill({ value: verifyNumber, cellCount: 4 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: verifyNumber,
    setValue: setVerifyNumber,
  });
  return (
    <SafeAreaView className="flex-1 px-[20px] pt-[25px] flex mb-[25px]">
      <View>
        <View className="">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ForgotPassword");
            }}
            className="absolute top-[30px] z-[20]"
          >
            <View className="bg-[#6667AB] flex flex-row justify-center items-center py-[4px] px-[14px] rounded-[10px]">
              <Image source={require("../assets/icons/arrow_back.png")} />
            </View>
          </TouchableOpacity>
          <View className="flex justify-center items-center mt-[60px]">
            <Image source={require("../assets/images/chat_bubble.png")} />
          </View>
        </View>
        <Text className="text-[24px] font-[700] text-[#6667AB] leading-[32px] text-center mb-[14px]">
          MÃ XÁC MINH
        </Text>
        <Text className="text-[14px] leading-[20px] text-[#00000080] mb-[40px] mx-[20px] text-center">
          Hệ thống vừa gửi mã xác minh vào Email. Vui lòng nhập mã xác minh.
          &nbsp;
          <Text className="text-[#00000080] leading-[20px] underline font-[700]">
            Gửi lại
          </Text>
        </Text>
        <View className="mx-[40px]">
          <CodeField
            ref={ref}
            {...props}
            value={verifyNumber}
            onChangeText={setVerifyNumber}
            cellCount={4}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                className="w-[40px] h-[40px] text-[31px] text-center bg-[#A4A2A2] rounded-[10px] text-[#00000080] leading-[36px]"
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
        <TouchableOpacity>
          <Button
            // icon="camera"
            mode="contained"
            compact={true}
            className="rounded-[10px] py-[2px] bg-[#6667AB] mt-[48px]"
            onPress={() => {
              console.log("VerifyNumber:", verifyNumber);
              navigation.navigate("ChangePassword")
            }}
          >
            <Text className="text-[18px] font-[700] leading-[24px]">
              &nbsp; XÁC NHẬN
            </Text>
          </Button>
        </TouchableOpacity>
        <View className="mt-[38px]">
          <Text className="text-center text-[14px] leading-[24px]">
            Nếu <Text className="font-[700]">không nhận được</Text> mã xác minh
            (OTP), vui lòng kiểm tra mục spam hoặc nhấn vào
          </Text>
          <Text className="font-[700] text-center leading-[24px]"> GỬI LẠI MÃ XÁC MINH</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({});
