import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Appbar, DataTable } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import Bars from "../navigator/Bar";
import { NewCustom } from "../model/model";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import useUserStore from "../store/user";
import shallow from "zustand/shallow";

const NewsUpdate = ({ navigation }: { navigation: any }) => {
  const [user, setUser] = useUserStore(
    (state) => [state.user, state.setUser],
    shallow
  );
  const [news, setNews] = useState<NewCustom[]>([]);
  const fetchNewPosted = async () => {
    const q = query(collection(db, "new"), where("type", "==", "Công nghệ"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newPosted: NewCustom[] = [];
      snapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        newPosted.push(doc.data() as NewCustom);
      });
      setNews(newPosted);
    });
  };
  useEffect(() => {
    // fetchJobPosted();
    const q = query(collection(db, "new"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newPosted: NewCustom[] = [];
      snapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        newPosted.push(doc.data() as NewCustom);
      });
      setNews(newPosted);
    });

    return () => {
      unsubscribe();
    };
  }, [user?.id]);
  console.log("News", news);
  const newsCongNghe = news.filter((item) => item.type === "Công nghệ");
  const newsNgheNghiep = news.filter((item) => item.type === "Nghề nghiệp");
  return (
    <SafeAreaView className="flex-1 bg-white px-4">
      <Bars
        headerLeft="return"
        title="Tin tức"
        onLeftButtonPress={() => navigation.goBack()}
        className="mb-2 font-[700]"
      />
      <View className="flex flex-row justify-end items-end">
        <Pressable
          onPress={() => {
            navigation.navigate("AddNew");
          }}
        >
          <Text className="text-[14px] font-[700]">Thêm tin tức</Text>
        </Pressable>
      </View>
      <ScrollView className="w-full">
        <View style={{ paddingBottom: 20 }}>
          <View>
            <View className="flex flex-row justify-between my-[16px]">
              <View>
                <Text
                  style={{
                    fontFamily: "Cochin",
                    fontSize: 20,
                    color: "#6667AB",
                    fontWeight: "700",
                  }}
                >
                  Công nghệ
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Xemthem", { news: newsCongNghe });
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Cochin",
                    color: "#6667AB",
                    fontWeight: "600",
                  }}
                >
                  Xem thêm
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              {newsCongNghe.map((item) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ContentNews", { newItem: item });
                  }}
                  className="mb-[10px]"
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
          </View>

          <View>
            <View className="flex flex-row justify-between my-[16px]">
              <View>
                <Text
                  style={{
                    fontFamily: "Cochin",
                    fontSize: 20,
                    color: "#6667AB",
                    fontWeight: "700",
                  }}
                >
                  Nghề nghiệp
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Xemthem", { news: newsNgheNghiep });
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Cochin",
                    color: "#6667AB",
                    fontWeight: "600",
                  }}
                >
                  Xem thêm
                </Text>
              </TouchableOpacity>
            </View>
            {newsNgheNghiep.map((item) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ContentNews", { newItem: item });
                }}
                key={item.id}
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsUpdate;
