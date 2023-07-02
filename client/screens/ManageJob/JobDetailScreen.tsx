import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { CustomSafeAreaView } from "../../components/common";
import Bars from "../../navigator/Bar";
import useUserStore from "../../store/user";
import shallow from "zustand/shallow";
import { collection, getDocs, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { JobCustom } from "../../model/model";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

interface Props {
  route: any;
  navigation: any;
}

const JobDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { job } = route.params;
  console.log("Job Props", job);

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
  }, []);
  console.log(job);
  

  return (
    <CustomSafeAreaView className="flex-1 items-center bg-white px-2">
      <Bars
        headerLeft="return"
        title="Chi tiết công việc"
        onLeftButtonPress={() => navigation.goBack()}
        className="mb-2 font-[700]"
  
      />
      <ScrollView className="w-full" style={{padding:20}}>
        <View className="w-full">
          <View className="flex justify-center items-center">
            <Image
              className="w-[100px] h-[100px] rounded-[10px] mx-auto my-auto"
              source={{ uri: job.urlPhoto }}
            />
            <Text className="mt-[20px] text-[18px] font-[700]">
              {job.jobTitle}
            </Text>
            <Text className="mt-[4px] text-[16px] font-[500] text-[#969393]">
              {job.businessName}
            </Text>
          </View>
          <View className="mt-[20px]">
            <Text className="text-[18px] font-[700]">Thông tin chung</Text>
            <View className="flex gap-0 mx-[4px]">
              <View className="flex flex-row items-center gap-[20px]">
                <View className="rounded-[20px] bg-slate-200 p-[10px]">
                  <AntDesign
                    name="team"
                    size={24}
                    color="#6667AB"
                    className="p-[10px] bg-slate-500"
                  />
                </View>
                <View>
                  <Text className="text-[16px]">Số lượng tuyển</Text>
                  <Text className="text-[16px] font-[600]">
                    {job.numberRequirement} người
                  </Text>
                </View>
              </View>
              <View className="flex flex-row items-center gap-[20px]">
                <View className="rounded-[20px] bg-slate-200 p-[10px]">
                  <FontAwesome5
                    name="transgender-alt"
                    size={24}
                    color="#6667AB"
                    className="p-[10px] bg-slate-500"
                  />
                </View>
                <View>
                  <Text className="text-[16px]">Giới tính</Text>
                  <Text className="text-[16px] font-[600]">{job.gender}</Text>
                </View>
              </View>
              <View className="flex flex-row items-center gap-[20px]">
                <View className="rounded-[20px] bg-slate-200 p-[10px]">
                  <Foundation
                    name="shopping-bag"
                    size={24}
                    color="#6667AB"
                    className="p-[10px] bg-slate-500"
                  />
                </View>
                <View>
                  <Text className="text-[16px]">Vị trí</Text>
                  <Text className="text-[16px] font-[600]">{job.jobTitle}</Text>
                </View>
              </View>
              <View className="flex flex-row items-center gap-[20px]">
                <View className="rounded-[20px] bg-slate-200 p-[10px]">
                  <FontAwesome
                    name="map-marker"
                    size={24}
                    color="#6667AB"
                    className="p-[10px] bg-slate-500"
                  />
                </View>
                <View className="w-full">
                  <Text className="text-[16px]">Địa chỉ</Text>
                  <Text className="text-[16px] font-[600] mr-[4px] max-w-[100%]">
                    {job.address}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="mt-[20px]">
            <Text className="text-[18px] font-[700]">Mô tả công việc</Text>
            <Text className="text-[16px]">{job.jobDescription}</Text>
          </View>
          <View className="mt-[20px]">
            <Text className="text-[18px] font-[700]">Yêu cầu công việc</Text>
            <Text className="text-[16px]">{job.jobRequirement}</Text>
          </View>
          <View className="mt-[20px] mb-[30px]">
            <Text className="text-[18px] font-[700]">Quyền lợi</Text>
            <Text className="text-[16px]">{job.benefits}</Text>
          </View>
        </View>
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default JobDetailScreen;