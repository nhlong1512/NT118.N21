import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    RefreshControl,
  } from "react-native";
  import React from "react";
  import { Button, TextInput } from "react-native-paper";
  const Manage = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
           onPress={()=>{
                  navigation.navigate("EditManage");
                }}
         style={styles.backButton}>
            <View className="bg-[#6667AB] flex flex-row justify-center items-center py-[4px] px-[14px] rounded-[10px]">
                <Image source={require("/assets/arrow_back.png")} />
              </View>
          </TouchableOpacity>
          <Text style={styles.title}>Quản Lý</Text>
          <View style={{ width: 50 }} />
        </View>
        <TouchableOpacity
         onPress={()=>{
                  navigation.navigate("AddJobs");
                }}
         style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 25,
      paddingBottom: 5,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 20,
    },
    backButton: {
      backgroundColor: '#6767aa',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 40,
      borderWidth: 1,
      borderColor: '#007AFF',
    },
     title: {
      color:'#6767aa',
      fontSize: 30,
      fontWeight: 'bold',
    },
     button: {
      position: 'absolute',
      bottom: 40,
      right: 20,
      backgroundColor: '#6767aa',
      paddingVertical: 5,
      paddingHorizontal: 12,
      borderRadius: 25,
    },
    buttonText: {
      color: '#FFF',
      fontSize: 25,
      fontWeight: 'bold',
    },
  });
  
  export default Manage;
