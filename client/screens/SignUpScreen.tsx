import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { HelperText, TextInput, Button } from "react-native-paper";
import { FormDataSignUp, UserCustom } from "../model/model";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationProp } from "../navigator/AuthNav";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, addDoc, collection, db } from "../firebaseConfig";
import useUserStore from "../store/user";
import { shallow } from "zustand/shallow";
import Toast from "react-native-toast-message";
import { CustomSafeAreaView, TextFieldWithLabel } from "../components/common";
import {
  Apple,
  ArrowLeft,
  Eye,
  Facebook,
  Google,
  Star8,
  UnEye,
} from "../assets/iconsCustom";
import getAuthErrorMsg from "../utils/getAuthErrorMsg";
import { doc, setDoc } from "firebase/firestore";

const validationSchema = yup.object({
  fullName: yup.string().required("Họ tên không được để trống. "),
  email: yup
    .string()
    .required("Email không được để trống. ")
    .email("Email không hợp lệ. "),
  password: yup
    .string()
    .required("Mật khẩu không được để trống. ")
    .min(8, "Mật khẩu phải ít nhất 8 kí tự. "),
  confirmPassword: yup
    .string()
    .test(
      "confirm-pwd",
      "Mật khẩu xác nhận không trùng khớp với mật khẩu",
      function (value) {
        return this.parent.password === value;
      }
    ),
});

const SignUpScreen = ({ navigation }: { navigation: any }) => {
  //Form Data Sign Up Screen
  const [errorMessage, setErrorMessage] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormDataSignUp>({ resolver: yupResolver(validationSchema) });
  const [setUser] = useUserStore((state) => [state.setUser], shallow);
  const [secure, setSecure] = useState([true, true]);

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
  const addDbUser = async (
    id: string,
    fullName: string,
    email: string,
    role: number,
    createdAt: Date,
    photoURL: string,
    phoneNumber: string,
    dateOfBirth: Date | null,
  ) => {
    try {
      const userRef = collection(db, "users");
      await setDoc(doc(userRef, id), {
        id: id,
        fullName: fullName,
        email: email,
        role: role,
        createdAt: createdAt,
        photoURL: photoURL,
        phoneNumber: phoneNumber,
        dateOfBirth: dateOfBirth || null,
      });
      console.log("Document written with ID: ", userRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  //Handle Sign Up
  const handleSignUp = () => {
    const { fullName, email, password, confirmPassword } = formData;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: fullName,
        });
        const userCustom: UserCustom = {
          id: user?.uid,
          fullName: fullName,
          email: email,
          role: 1,
          createdAt: new Date(),
          photoURL: "",
          phoneNumber: "",
          dateOfBirth: null,
        }
        setUser(userCustom);
        addDbUser(user.uid, fullName || "", user.email || "", 1, new Date(), "", "", null);
        navigation.navigate("HomeSc");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        Toast.show({
          type: "error",
          text1: "Sign up failed",
          text2: getAuthErrorMsg(errorMessage),
        });
      });
  };

  return (
    <SafeAreaView className="flex-1 px-[20px] pt-[25px] flex justify-between mb-[25px]">
      <View>
        <View className="flex justify-between items-center flex-row mt-[48px]">
          <TouchableOpacity
            onPress={() => navigation.canGoBack() && navigation.goBack()}
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
        <TouchableOpacity onPress={handleSignUp}>
          <Button
            // icon="camera"
            mode="contained"
            compact={true}
            className="rounded-[10px] py-[4px] bg-[#6667AB] mt-[48px]"
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
    // <CustomSafeAreaView className='items-center px-5'>
    //   {/* Header */}
    //   <View className='flex-row items-center'>
    //     <Pressable onPress={() => navigation.canGoBack() && navigation.goBack()}>
    //       <ArrowLeft />
    //     </Pressable>
    //     <View className='flex-1' />
    //     <Star8 />
    //   </View>

    //   <ScrollView contentContainerStyle={{ flexGrow: 1 }} className='w-full' showsVerticalScrollIndicator={false}>
    //     <Text className='mt-[54px] w-full text-heading1 font-bold'>Sign up</Text>
    //     <TextFieldWithLabel
    //       label={'Email'}
    //       error={errors.email?.message}
    //       containerClassName='mt-[34px]'
    //       control={control}
    //       name='email'
    //       placeholder='example@gmail.com'
    //     />
    //     <TextFieldWithLabel
    //       error={errors.password?.message}
    //       label={'Create a password'}
    //       containerClassName='mt-[26px]'
    //       secureTextEntry={secure[0]}
    //       control={control}
    //       name='password'
    //       onRightIconPress={() => setSecure([!secure[0], secure[1]])}
    //       placeholder='must be 8 characters'
    //       rightIcon={!secure[0] ? <Eye /> : <UnEye />}
    //     />
    //     <TextFieldWithLabel
    //       error={errors.confirmPassword?.message}
    //       label={'Confirm password'}
    //       onRightIconPress={() => setSecure([secure[0], !secure[1]])}
    //       secureTextEntry={secure[1]}
    //       name='confirmPassword'
    //       control={control}
    //       containerClassName='mt-[22px] mb-[38px]'
    //       placeholder='repeat password'
    //       rightIcon={!secure[1] ? <Eye /> : <UnEye />}
    //     />

    //     <Button onPress={handleSubmit(onSubmit)} label={'Create account'} />
    //     <View className='flex-1' />
    //     {/* Already have an account? Log in */}
    //     <View className='mb-12 mt-4 flex-row justify-center'>
    //       <Text className='font-app-light text-sm' style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
    //         Already have an account?{' '}
    //       </Text>
    //       <Text className='font-app-semibold text-sm' onPress={() => navigation.navigate('Login')}>
    //         Log in
    //       </Text>
    //     </View>
    //   </ScrollView>
    // </CustomSafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
