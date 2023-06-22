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
  
  const UploadSuccessScreen = ({ navigation }: { navigation: any }) => {
    return (
      <SafeAreaView className="flex-1 px-[20px] pt-[25px] flex mb-[25px]">
        <View>
          <View className="items-center mt-[120px]">
            <Image source={require('../assets/images/tick.png')} />
          </View>
          <Text className="mt-[36px] text-[25px] font-[700] text-[#26277D] leading-[32px] text-center mb-[14px]">
            UPLOAD CV THÀNH CÔNG
          </Text>
          <TouchableOpacity onPress={() => {
              navigation.navigate("TrangChu");
            }}>
            <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'#26277D',marginTop:30}}>
                QUAY LẠI
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default UploadSuccessScreen;
  
  const styles = StyleSheet.create({});
  