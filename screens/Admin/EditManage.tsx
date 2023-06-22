import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { Feather, AntDesign, Entypo } from "@expo/vector-icons";

const EditManage = ({ navigation }: { navigation: any }) => {
  const [text, setText] = useState<string>("");

  return (
    <SafeAreaView className="flex-1 px-[20px] pt-[25px] flex justify-start mb-[25px]">
      <View style={{margin:16}} className="bg-[#fff] rounded-[20px] flex justify-center items-center py-[20px] mt-[20px]">
        <Image
          className="w-[90px] h-[90px] rounded-[100]"
          style={{borderWidth:1, borderRadius:50}}
          source={require("../../assets/icons/company.png")}
        />
        <Text style={{fontFamily:'Cochin'}} className="text-[24px] text-[#6667AB] font-[700] mt-[20px]">
          Phu Nguyen Company
        </Text>
      </View>
      <View className="mt-[40px]">
        <View className="px-[10px] bg-red-500">
          {/* <Feather name="user" color="white" className="w-[20px]" /> */}
        </View>
        <View>
          <TextInput
            label="Tên"
            value="Phu Nguyen Company"
            // onChangeText={(text) => setText(text)}
          />
          <TextInput
            label="Liên hệ"
            value="0123456789"
            className="mt-[20px]"
            // onChangeText={(text) => setText(text)}
          />
          <TextInput
            label="Email"
            value="abc@12345"
            className="mt-[20px]"
            // onChangeText={(text) => setText(text)}
          />
          <TextInput
            label="Địa chỉ"
            value="TPHCM"
            className="mt-[20px]"
            // onChangeText={(text) => setText(text)}
          />
        </View>
        <Button style={{marginLeft:16, marginRight:16,marginTop:50,borderRadius:10,height:40}}
          className="mt-[20px] bg-[#6667AB] "
          mode="contained"
          onPress={() => {
            navigation.navigate("UpdateSuccess");
          }}
        >
          <Text style={{fontFamily:'Cochin',fontSize:18}}>CẬP NHẬT</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default EditManage;

const styles = StyleSheet.create({});
