import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import Bars from "../navigator/Bar";
import { Item } from "react-native-paper/lib/typescript/src/components/Drawer/Drawer";

interface Props {
  route: any;
  navigation: any;
}

const ContentNews: React.FC<Props> = ({ route, navigation }) => {
  const { newItem } = route.params;
  console.log("Job Props", newItem);
  return (
    <SafeAreaView className="flex-1 items-center bg-white px-4">
      <Bars
        headerLeft="return"
        title="Nội dung tin tức"
        onLeftButtonPress={() => navigation.goBack()}
        className="mb-2 font-[700]"
      />
      <ScrollView>
        <View style={{ flexDirection: "column", width: "100%" }}>
          <Text className="text-[30px] font-[700]">{newItem.title}</Text>
          <Image
            style={{ width: "98%", height: 200 }}
            source={{ uri: newItem.urlPhoto }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "400",
              textAlignVertical: "center",
              textAlign: "justify",
            }}
          >
            {newItem.content}
          </Text>

          {/* <Image
            style={{ width: "98%", height: 200 }}
            source={require("../assets/icons/locky.png")}
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContentNews;
