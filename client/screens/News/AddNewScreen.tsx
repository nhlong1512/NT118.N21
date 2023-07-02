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
import uuid from "react-native-uuid";
import { JobCustom, NewCustom } from "../../model/model";
import Toast from "react-native-toast-message";
import useUserStore from "../../store/user";
import shallow from "zustand/shallow";

const AddNewScreen = ({ navigation }: { navigation: any }) => {
  const [user, setUser] = useUserStore(
    (state) => [state.user, state.setUser],
    shallow
  );
  const [title, setTitle] = useState("");
  const [urlPhoto, setUrlPhoto] = useState("");
  const [type, setType] = useState("");
  const [content, setContent] = useState("");
  

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
  const addDbNew = async (
    id: string,
    title: string,
    type: string,
    content: string,
    urlPhoto: string
  ) => {
    try {
      const newRef = collection(db, "new");
      await setDoc(doc(newRef, id), {
        id: id,
        title: title,
        type: type,
        content: content,
        urlPhoto: urlPhoto,
      });
      console.log("Document written with ID: ", newRef.id);
      Toast.show({
        type: "success",
        text1: "Thêm tin tức.",
        text2: "Thêm tin tức thành công.",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleAddNew = () => {
    console.log("Add job");
    const id = uuid.v4().toString();
    const jobCustom: NewCustom = {
      id: id,
      title: title,
      type: type,
      content: content,
      urlPhoto: urlPhoto,
    };
    addDbNew(id, title, type, content, urlPhoto);
    navigation.navigate("NewsUpdate");
  };
  return (
    <CustomSafeAreaView className="flex-1 items-center bg-white px-4">
      <Bars
        headerLeft="return"
        title="Thêm tin tức"
        headerRight="action"
        label="Thêm"
        onLeftButtonPress={() => navigation.goBack()}
        onRightButtonPress={handleAddNew}
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
              urlPhoto
                ? { uri: urlPhoto }
                : require("../../assets/images/user.jpg")
            }
          />
          <Text className="mt-2 py-[7.5px] font-app-medium text-body2">
            Hình ảnh tin tức
          </Text>
        </Pressable>
        <View>
          <Text className="text-[16px] mt-2">Tiêu đề tin tức</Text>
          <TextInput
            value={title}
            onChangeText={(text) => setTitle(text)}
            multiline
            mode="outlined"
            numberOfLines={4}
            style={{ minHeight: 100 }}
            outlineColor="transparent"
            activeOutlineColor="#e0e0e0"
            className="rounded-[8px] bg-giratina-100 focus:border-giratina-300"
          />
        </View>
        <TextFieldWithLabel
          value={type}
          onChangeText={(text) => setType(text)}
          label="Thể loại tin tức"
          containerClassName="mt-2"
          placeholder="Nhập thể loại tin tức"
        />

        <View>
          <Text className="text-[16px] mt-2">Nội dung tin tức</Text>
          <TextInput
            value={content}
            onChangeText={(text) => setContent(text)}
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

export default AddNewScreen;

const styles = StyleSheet.create({});
