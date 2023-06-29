import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import {
  CustomSafeAreaView,
  TextFieldWithLabel,
} from "../../components/common";
import Bars from "../../navigator/Bar";
import * as ImagePicker from "expo-image-picker";

const AddJobScreen = ({ navigation }: { navigation: any }) => {
  const [name, setName] = useState("");
  const [avt, setAvt] = useState("");
  const handleAddJob = () => {
    console.log("Add Job");
  };
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
        headerLeft="return"
        title="Thêm công việc"
        headerRight="action"
        label="Thêm"
        onLeftButtonPress={() => navigation.goBack()}
        onRightButtonPress={handleAddJob}
        className="mb-2 font-[700]"
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
            Hình ảnh doanh nghiệp
          </Text>
        </Pressable>
        <TextFieldWithLabel
          value={name}
          onChangeText={(text) => setName(text)}
          label="Tên công việc"
          containerClassName="mt-2"
          placeholder="Nhập tên công việc"
        />
        <TextFieldWithLabel
          value={name}
          onChangeText={(text) => setName(text)}
          label="Loại hình công việc"
          containerClassName="mt-2"
          placeholder="Full time/Part time"
        />
        {/* Phone */}
        <TextFieldWithLabel
          value={name}
          onChangeText={(text) => setName(text)}
          label="Lương"
          keyboardType="numeric"
          containerClassName="mt-4"
          placeholder="Nhập lương"
        />
        <TextFieldWithLabel
          value={name}
          onChangeText={(text) => setName(text)}
          label="Yêu cầu kinh nghiệm"
          containerClassName="mt-2"
          placeholder="Trên 2 năm,..."
        />

      </ScrollView>
      {/* Full name */}
    </CustomSafeAreaView>
  );
};

export default AddJobScreen;

const styles = StyleSheet.create({});
