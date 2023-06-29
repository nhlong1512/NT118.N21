import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React, { useId, useState } from "react";
import {
  CustomSafeAreaView,
  TextFieldWithLabel,
} from "../../components/common";
import Bars from "../../navigator/Bar";
import * as ImagePicker from "expo-image-picker";
import { TextInput } from "react-native-paper";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import uuid from 'react-native-uuid';
import { JobCustom } from "../../model/model";
import Toast from "react-native-toast-message";
import useUserStore from "../../store/user";
import shallow from "zustand/shallow";


const AddJobScreen = ({ navigation }: { navigation: any }) => {
  const [user, setUser] = useUserStore((state) => [state.user, state.setUser], shallow);
  const [businessName, setBusinessName] = useState("");
  const [urlPhoto, setUrlPhoto] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [typeTime, setTypeTime] = useState("");
  const [salary, setSalary] = useState("");
  const [requireExp, setRequireExp] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobRequirement, setJobRequirement] = useState("");


  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri);
      setUrlPhoto(result.assets[0].uri);
    }
  };

  //Add DB 
  const addDbJob = async( 
    uid: string,
    id: string, 
    businessName: string, 
    jobTitle: string,
    typeTime: string,
    salary: string,
    requireExp: string,
    jobDescription: string,
    jobRequirement: string,
    urlPhoto: string,
  ) => {
    try {
      const jobRef = collection(db, "job");
      await setDoc(doc(jobRef, id), {
        uid: uid,
        id: id,
        businessName: businessName,
        jobTitle: jobTitle,
        typeTime: typeTime,
        salary: salary,
        requireExp: requireExp,
        jobDescription: jobDescription,
        jobRequirement: jobRequirement,
        urlPhoto: urlPhoto,
      })
      console.log("Document written with ID: ", jobRef.id);
      Toast.show({
        type: 'success',
        text1: 'Thêm công việc.',
        text2: 'Thêm công việc thành công.'
      })

      
    } catch (error) {
      console.error("Error adding document: ", error)
    }
  }

  const handleAddJob = () => {
    console.log("Add job");
    const id = uuid.v4().toString();
    const jobCustom: JobCustom = {
      uid: user?.id || "",
      id: id,
      businessName: businessName,
      jobTitle: jobTitle,
      typeTime: typeTime,
      salary: salary,
      requireExp: requireExp,
      jobDescription: jobDescription,
      jobRequirement: jobRequirement,
      urlPhoto: urlPhoto,
    }
    addDbJob(user?.id || "", id, businessName, jobTitle, typeTime, salary,requireExp, jobDescription, jobRequirement, urlPhoto)
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
              urlPhoto ? { uri: urlPhoto } : require("../../assets/images/user.jpg")
            }
          />
          <Text className="mt-2 py-[7.5px] font-app-medium text-body2">
            Hình ảnh doanh nghiệp
          </Text>
        </Pressable>
        <TextFieldWithLabel
          value={businessName}
          onChangeText={(text) => setBusinessName(text)}
          label="Tên doanh nghiệp"
          containerClassName="mt-2"
          placeholder="Nhập tên doanh nghiệp"
        />
        <TextFieldWithLabel
          value={jobTitle}
          onChangeText={(text) => setJobTitle(text)}
          label="Tên công việc"
          containerClassName="mt-2"
          placeholder="Nhập tên công việc"
        />
        <TextFieldWithLabel
          value={typeTime}
          onChangeText={(text) => setTypeTime(text)}
          label="Loại hình công việc"
          containerClassName="mt-2"
          placeholder="Full time/Part time"
        />

        <TextFieldWithLabel
          value={salary}
          onChangeText={(text) => setSalary(text)}
          label="Lương"
          containerClassName="mt-4"
          placeholder="Nhập lương"
        />
        <TextFieldWithLabel
          value={requireExp}
          onChangeText={(text) => setRequireExp(text)}
          label="Yêu cầu kinh nghiệm"
          containerClassName="mt-2"
          placeholder="Trên 2 năm,..."
        />
        <View>
          <Text className="text-[16px] mt-2">Mô tả công việc</Text>
          <TextInput
            value = {jobDescription == "-1" ? "" : jobDescription}
            onChangeText = {(text) => setJobDescription(text)} 
            multiline
            mode="outlined"
            numberOfLines={4}
            style={{ minHeight: 100 }}
            outlineColor="transparent"
            activeOutlineColor="#e0e0e0"
            className="rounded-[8px] bg-giratina-100 focus:border-giratina-300"
          />
        </View>
        <View>
          <Text className="text-[16px] mt-2">Yêu cầu công việc</Text>
          <TextInput
            value = {jobRequirement}
            onChangeText = {(text) => setJobRequirement(text)}
            multiline
            mode="outlined"
            numberOfLines={4}
            style={{ minHeight: 100 }}
            outlineColor="transparent"
            activeOutlineColor="#e0e0e0"
            className="rounded-[8px] bg-giratina-100 focus:border-giratina-300"
          />
        </View>
      </ScrollView>
      {/* Full name */}
    </CustomSafeAreaView>
  );
};

export default AddJobScreen;

const styles = StyleSheet.create({});
