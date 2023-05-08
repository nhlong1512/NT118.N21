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
import { FormDataSignUp } from "../model/model";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {auth} from "../firebaseConfig"

const SignUpScreen = ({ navigation }: { navigation: any }) => {
  //Form Data Sign Up Screen
  const initialState: FormDataSignUp = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState<FormDataSignUp>(initialState);

  //Handle change Form Data
  const handleChangeFullName = (fullName: string) => {
    setFormData({ ...formData, fullName: fullName });
  };
  const handleChangeEmail = (email: string) => {
    setFormData({ ...formData, email: email });
  };
  const handleChangePassword = (password: string) => {
    setFormData({ ...formData, password: password });
  };
  const handleChangeConfirmPassword = (confirmPassword: string) => {
    setFormData({ ...formData, confirmPassword: confirmPassword });
  };

  //Handle Sign Up
  const handleSignUp = () => {
    const { fullName, email, password, confirmPassword } = formData;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //Signed in
        const user = userCredential.user;
        updateProfile(user, {
          displayName: fullName,
        });
        console.log(user);
        navigation.navigate("SignIn");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <SafeAreaView className="flex-1 px-[20px] pt-[25px] flex justify-between mb-[25px]">
      <View>
        <View className="flex justify-between items-center flex-row mt-[48px]">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            <View className="bg-[#6667AB] flex flex-row justify-center items-center py-[4px] px-[14px] rounded-[10px]">
              <Image source={require("../assets/icons/arrow_back.png")} />
            </View>
          </TouchableOpacity>
          <Text className="text-[24px] font-[700] text-[#6667AB] leading-[32px] text-center shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            ĐĂNG KÝ
          </Text>
          <TouchableOpacity className="opacity-0">
            <View className="bg-[#6667AB] flex flex-row justify-center items-center py-[4px] px-[14px] rounded-[10px]">
              <Image source={require("../assets/icons/arrow_back.png")} />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            value={formData.fullName}
            onChangeText={(text) => handleChangeFullName(text)}
            className="mt-[36px] rounded-[10px]"
            theme={{ roundness: 10 }}
            outlineColor="transparent"
            activeOutlineColor="#6667AB"
            placeholderTextColor="#969393"
            mode="outlined"
            placeholder="Họ Tên"
          />
          <TextInput
            value={formData.email}
            onChangeText={(text) => handleChangeEmail(text)}
            className="mt-[24px] rounded-[10px]"
            theme={{ roundness: 10 }}
            outlineColor="transparent"
            activeOutlineColor="#6667AB"
            placeholderTextColor="#969393"
            mode="outlined"
            placeholder="Email"
          />
          <TextInput
            value={formData.password}
            onChangeText={(text) => handleChangePassword(text)}
            secureTextEntry={true}
            className="mt-[24px] rounded-[10px]"
            theme={{ roundness: 10 }}
            outlineColor="transparent"
            activeOutlineColor="#6667AB"
            placeholderTextColor="#969393"
            mode="outlined"
            placeholder="Mật khẩu"
            right={
              <TextInput.Icon
                icon={require("../assets/icons/visibility.png")}
              />
            }
          />
          <TextInput
            value={formData.confirmPassword}
            onChangeText={(text) => handleChangeConfirmPassword(text)}
            secureTextEntry={true}
            className="mt-[24px] rounded-[10px]"
            theme={{ roundness: 10 }}
            outlineColor="transparent"
            activeOutlineColor="#6667AB"
            placeholderTextColor="#969393"
            mode="outlined"
            placeholder="Nhập lại mật khẩu"
            right={
              <TextInput.Icon
                icon={require("../assets/icons/visibility.png")}
              />
            }
          />
        </View>
        <TouchableOpacity>
          <Button
            // icon="camera"
            mode="contained"
            compact={true}
            className="rounded-[10px] py-[4px] bg-[#6667AB] mt-[48px]"
            onPress={handleSignUp}
          >
            <Image source={require("../assets/icons/telegram_icon.png")} />
            <Text className="text-[18px] font-[700]">&nbsp; ĐĂNG KÝ</Text>
          </Button>
        </TouchableOpacity>
        <Text className="text-center flex flex-row justify-center items-center mt-[24px] text-[16px] leading-[20px]">
          Đã có tài khoản?
          <Text> </Text>
          <Text
            className="font-[500] underline"
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            Đăng Nhập
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
