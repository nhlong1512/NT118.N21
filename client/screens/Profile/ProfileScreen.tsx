import { View, Text, Pressable, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import TextFieldWithLabel from "../../components/common/TextFieldWithLabel";
// import Bars from '~/components/navigation/Bars'

import { CustomSafeAreaView } from "../../components/common";
import { TextInput, Button, Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import useUserStore from "../../store/user";
import { shallow } from "zustand/shallow";
import Bars from "../../navigator/Bar";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  const [user] = useUserStore((state) => [state.user], shallow);

  const [avt, setAvt] = useState("");
  const [name, setName] = useState(user?.fullName || "");
  const [phone, setPhone] = useState(user?.phoneNumber || "");
  const [mail, setMail] = useState(user?.email || "");
  const [dateOfBirth, setdateOfBirth] = useState("");

  const fetchUser = async () => {
    if (user?.id === undefined) return;
    const userRef = doc(db, "users", user?.id);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());

    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  fetchUser();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri);
      setAvt(result.assets[0].uri);
    }
  };

  return (
    <CustomSafeAreaView className="flex-1 items-center bg-white px-4">
      <Bars
        headerLeft='return'
        title='Thông tin của tôi'
        headerRight='action'
        label='Lưu'
        onLeftButtonPress={() => navigation.goBack()}
        onRightButtonPress={() => navigation.goBack()}
        className='mb-2 font-[700]'
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="w-full mb-[20px]"
        showsVerticalScrollIndicator={false}
      >
        <Pressable className="items-center py-4" onPress={pickImage}>
          <Image
            className="w-[150px] h-[150px] rounded-[100px]"
            resizeMode="cover"
            source={
              avt ? { uri: avt } : require("../../assets/images/user.jpg")
            }
          />
          <Text className="mt-2 py-[7.5px] font-app-medium text-body2">
            Thay đổi hỉnh ảnh
          </Text>
        </Pressable>

        {/* text field */}

        {/* Full name */}
        <TextFieldWithLabel
          value={name}
          onChangeText={(text) => setName(text)}
          label="Họ và tên"
          containerClassName="mt-2"
          placeholder="Nhập tên của bạn"
        />

        {/* Phone */}
        <TextFieldWithLabel
          value={phone}
          onChangeText={(text) => setPhone(text)}
          label="Số điện thoại"
          keyboardType="numeric"
          containerClassName="mt-4"
          placeholder="Nhập số điện thoại của bạn"
        />
        {/* Email */}
        <TextFieldWithLabel
          value={mail}
          onChangeText={(text) => setMail(text)}
          label="Email"
          keyboardType="email-address"
          containerClassName="mt-4"
          placeholder="Nhập email của bạn"
        />

        {/* Date of birth */}
        <TextFieldWithLabel
          value={dateOfBirth}
          onChangeText={(text) => setdateOfBirth(text)}
          label="Date of birth"
          containerClassName="mt-4"
        />
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default ProfileScreen;
