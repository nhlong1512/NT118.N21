import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal
} from "react-native";
import React, {useState} from "react";
import { Button, TextInput } from "react-native-paper";

const SignUpScreen = ({ navigation }: { navigation: any }) => {
  const [isModalVisible, setisModalVisible] = useState(false);
  const changeModalVisible =(bool:any)=>{
    setisModalVisible(bool)
  }
  return (
    <SafeAreaView className="flex-1 px-[20px] pt-[25px] flex justify-between mb-[25px]">
      <View>
        <View className="flex justify-between items-center flex-row mt-[48px]">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            <View style={{alignItems:'flex-start',margin:16}} className="bg-[#6667AB] flex flex-row justify-center items-center py-[4px] px-[14px] rounded-[10px]">
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
        <View style={{marginLeft:16,marginRight:16}}>
          <TextInput
            // value={text}
            // onChangeText={(text) => setText(text)}
            className="mt-[36px] rounded-[10px]"
            theme={{ roundness: 10 }}
            outlineColor="transparent"
            activeOutlineColor="#6667AB"
            placeholderTextColor="#969393"
            mode="outlined"
            placeholder="Họ Tên"
          />
          <TextInput
            // value={text}
            // onChangeText={(text) => setText(text)}
            className="mt-[24px] rounded-[10px]"
            theme={{ roundness: 10 }}
            outlineColor="transparent"
            activeOutlineColor="#6667AB"
            placeholderTextColor="#969393"
            mode="outlined"
            placeholder="Email"
          />
          <TextInput
            // value={text}
            // onChangeText={(text) => setText(text)}
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
            // value={text}
            // onChangeText={(text) => setText(text)}
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
        <TouchableOpacity style={{marginLeft:16,marginRight:16}}>
          <Button
            // icon="camera"
            mode="contained"
            compact={true}
            className="rounded-[10px] py-[4px] bg-[#6667AB] mt-[48px]"
            onPress={() => console.log("Pressed Sign up")}
          >
            <Image source={require("../assets/icons/telegram_icon.png")} />
            <Text className="text-[18px] font-[700]">&nbsp; ĐĂNG KÝ</Text>
          </Button>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType='fade'
          visible={isModalVisible}
          onRequestClose={()=> changeModalVisible(false)}
          >
        </Modal>
        <Text className="text-center flex flex-row justify-center items-center mt-[24px] text-[16px] leading-[20px]">
          Đã có tài khoản?
          <Text> </Text>
          <Text
            className="font-[600] underline text-[#6667AB]"
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            ĐĂNG NHẬP
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
