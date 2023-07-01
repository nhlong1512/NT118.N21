import { View, Text, Image, TouchableOpacity ,Pressable } from 'react-native'
import React, { useEffect, useState } from "react";
import {Appbar, TextInput} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import useUserStore from "../store/user";
import Bars from "../navigator/Bar";
import shallow from "zustand/shallow";
import { collection, getDocs, query, where } from "firebase/firestore";
import { JobCustom } from "../model/model";
import { db } from "../firebaseConfig";

const MoreJobs = ({navigation}:{navigation:any}) => {
    const [user, setUser] = useUserStore(
        (state) => [state.user, state.setUser],
        shallow
      );
      console.log(user?.id);
      
      const [jobs, setJobs] = useState<JobCustom[]>([]);
      useEffect(() => {
        const fetchJobPosted = async () => {
          let jobPosted: any = [];
          const q = query(collection(db, "job"), where("uid", "==", user?.id));
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            jobPosted.push(doc.data());
          });
          setJobs(jobPosted);
        };
        fetchJobPosted();
      }, [navigation]);
      console.log("Jobs", jobs);
      
      
    
  return (
    <SafeAreaView style={{flex:1, marginBottom:5}}>
        <Bars
        headerLeft="return"
        title="Các công việc hiện có"
        onLeftButtonPress={() => navigation.goBack()}
        className="mb-2 font-[700]"
  
      />
        <ScrollView className="w-full" style={{padding:16}}>
        <View className="w-full">
          <View className="flex justify-between flex-row my-[10px]">
            <Text className="text-[14px]">
              Hiện tại có <Text>{jobs.length}</Text> công việc
            </Text>
            
          </View>
          <View>
            {jobs.map((job) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("JobDetail", {job: job});
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
                      // style = {{borderRadius:40}}
                      className="w-[80px] h-[80px] rounded-[10px] mx-[10px] my-auto"
                      source={{ uri: job.urlPhoto }}
                    />
                    <View style={{ margin: 20, flexDirection: "column" }}>
                      <Text className="text-[14px] font-[700]">
                        {job.companyName}
                      </Text>
                      <Text className="text-[14px] font-[400] text-[#6667AB] mr-[4px]">
                        {job.jobTitle}
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
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MoreJobs