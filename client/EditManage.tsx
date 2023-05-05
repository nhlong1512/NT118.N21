import React,{useState} from 'react';
import { Text,Button,TextInput,View,StyleSheet,SafeAreaView,Image,TouchableOpacity } from 'react-native';

const Separator = () => <View style={styles.separator} />;

const EditManage = ({ navigation }: { navigation: any }) => {
  const [text, setText] = useState<string>("");
    return (
        <SafeAreaView className="flex-1 px-[20px] pt-[25px] flex justify-start mb-[25px]">
          <View className="bg-[#fff] rounded-[20px] flex justify-center items-center py-[20px] mt-[20px]">
            <Image
              className="w-[150px] h-[150px] rounded-[100]"
              style={{ borderRadius: 100 }}
              source={("assets/images/user.jpg")}
            />
            <Text className="text-[24px] text-[#6667AB] font-[700] mt-[20px]">
              Long Nguyen
            </Text>
          </View>
          <View className="mt-[40px]">
            <View className="px-[10px] bg-red-500">
            </View>
            <View>
              <TextInput
                label="Tên"
                value="Phu Nguyen Company"
              />
              <TextInput
                label="Liên Hệ"
                value="0123456789"
                className="mt-[20px]"
              />
              <TextInput
                label="Email"
                value="abc@12345"
                className="mt-[20px]"
              />
              <TextInput
                label="Địa chỉ"
                value="KP6-LinhTrung-ThuDuc"
                className="mt-[20px]"
              />
            </View>
            <Button
              className="mt-[20px] bg-[#6667AB] "
              mode="contained"
              onPress={() => {
                navigation.navigate("UpdateSuccess");
              }}
            >
              <Text>Cập nhật</Text>
            </Button>
          </View>
        </SafeAreaView>
      );
    };
    export default EditManage;
    const styles = StyleSheet.create({});