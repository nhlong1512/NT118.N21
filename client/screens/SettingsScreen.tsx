import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import { Feather, AntDesign, Entypo } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { sendEmailVerification, signOut } from "firebase/auth";
import useUserStore from "../store/user";
import { shallow } from "zustand/shallow";
import { auth } from "../firebaseConfig";

const SettingsScreen = ({ navigation }: { navigation: any }) => {
  const [show, setShow] = useState(false);
  const [user,logOut] = useUserStore((state) => [state.user, state.logOut], shallow);
  console.log('SettingsScreen USER: ', user);
  
  const toggle = () => setShow((prev) => !prev);
  const logout = () => {
    toggle();
    signOut(auth).then(() => {
      logOut();
      navigation.navigate("SignIn");
    });
  };

  return (
    <SafeAreaView className="flex-1 px-[20px] pt-[25px] flex justify-start mb-[25px]">
      <Modal isVisible={show} onBackdropPress={toggle} className="justify-center items-center">
        <View className="max-w-[320] rounded-lg bg-white px-4 pb-6 pt-8">
          <Text className="text-center font-app-semibold text-[20px] text-black">
            Bạn có chắc rằng bạn muốn đăng xuất không?
          </Text>
          <View className="h-6" />
          <Button
            className="mt-[20px] bg-[#6667AB]"
            mode="contained"
            onPress={toggle}
          >
            <View style={{ width: 16, height: 1 }} />
            <Text className="text-center ml-[20px]">Không, tôi muốn ở lại</Text>
          </Button>
          <View className="h-2" />
          <Button
            className="mt-[20px] bg-[#6667AB]"
            mode="contained"
            onPress={logout}
          >
            <View style={{ width: 16, height: 1 }} />
            <Text className="text-center ml-[20px]">Đúng, đăng xuất</Text>
          </Button>
        </View>
      </Modal>
      <View className="bg-[#fff] rounded-[20px] flex justify-center items-center py-[20px] mt-[20px]">
        <Image
          className="w-[150px] h-[150px] rounded-[100]"
          style={{ borderRadius: 100 }}
          source={require("../assets/images/user.jpg")}
        />
        <Text className="text-[24px] text-[#6667AB] font-[700] mt-[20px]">
          {user?.fullName || "Nguyễn Richhhh"}
        </Text>
      </View>
      <View>
        <Button
          className="mt-[40px] bg-[#6667AB] "
          mode="contained"
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Feather name="user" size={20} color="white" className="mr-[20px]" />
          <View style={{ width: 16, height: 1 }} />
          <Text>Thông tin của tôi</Text>
        </Button>
        <Button
          className="mt-[20px] bg-[#6667AB]"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          <AntDesign name="paperclip" size={20} color="white" />
          <View style={{ width: 16, height: 1 }} />
          <Text className="text-center ml-[20px]">Công việc đã lưu</Text>
        </Button>
        <Button
          className="mt-[20px] bg-[#6667AB] "
          mode="contained"
          onPress={toggle}
        >
          <Entypo name="log-out" size={20} color="white" />
          <View style={{ width: 16, height: 1 }} />
          <Text>Đăng xuất</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
