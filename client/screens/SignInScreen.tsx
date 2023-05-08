import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { TextInput, Button, Checkbox } from "react-native-paper";
import { FormDataSignIn } from "../model/model";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebaseConfig"


const SignInScreen = ({ navigation }: { navigation: any }) => {
  //FormDataState
  const initialState: FormDataSignIn = {
    email: "",
    password: "",
  };
  //Handle change formData Sign in
  const [formData, setFormData] = useState<FormDataSignIn>(initialState);
  const handleChangeEmail = (email: string) => {
    setFormData({ ...formData, email: email });
  };
  const handleChangePassword = (password: string) => {
    setFormData({ ...formData, password: password });
  };

  //Handle Sign In
  const handleSignIn = () => {
    const { email, password } = formData;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //Signed in
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("HomeSc");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //SavePasswordState
  const [saved, setSaved] = useState<boolean>(false);

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
          value={formData.email}
          // onChangeText = {email => setEmail(email)}

          onChangeText={(text) => handleChangeEmail(text)}
          className="mt-[8px] rounded-[10px]"
          theme={{ roundness: 10 }}
          outlineColor="transparent"
          activeOutlineColor="#6667AB"
          placeholderTextColor="#969393"
          mode="outlined"
          placeholder="Email"
          left={
            <TextInput.Icon icon={require("../assets/icons/person_2.png")} />
          }
        />
        <TextInput
          // onChangeText={password => setPassword(password)}
          value={formData.password}
          onChangeText={(text) => handleChangePassword(text)}
          // label="password"
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
          <Text className="flex justify-center items-center">
            <Image source={require("../assets/icons/check_circle_2.png")} />
            {/* <Checkbox
              status={saved ? "checked" : "unchecked"}
              onPress={() =>
                setSaved(!saved);
              }}
              style={styles.checkboxContainer}
              
            /> */}
            <Text className="text-[#969393] underline">Lưu mật khẩu</Text>
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ForgotPassword");
            }}
          >
            <Text className="text-[#969393] underline">Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Button
            // icon="camera"
            mode="contained"
            compact={true}
            className="rounded-[10px] py-[4px] bg-[#6667AB] mt-[48px]"
            onPress={handleSignIn}
          >
            <Image source={require("../assets/icons/telegram_icon.png")} />
            <Text className="text-[18px] font-[700]">&nbsp; ĐĂNG NHẬP</Text>
          </Button>
        </TouchableOpacity>
        <Text className="text-center flex flex-row justify-center items-center mt-[24px] text-[16px] leading-[20px]">
          Chưa có tài khoản?
          <Text> </Text>
          <Text
            className="font-[500] underline"
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            ĐĂNG KÝ
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
});
