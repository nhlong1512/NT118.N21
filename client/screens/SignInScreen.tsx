import React, { useEffect, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { TextInput, Button, Checkbox } from "react-native-paper";
import { FormDataSignIn, UserCustom } from "../model/model";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import useUserStore from "../store/user";
import { shallow } from "zustand/shallow";
import Toast from "react-native-toast-message";
import getAuthErrorMsg from "../utils/getAuthErrorMsg";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { doc, getDoc } from "firebase/firestore";

const SignInScreen = ({ navigation }: { navigation: any }) => {
  const [showPwd, setShowPwd] = useState<boolean>(false);
  const [setUser] = useUserStore((state) => [state.setUser], shallow);
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
      .then(async (userCredential) => {
        //Signed in
        const user = userCredential.user;
        //Zustand
        console.log(user);
        const userRef = doc(db, "users", user?.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          const userCustom: UserCustom = {
            id: docSnap.data().id,
            fullName: docSnap.data().fullName,
            email: docSnap.data().email,
            role: docSnap.data().role,
            createdAt: docSnap.data().createdAt,
            photoURL: docSnap.data().photoURL,
            phoneNumber: docSnap.data().phoneNumber,
            dateOfBirth: docSnap.data().dateOfBirth,
          };
          setUser(userCustom);
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
        navigation.navigate("HomeSc");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Toast.show({
          type: "error",
          text1: "Login failed",
          text2: getAuthErrorMsg(errorMessage),
        });
        console.log(errorCode, errorMessage);
      });
  };

  //SavePasswordState
  const [saved, setSaved] = useState<boolean>(false);

  return (
    <SafeAreaView className="flex-1 px-[20px] pt-[25px] flex justify-between mb-[25px]">
      <StatusBar style="light" />
      <View style={{padding:16}}>
        <View style={{alignItems:'center'}}>
          <Image source={require("../assets/images/logo1.png")} />
        </View>
        <Text className="text-[24px] font-[700] text-[#6667AB] leading-[32px] text-center mb-[14px]">
          ĐĂNG NHẬP
        </Text>
        <TextInput 
          value={formData.email}
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
          value={formData.password}
          onChangeText={(text) => handleChangePassword(text)}
          className="mt-[24px] rounded-[10px]"
          theme={{ roundness: 10 }}
          outlineColor="transparent"
          activeOutlineColor="#6667AB"
          placeholderTextColor="#969393"
          mode="outlined"
          placeholder="Mật khẩu"
          secureTextEntry={!showPwd}
          left={<TextInput.Icon icon={require("../assets/icons/lock.png")} />}
          right={
            <TextInput.Icon icon={require("../assets/icons/visibility.png")} />
          }
        />
        <View className="flex justify-between items-center flex-row mt-[16px]">
          <Text className="flex justify-center items-center">
            <Image source={require("../assets/icons/check_circle_2.png")} />
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
            Đăng Ký
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
