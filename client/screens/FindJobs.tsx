import { collection, getDocs, query, where , onSnapshot} from "firebase/firestore";
import { debounce } from "lodash";
import React, { useCallback, useState ,useEffect} from "react";
import { FlatList, Text, View, TouchableOpacity, Image } from "react-native";
import { Appbar, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { db } from "../firebaseConfig";
import useUserStore from "../store/user";
import shallow from "zustand/shallow";
import { JobCustom } from "../model/model";
import { ScrollView } from "react-native-gesture-handler";

const FindJobs = ({ navigation }: { navigation: any }) => {

  const [user, setUser] = useUserStore(
    (state) => [state.user, state.setUser],
    shallow
  );
  console.log(user?.id);

  const [jobs, setJobs] = useState<JobCustom[]>([]);
  const fetchJobPosted = async () => {
    // let jobPosted: any = [];
    // const q = query(collection(db, "job"), where("uid", "==", user?.id));
    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    //   jobPosted.push(doc.data());
    // });
    // setJobs(jobPosted);
    const q = query(collection(db, "job"), where("uid", "==", user?.id));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const jobPosted: JobCustom[] = [];
      snapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        jobPosted.push(doc.data() as JobCustom);
      });
      setJobs(jobPosted);
    });
  };
  useEffect(() => {
    fetchJobPosted();
    const q = query(collection(db, "job"), where("uid", "==", user?.id));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const jobPosted: JobCustom[] = [];
      snapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        jobPosted.push(doc.data() as JobCustom);
      });
      setJobs(jobPosted);
    }
    );

    return () => {
      unsubscribe();
    };
  },
  [navigation,user?.id]);
  console.log("Jobs", jobs);

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
      <SafeAreaView style={{borderRadius:10, paddingLeft:16, paddingRight:16, paddingTop:-20}}>
         
          <TouchableOpacity
                onPress={() => {
                  navigation.navigate("JobDetail" ,{job: item});
                }}
              >
          <View
                  style={{
                    borderWidth: 3,
                    borderColor: "#6667AB",
                    marginBottom:-50
                  }}
                  className="bg-white pr-[4px] ml-[4px] mr-[4px] rounded-[10px] mt-[5px]"
          >
          <View style={{ flexDirection: "row" }} className="flex">
          <Image
                      //   style={{ width: 80, height: 80, borderRadius: 1, margin: 20 }}
                      // style = {{borderRadius:40}}
            className="w-[80px] h-[80px] rounded-[10px] mx-[10px] my-auto"
            source={{ uri: item?.urlPhoto }}
            />
              <View style={{ margin: 20, flexDirection: "column" }}>
                <Text className="text-[14px] font-[700]">
                        {item?.companyName}
                </Text>
                <Text className="text-[14px] font-[500] text-[#6667AB] mr-[4px]">
                        {item?.jobTitle}
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
      </SafeAreaView>
      
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
