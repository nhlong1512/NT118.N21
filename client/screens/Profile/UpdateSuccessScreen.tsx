import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { Button, TextInput } from "react-native-paper";
  
  const UpdateSuccessScreen = ({ navigation }: { navigation: any }) => {
    return (
      <SafeAreaView className="flex-1 px-[20px] pt-[25px] flex mb-[25px]">
        <View>
          <View className="items-center mt-[120px]">
            <Image source={require("../../assets/images/tick.png")} />
          </View>
          <Text className="mt-[36px] text-[18px] font-[700] text-[#26277D] leading-[32px] text-center mb-[14px]">
            CẬP NHẬT THÀNH CÔNG
          </Text>
        </View>
      </SafeAreaView>
    );
  };
  
  export default UpdateSuccessScreen;
  
  const styles = StyleSheet.create({});
  