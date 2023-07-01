import { View, Text , Image, Dimensions} from 'react-native'
import React from 'react'
import {Appbar, TextInput} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import {BarChart} from "react-native-chart-kit";

const InfoCompany = ({navigation}:{navigation:any}) => {
  return (
    <SafeAreaView style={{flex:1}}>
        <Appbar.Header style={{backgroundColor:'#6667AB',}}>
            <Appbar.BackAction style={{backgroundColor:'white'}} onPress={() => {navigation.navigate("HomeSc");}}/>
            <Text style={{color:'white',fontFamily:'Cochin',fontSize:20, paddingLeft:45, paddingRight:30, fontWeight:'700'}}>
                COMPANY DETAILS
            </Text>
        </Appbar.Header>
        <ScrollView>
        <View style={{alignItems:'center', flexDirection:'column'}}>
            <Image style={{width:350, height:200}} source={require('../assets/icons/FPT_Software_Logo.png')}/>
            <Text style={{color:'#6667AB', fontFamily:'Cochin', fontSize:23, fontWeight:'700'}}>FPT SoftWare</Text>
        </View>
        <View style={{borderWidth:1,borderColor:'#6667AB', marginTop:16,padding:16, flexDirection:'column', backgroundColor:'white'}}>
            <Text style={{fontFamily:'Cochin', fontSize:18, fontWeight:'500'}}>Information</Text>
            <View style={{flexDirection:'row',marginTop:10}}>
                <Image style={{width:35, height:35}} source={require('../assets/icons/location.jpg')}/>
                <Text style={{fontFamily:'Cochin', marginLeft:10, marginTop:10, fontSize:15}}>
                    Duy Tan Street, Cau Giay District, Hanoi
                </Text>
            </View>

            <View style={{flexDirection:'row',marginTop:10}}>
                <Image style={{width:35, height:35}} source={require('../assets/icons/la-co-viet-nam-vector-1.png')}/>
                <Text style={{fontFamily:'Cochin', marginLeft:10, marginTop:10, fontSize:15}}>
                    VietNam
                </Text>
            </View>
        </View>
        <View style={{borderWidth:1,borderColor:'#6667AB', marginTop:16,padding:16, flexDirection:'column', backgroundColor:'white'}}>
            <Text style={{fontFamily:'Cochin', fontSize:18, fontWeight:'500'}}>Benefits</Text>
            <Text style={{fontFamily:'Cochin', fontSize:16, fontWeight:'200'}}>
                - Lương tháng 13 (Trung bình 4-5 tháng lương cơ bản)
            </Text>
            <Text style={{fontFamily:'Cochin', fontSize:16, fontWeight:'200'}}>
                - Cung cấp thiết bị làm việc
            </Text>
            <Text style={{fontFamily:'Cochin', fontSize:16, fontWeight:'200'}}>
                - Nghỉ phép năm theo quy định của nhà nước
            </Text>
            <Text style={{fontFamily:'Cochin', fontSize:16, fontWeight:'200'}}>
                - Thời gian làm việc: Thứ 2 - Thứ 6 từ 08 giờ tới 17 giờ
            </Text>
        </View>
    
        </ScrollView>
    </SafeAreaView>
  )
}

export default InfoCompany