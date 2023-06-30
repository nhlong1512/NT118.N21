import { collection, getDocs, query, where } from "firebase/firestore";
import { debounce } from "lodash";
import React, { useCallback, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Appbar, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { db } from "../firebaseConfig";

const FindJobs = ({ navigation }: { navigation: any }) => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchData, setSearchData] = useState([]);
  console.log(
    "Thuan ~ file: FindJobs.tsx:11 ~ FindJobs ~ searchData:",
    searchData
  );
  const onChangeText = (value: string) => {
    setSearchText(value);
    onSearchJob();
  };

  const onSearchJob = debounce(async () => {
    try {
      const jobCollection = collection(db, "job");
      const data = query(
        jobCollection,
        where("jobTitle", ">=", searchText),
        where("jobTitle", "<=", searchText + "~")
      );
      const querySnapshot = await getDocs(data);
      const array: any = [];
      querySnapshot.forEach((doc) => {
        array.push(doc.data());
      });
      setSearchData(array);
    } catch (error) {
      console.log("Thuan ~ file: FindJobs.tsx:28 ~ func ~ error:", error);
    }
  }, 300);

  const renderItem = ({ item }: { item: any }) => {
    return (
      <View>
        <Text>{item?.jobTitle}</Text>
      </View>
    );
  };

  const keyExtractor = useCallback((item: any, index: number) => {
    return item?.id?.toString() + index?.toString();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: "#6667AB" }}>
        <Appbar.BackAction
          style={{ backgroundColor: "white" }}
          onPress={() => {
            navigation.navigate("HomeSc");
          }}
        />
        <TextInput
          value={searchText}
          onChangeText={onChangeText}
          placeholder="Search"
          style={{
            backgroundColor: "white",
            borderRadius: 5,
            width: 300,
            height: 50,
            marginBottom: 5,
            marginLeft: 16,
            marginRight: 16,
          }}
        />
      </Appbar.Header>

      <FlatList
        data={searchData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      {/* <View
        style={{ flexDirection: "column", alignItems: "center", padding: 20 }}
      >
        <Image
          style={{ width: 300, height: 220 }}
          source={require("../assets/icons/lovepik-girls-looking-for-jobs-online-png-image_401690200_wh1200.png")}
        />
        <Text
          style={{
            marginTop: 20,
            fontFamily: "Cochin",
            fontSize: 20,
            fontWeight: "700",
          }}
        >
          Discover Jobs
        </Text>
        <Text style={{ marginTop: 10, fontFamily: "Cochin", fontSize: 20 }}>
          Try discovering new jobs with search
        </Text>
      </View>

      <View
        style={{
          borderWidth: 1,
          backgroundColor: "#5254A4",
          borderRadius: 10,
          padding: 16,
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View style={{ margin: 10 }}>
          <Text
            style={{
              color: "white",
              fontFamily: "Cochin",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Find top IT job for you
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("More");
          }}
        >
          <View
            style={{
              borderWidth: 1,
              height: 40,
              width: 250,
              justifyContent: "center",
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                color: "black",
                fontFamily: "Cochin",
                fontWeight: "bold",
              }}
            >
              CLICK HERE TO FIND MORE
            </Text>
          </View>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

export default FindJobs;
