import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Appbar, DataTable } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import Bars from "../navigator/Bar";

interface Props {
  route: any;
  navigation: any;
}
const NewsUpdate: React.FC<Props> = ({ route, navigation }) => {
  const { news } = route.params;
  console.log("Job Props", news);
  return (
    <SafeAreaView className="flex-1 bg-white px-4">
      <Bars
        headerLeft="return"
        title="Tin tức"
        onLeftButtonPress={() => navigation.goBack()}
        className="mb-2 font-[700]"
      />
      <ScrollView className="w-full">
        <View>
          {news.map((item: any) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ContentNews", { newItem: item });
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  paddingLeft: 16,
                  paddingRight: 16,
                  height: 320,
                  marginBottom: -50,
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    borderWidth: 2,
                    borderColor: "#6667AB",
                    width: "100%",
                    padding: 5,
                    borderRadius: 10,
                    backgroundColor: "white",
                  }}
                >
                  <Image
                    style={{ width: "100%", height: "60%" }}
                    source={{ uri: item.urlPhoto }}
                  />

                  <View style={{ flexDirection: "column", width: "95%" }}>
                    <Text
                      numberOfLines={1}
                      style={{
                        marginBottom: 10,
                        fontSize: 15,
                        fontWeight: "600",
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      numberOfLines={2}
                      style={{ fontSize: 13, fontWeight: "300" }}
                    >
                      {item.content}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsUpdate;
