import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { Appbar, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { CustomSafeAreaView } from "../../components/common";
import Bars from "../../navigator/Bar";

const JobPostedScreen = ({ navigation }: { navigation: any }) => {
  return (
    <CustomSafeAreaView className="flex-1 items-center bg-white px-2">
      <Bars
        headerLeft="return"
        title="Công việc đã đăng"
        onLeftButtonPress={() => navigation.goBack()}
        className="mb-2 font-[700]"
      />
      <ScrollView className="w-full">
        <View className="w-full">
          <View className="flex justify-between flex-row my-[10px]">
            <Text className="text-[14px]">
              Hiện tại có <Text>5</Text> công việc
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate("AddJob");
              }}
            >
              <Text className="text-[14px] font-[700]">Thêm công việc</Text>
            </Pressable>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Detail");
            }}
          >
            <View
              style={{
                borderWidth: 3,
                borderColor: "#6667AB",
              }}
              className="bg-white pr-[4px] ml-[4px] mr-[4px] rounded-[10px] mt-[15px]"
            >
              <View style={{ flexDirection: "row" }} className="flex">
                <Image
                  //   style={{ width: 80, height: 80, borderRadius: 1, margin: 20 }}
                  className="w-[80px] h-[80px] rounded-[1px] mx-[10px] my-auto"
                  source={require("../../assets/icons/groove.jpg.png")}
                />
                <View style={{ margin: 20, flexDirection: "column" }}>
                  <Text className="text-[14px] font-[700]">
                    GROOVE TECHNOLOGY
                  </Text>
                  <Text className="text-[14px] font-[400] text-[#6667AB] mr-[4px]">
                    SENIOR JAVA DEVELOPER
                  </Text>
                  <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <Text
                      style={{
                        marginRight: 10,
                        backgroundColor: "#BEBEBE",
                        padding: 5,
                      }}
                    >
                      Java
                    </Text>
                    <Text
                      style={{
                        marginRight: 10,
                        backgroundColor: "#BEBEBE",
                        padding: 5,
                      }}
                    >
                      Spring
                    </Text>
                    <Text
                      style={{
                        marginRight: 10,
                        backgroundColor: "#BEBEBE",
                        padding: 5,
                      }}
                    >
                      COBOL
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("DetailMore");
            }}
          >
            <View
              style={{
                borderWidth: 3,
                borderColor: "#6667AB",
              }}
              className="bg-white pr-[4px] ml-[4px] mr-[4px] rounded-[10px] mt-[15px]"
            >
              <View style={{ flexDirection: "row" }} className="flex">
                <Image
                  //   style={{ width: 80, height: 80, borderRadius: 1, margin: 20 }}
                  className="w-[80px] h-[80px] rounded-[1px] mx-[10px] my-auto"
                  source={require("../../assets/icons/groove.jpg.png")}
                />
                <View style={{ margin: 20, flexDirection: "column" }}>
                  <Text className="text-[14px] font-[700]">
                    GROOVE TECHNOLOGY
                  </Text>
                  <Text className="text-[14px] font-[400] text-[#6667AB] mr-[4px]">
                    SENIOR JAVA DEVELOPER
                  </Text>
                  <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <Text
                      style={{
                        marginRight: 10,
                        backgroundColor: "#BEBEBE",
                        padding: 5,
                      }}
                    >
                      Java
                    </Text>
                    <Text
                      style={{
                        marginRight: 10,
                        backgroundColor: "#BEBEBE",
                        padding: 5,
                      }}
                    >
                      Spring
                    </Text>
                    <Text
                      style={{
                        marginRight: 10,
                        backgroundColor: "#BEBEBE",
                        padding: 5,
                      }}
                    >
                      COBOL
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("DetailMore");
            }}
          >
            <View
              style={{
                borderWidth: 3,
                borderColor: "#6667AB",
              }}
              className="bg-white pr-[4px] ml-[4px] mr-[4px] rounded-[10px] mt-[15px]"
            >
              <View style={{ flexDirection: "row" }} className="flex">
                <Image
                  //   style={{ width: 80, height: 80, borderRadius: 1, margin: 20 }}
                  className="w-[80px] h-[80px] rounded-[1px] mx-[10px] my-auto"
                  source={require("../../assets/icons/groove.jpg.png")}
                />
                <View style={{ margin: 20, flexDirection: "column" }}>
                  <Text className="text-[14px] font-[700]">
                    GROOVE TECHNOLOGY
                  </Text>
                  <Text className="text-[14px] font-[400] text-[#6667AB] mr-[4px]">
                    SENIOR JAVA DEVELOPER
                  </Text>
                  <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <Text
                      style={{
                        marginRight: 10,
                        backgroundColor: "#BEBEBE",
                        padding: 5,
                      }}
                    >
                      Java
                    </Text>
                    <Text
                      style={{
                        marginRight: 10,
                        backgroundColor: "#BEBEBE",
                        padding: 5,
                      }}
                    >
                      Spring
                    </Text>
                    <Text
                      style={{
                        marginRight: 10,
                        backgroundColor: "#BEBEBE",
                        padding: 5,
                      }}
                    >
                      COBOL
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("DetailMore");
            }}
          >
            <View
              style={{
                borderWidth: 3,
                borderColor: "#6667AB",
              }}
              className="bg-white pr-[4px] ml-[4px] mr-[4px] rounded-[10px] mt-[15px]"
            >
              <View style={{ flexDirection: "row" }} className="flex">
                <Image
                  //   style={{ width: 80, height: 80, borderRadius: 1, margin: 20 }}
                  className="w-[80px] h-[80px] rounded-[1px] mx-[10px] my-auto"
                  source={require("../../assets/icons/groove.jpg.png")}
                />
                <View style={{ margin: 20, flexDirection: "column" }}>
                  <Text className="text-[14px] font-[700]">
                    GROOVE TECHNOLOGY
                  </Text>
                  <Text className="text-[14px] font-[400] text-[#6667AB] mr-[4px]">
                    SENIOR JAVA DEVELOPER
                  </Text>
                  <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <Text
                      style={{
                        marginRight: 10,
                        backgroundColor: "#BEBEBE",
                        padding: 5,
                      }}
                    >
                      Java
                    </Text>
                    <Text
                      style={{
                        marginRight: 10,
                        backgroundColor: "#BEBEBE",
                        padding: 5,
                      }}
                    >
                      Spring
                    </Text>
                    <Text
                      style={{
                        marginRight: 10,
                        backgroundColor: "#BEBEBE",
                        padding: 5,
                      }}
                    >
                      COBOL
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("DetailMore");
            }}
          >
            <View
              style={{
                borderWidth: 3,
                borderColor: "#6667AB",
              }}
              className="bg-white pr-[4px] ml-[4px] mr-[4px] rounded-[10px] mt-[15px]"
            >
              <View style={{ flexDirection: "row" }} className="flex">
                <Image
                  //   style={{ width: 80, height: 80, borderRadius: 1, margin: 20 }}
                  className="w-[80px] h-[80px] rounded-[1px] mx-[10px] my-auto"
                  source={require("../../assets/icons/groove.jpg.png")}
                />
                <View style={{ margin: 20, flexDirection: "column" }}>
                  <Text className="text-[14px] font-[700]">
                    GROOVE TECHNOLOGY
                  </Text>
                  <Text className="text-[14px] font-[400] text-[#6667AB] mr-[4px]">
                    SENIOR JAVA DEVELOPER
                  </Text>
                  <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <Text
                      style={{
                        marginRight: 10,
                        backgroundColor: "#BEBEBE",
                        padding: 5,
                      }}
                    >
                      Java
                    </Text>
                    <Text
                      style={{
                        marginRight: 10,
                        backgroundColor: "#BEBEBE",
                        padding: 5,
                      }}
                    >
                      Spring
                    </Text>
                    <Text
                      style={{
                        marginRight: 10,
                        backgroundColor: "#BEBEBE",
                        padding: 5,
                      }}
                    >
                      COBOL
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default JobPostedScreen;
