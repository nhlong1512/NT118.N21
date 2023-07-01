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
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import * as yup from 'yup'
import Toast from 'react-native-toast-message'

const validationSchema = yup.object({
  email: yup.string().required('Required').email('Invalid email')
})

const ForgotPasswordScreen = ({ navigation }: { navigation: any }) => {

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const resetPassword = () => {
    validationSchema
      .validate({ email })
      .then((value) => {
        console.log(value.email);
        
        setError('')
        sendPasswordResetEmail(auth, value.email).then(() => {
          Toast.show({
            type: 'success',
            text1: 'Gửi Email!',
            text2: 'Kiểm tra Email để đặt lại mật khẩu.'
          })
          navigation.navigate("SignIn")
        })
      })
      .catch((e) => {
        setError(e.errors[0])
      })
  }
  return (
    <SafeAreaView className="flex-1 px-[20px] pt-[25px] flex mb-[25px]">
      <View>
        <View className="">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignIn");
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
          QUÊN MẬT KHẨU
        </Text>
        <Text className="text-center text-[14px] leading-[20px] text-[#00000080] mb-[40px]">
          Tiến hành nhập Email cá nhân dùng để đăng ký tài khoản, sau đó hệ
          thống sẽ gửi mã xác minh vào tài khoản Email đó.
        </Text>
        <TextInput
          // value={text}
          // onChangeText={(text) => setText(text)}
          onChangeText={(text) => setEmail(text)}
          value={email}
          className="mt-[8px] rounded-[10px]"
          theme={{ roundness: 10 }}
          outlineColor="transparent"
          activeOutlineColor="#6667AB"
          placeholderTextColor="#969393"
          mode="outlined"
          placeholder="Email"
          left={<TextInput.Icon icon={require("../assets/icons/mail.png")} />}
        />
        <TouchableOpacity>
          <Button
            // icon="camera"
            mode="contained"
            compact={true}
            className="rounded-[10px] py-[4px] bg-[#6667AB] mt-[48px]"
            onPress={resetPassword}
          >
            <Text className="text-[18px] font-[700] leading-[24px]">
              GỬI
            </Text>
          </Button>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({});
