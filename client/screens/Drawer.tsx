import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const Drawer = ({navigation}:{navigation:any}) => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'column'}}>
            <Image style={{height:100,width:100, borderRadius:10,margin:20}} source={require('../assets/icons/profile.png')} />
            <Text style={{
          fontSize: 23,
          fontWeight: 'bold',
          color: 'white',
          fontFamily:'Cochin',
          paddingLeft:20,
          paddingBottom:20,
        }}>Truong Y Nhi
        </Text>
        </View>
        <View>
            <Image source={require('../assets/icons/home.png')}/>
            <Text>Home</Text>
        </View>
        </View>
    </SafeAreaView>
  )
}
const TabButton = (currentTab:any, setCurrentTab:any, title:any, image:any) => {
    return (
  
      <TouchableOpacity onPress={() => {
        if (title == "LogOut") {
          // Do your Stuff...
        } else {
          setCurrentTab(title)
        }
      }}>
        <View style={{
          flexDirection: "row",
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: currentTab == title ? 'white' : 'transparent',
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15
        }}>
  
          <Image source={image} style={{
            width: 25, height: 25,
            tintColor: currentTab == title ? "#5359D1" : "white"
          }}></Image>
  
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            color: currentTab == title ? "#5359D1" : "white"
          }}>{title}</Text>
  
        </View>
      </TouchableOpacity>
    );
  }
export default Drawer