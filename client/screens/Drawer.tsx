import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Appbar} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const Drawer = ({navigation}:{navigation:any}) => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'column', backgroundColor:'#6667AB'}}>
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
        <ScrollView>
        <View>
        <TouchableOpacity onPress={() => {navigation.navigate("HomeSc");}}>
        <View style={{flexDirection:'row', margin:16, padding:16,borderRadius:10, backgroundColor:'white', borderColor:'#6667AB', borderWidth:2}}>
            <Image style={{width:40, height:40}} source={require('../assets/icons/home.png')}/>
            <Text style={{marginLeft:20, fontFamily:'Cochin', fontWeight:'bold', fontSize:20, marginTop:10, color:'black'}}>Home</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("Find");}}>
        <View style={{flexDirection:'row', margin:16, padding:16,borderRadius:10, backgroundColor:'white', borderColor:'#6667AB', borderWidth:2}}>
            <Image style={{width:40, height:40}} source={require('../assets/icons/search.png')}/>
            <Text style={{marginLeft:20, fontFamily:'Cochin', fontWeight:'bold', fontSize:20, marginTop:10, color:'black'}}>Tìm kiếm</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={() => {navigation.navigate("Tintuc");}}>
        <View style={{flexDirection:'row', margin:16, padding:16,borderRadius:10, backgroundColor:'white', borderColor:'#6667AB', borderWidth:2}}>
            <Image style={{width:40, height:40}} source={require('../assets/icons/bell.png')}/>
            <Text style={{marginLeft:20, fontFamily:'Cochin', fontWeight:'bold', fontSize:20, marginTop:10, color:'black'}}>Tin tức</Text>
        </View>
        </TouchableOpacity>
        </View>
        <TouchableOpacity 
        onPress={() => {navigation.navigate("SignIn");}}>
        <View style={{flexDirection:'row', margin:16, padding:16,borderRadius:10, backgroundColor:'white', borderColor:'#6667AB', borderWidth:2}}>
          <Image style={{width:40, height:40}} source={require('../assets/icons/logout.png')}/>
            <Text style={{marginLeft:20, fontFamily:'Cochin', fontWeight:'bold', fontSize:20, marginTop:10, color:'black'}}>Đăng xuất</Text>
        </View>
        </TouchableOpacity>
        </ScrollView>
        
        </View>
    </SafeAreaView>
  )
}

export default Drawer