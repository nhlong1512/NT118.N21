import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {Appbar, TextInput} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'

const MoreJobs = ({navigation}:{navigation:any}) => {
  return (
    <SafeAreaView style={{flex:1, marginBottom:5}}>
        <Appbar.Header style={{backgroundColor:'#6667AB'}}>
            <Appbar.BackAction style={{backgroundColor:'white'}} onPress={() => {navigation.navigate("HomeSc");}} />
            <TextInput placeholder='Search' style={{backgroundColor:'white',borderRadius:5, width:300,height:50, marginBottom:5, marginLeft:16, marginRight:16}}>
            </TextInput>
        </Appbar.Header>
        <ScrollView>
        <View >
            <Text style={{marginTop:10, marginLeft:16, fontFamily:'Cochin'}}>
                Hiện tại có <Text>5</Text> công việc
            </Text>
            <TouchableOpacity onPress={() => {
              navigation.navigate("DetailMore");
            }}>
            <View style={{borderWidth:3,borderColor:'#6667AB', marginTop:15,backgroundColor:'white' ,marginLeft:16, marginRight:16, borderRadius:10}}>
                <View style={{flexDirection: 'row',}}>
                    <Image style={{width:80, height:80, borderRadius:1, margin:20}} source={require("../assets/icons/groove.jpg.png")} />
                    <View style={{margin:20, flexDirection:'column'}}>
                        <Text style={{fontSize:15,fontFamily:'Cochin', fontWeight:'600'}}>GROOVE TECHNOLOGY</Text>
                        <Text style={{fontSize:15,fontFamily:'Cochin', fontWeight:'400', marginTop:10, color:'#6667AB', marginRight:16}}>
                            SENIOR JAVA DEVELOPER
                        </Text>
                        <View style={{flexDirection:'row', marginTop:20}}>
                            <Text style={{marginRight:10, backgroundColor:'#BEBEBE',padding:5}}>Java</Text>
                            <Text style={{marginRight:10, backgroundColor:'#BEBEBE',padding:5}}>Spring</Text>
                            <Text style={{marginRight:10, backgroundColor:'#BEBEBE',padding:5}}>COBOL</Text>
                            
                        </View>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              navigation.navigate("DetailMore");
            }}>
            <View style={{borderWidth:3,borderColor:'#6667AB', marginTop:15,backgroundColor:'white' ,marginLeft:16, marginRight:16, borderRadius:10}}>
                <View style={{flexDirection: 'row',}}>
                    <Image style={{width:80, height:40, borderRadius:1, margin:20}} source={require("../assets/icons/FPT_Software_Logo.png")} />
                    <View style={{margin:20, flexDirection:'column'}}>
                        <Text style={{fontSize:15,fontFamily:'Cochin', fontWeight:'600'}}>FPT SOFTWARE</Text>
                        <Text style={{fontSize:15,fontFamily:'Cochin', fontWeight:'400', marginTop:10, color:'#6667AB', marginRight:16}}>
                            FRESHER JAVA GLOBAL
                        </Text>
                        <View style={{flexDirection:'row', marginTop:20}}>
                            <Text style={{marginRight:10, backgroundColor:'#BEBEBE',padding:5}}>Java</Text>
                            <Text style={{marginRight:10, backgroundColor:'#BEBEBE',padding:5}}>Spring</Text>
                            <Text style={{marginRight:10, backgroundColor:'#BEBEBE',padding:5}}>COBOL</Text>
                            
                        </View>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              navigation.navigate("DetailMore");
            }}>
            <View style={{borderWidth:3,borderColor:'#6667AB', marginTop:15,backgroundColor:'white' ,marginLeft:16, marginRight:16, borderRadius:10}}>
                <View style={{flexDirection: 'row',}}>
                    <Image style={{width:80, height:40, borderRadius:1, margin:20}} source={require("../assets/icons/160017v-keylogo_crop.png")} />
                    <View style={{margin:20, flexDirection:'column'}}>
                        <Text style={{fontSize:15,fontFamily:'Cochin', fontWeight:'600'}}>V-KEY</Text>
                        <Text style={{fontSize:15,fontFamily:'Cochin', fontWeight:'400', marginTop:10, color:'#6667AB'}}>
                            SOFTWARE ENGINEER
                        </Text>
                        <View style={{flexDirection:'row', marginTop:20}}>
                            <Text style={{marginRight:10, backgroundColor:'#BEBEBE',padding:5}}>QA</Text>
                            <Text style={{marginRight:10, backgroundColor:'#BEBEBE',padding:5}}>Software Developer</Text>                            
                        </View>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              navigation.navigate("DetailMore");
            }}>
            <View style={{borderWidth:3,borderColor:'#6667AB', marginTop:15,backgroundColor:'white' ,marginLeft:16, marginRight:16, borderRadius:10}}>
                <View style={{flexDirection: 'row',}}>
                    <Image style={{width:80, height:40, borderRadius:1, margin:20}} source={require("../assets/icons/zigexn-ventura-logo.jpg")} />
                    <View style={{margin:20, flexDirection:'column'}}>
                        <Text style={{fontSize:15,fontFamily:'Cochin', fontWeight:'600'}}>ZIGEXN VENTURA</Text>
                        <Text style={{fontSize:15,fontFamily:'Cochin', fontWeight:'400', marginTop:10, color:'#6667AB'}}>
                            FULLSTACK DEVELOPER
                        </Text>
                        <View style={{flexDirection:'row', marginTop:20}}>
                            <Text style={{marginRight:10, backgroundColor:'#BEBEBE',padding:5}}>NodeJS</Text>
                            <Text style={{marginRight:10, backgroundColor:'#BEBEBE',padding:5}}>Full-Stack</Text>
                            <Text style={{marginRight:10, backgroundColor:'#BEBEBE',padding:5}}>VueJS</Text>
                        </View>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              navigation.navigate("DetailMore");
            }}>
            <View style={{borderWidth:3,borderColor:'#6667AB', marginTop:15,backgroundColor:'white' ,marginLeft:16, marginRight:16, borderRadius:10}}>
                <View style={{flexDirection: 'row',}}>
                    <Image style={{width:80, height:40, borderRadius:1, margin:20}} source={require("../assets/icons/13fe5f335fc0bd3e2b27237737ca5d14.png")} />
                    <View style={{margin:20, flexDirection:'column'}}>
                        <Text style={{fontSize:15,fontFamily:'Cochin', fontWeight:'600'}}>SOFTROAD VIỆT NAM</Text>
                        <Text style={{fontSize:15,fontFamily:'Cochin', fontWeight:'400', marginTop:10, color:'#6667AB'}}>
                            SENIOR JAVA DEVELOPER
                        </Text>
                        <View style={{flexDirection:'row', marginTop:20}}>
                            <Text style={{marginRight:10, backgroundColor:'#BEBEBE',padding:5}}>Java</Text>
                            <Text style={{marginRight:10, backgroundColor:'#BEBEBE',padding:5}}>Spring</Text>
                            <Text style={{marginRight:10, backgroundColor:'#BEBEBE',padding:5}}>MyBatis</Text>
                        </View>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default MoreJobs