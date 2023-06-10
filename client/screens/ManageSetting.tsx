import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { Feather, AntDesign, Entypo } from "@expo/vector-icons";
import EditManage from "../screens/Admin/EditManage";
const ManageSetting = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView className="flex-1 px-[20px] pt-[25px] flex justify-start mb-[25px]">
      <View style={{marginLeft:16,marginRight:16}}>
      <View style={{marginBottom:50}} className="bg-[#fff] rounded-[20px] flex justify-center items-center py-[20px] mt-[20px]">
        <Image
          className="w-[90px] h-[90px] rounded-[100]"
          style={{borderWidth:1, borderRadius:50}}
          source={require("../assets/icons/company.png")}
        />
        <Text style={{fontFamily:'Cochin'}} className="text-[24px] text-[#6667AB] font-[700] mt-[20px]">
          Phu Nguyen Company
        </Text>
      </View>
      </View>
      <View>
      <Button style={{marginLeft:16, marginRight:16,marginTop:50,borderRadius:10,height:40}}
          className="mt-[40px] bg-[#6667AB] "
          mode="contained"
          onPress={() => {
            navigation.navigate("Manager");
          }}
        >
          <Feather name="user" size={20} color="white" className="mr-[20px]" />
          <View style={{ width: 16, height: 1 }} />
          <Text style={{fontSize:18}}>Thông tin</Text>
        </Button>
        <Button style={{marginLeft:16, marginRight:16,marginTop:20,borderRadius:10,height:40}}
          className="mt-[20px] bg-[#6667AB]"
          mode="contained"
          onPress={() => {
            
          }}
        >
          <AntDesign name="paperclip" size={20} color="white" />
          <View style={{ width: 16, height: 1 }} />
          <Text style={{fontSize:18}} className="text-center ml-[20px]">Quản lý công việc</Text>
        </Button>
        <Button style={{marginLeft:16, marginRight:16,marginTop:20,borderRadius:10,height:40}}
          className="mt-[20px] bg-[#6667AB]"
          mode="contained"
          onPress={() => {
            navigation.navigate("AddJobs");
          }}
        >
          <AntDesign name="plus" size={20} color="white" />
          <View style={{ width: 16, height: 1 }} />
          <Text style={{fontSize:18}} className="text-center ml-[20px]">Thêm công việc</Text>
        </Button>
        <Button style={{marginLeft:16, marginRight:16,marginTop:20,borderRadius:10,height:40}}
          className="mt-[20px] bg-[#6667AB]"
          mode="contained"
          onPress={() => {
            navigation.navigate("DeleteJ");
          }}
        >
          <AntDesign name="delete" size={20} color="white" />
          <View style={{ width: 16, height: 1 }} />
          <Text style={{fontSize:18}} className="text-center ml-[20px]">Xoá công việc</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default ManageSetting;

const styles = StyleSheet.create({});
