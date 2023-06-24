import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Appbar, TextInput} from 'react-native-paper'

const FindJobs = ({navigation}:{navigation:any}) => {
  return (
    <SafeAreaView style={{flex:1}}>
        <Appbar.Header style={{backgroundColor:'#6667AB'}}>
            <Appbar.BackAction style={{backgroundColor:'white'}} onPress={() => {navigation.navigate("HomeSc");}} />
            <TextInput placeholder='Search' style={{backgroundColor:'white',borderRadius:5, width:300,height:50, marginBottom:5, marginLeft:16, marginRight:16}}>
            </TextInput>
        </Appbar.Header>
        <View style={{flexDirection:'column', alignItems:'center', padding:20}}>
            <Image style={{width:300,height:220}} source={require('../assets/icons/lovepik-girls-looking-for-jobs-online-png-image_401690200_wh1200.png')}/>
            <Text style={{marginTop:20, fontFamily:'Cochin', fontSize:20, fontWeight:'700'}}>
                Discover Jobs
            </Text>
            <Text style={{marginTop:10, fontFamily:'Cochin', fontSize:20}}>
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
            }}>
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
          </View>
    </SafeAreaView>
  )
}

export default FindJobs