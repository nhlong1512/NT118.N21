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
  
  const UserScreen = ({ navigation }: { navigation: any }) => {
    return (
      <SafeAreaView className="flex-1 px-[20px] pt-[25px] flex justify-start mb-[25px]">
        <View style={{margin:16}} className="bg-[#fff] rounded-[20px] flex justify-center items-center py-[20px] mt-[20px]">
          <Image
            className="w-[150px] h-[150px] rounded-[100]"
            style={{ borderRadius: 100 }}
            source={require("../assets/icons/avtuser.png")}
          />
          <Text style={{fontFamily:'Cochin'}} className="text-[24px] text-[#6667AB] font-[700] mt-[20px]">
            Nhi Truong
          </Text>
        </View>
        <View>
          <Button style={{marginLeft:16, marginRight:16,marginTop:50,borderRadius:10,height:40}}
            className="mt-[40px] bg-[#6667AB] "
            mode="contained"
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Feather name="user" size={20} color="white" className="mr-[20px]" />
            <View style={{ width: 16, height: 1 }} />
            <Text style={{fontSize:18}}>Thông tin của tôi</Text>
          </Button>
          <Button style={{marginLeft:16, marginRight:16,marginTop:20,borderRadius:10,height:40}}
            className="mt-[20px] bg-[#6667AB]"
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            <AntDesign name="paperclip" size={20} color="white" />
            <View style={{ width: 16, height: 1 }} />
            <Text style={{fontSize:18}} className="text-center ml-[20px]">Công việc đã lưu</Text>
          </Button>
          <Button style={{marginLeft:16, marginRight:16,marginTop:20,borderRadius:10,height:40}}
            className="mt-[20px] bg-[#6667AB] "
            mode="contained"
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            <Entypo name="log-out" size={20} color="white" />
            <View style={{ width: 16, height: 1 }} />
            <Text style={{fontSize:18}}>Đăng xuất</Text>
          </Button>
        </View>
      </SafeAreaView>
    );
  };
  
  export default UserScreen;
  
  const styles = StyleSheet.create({});
  