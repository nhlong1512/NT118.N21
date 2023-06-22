import React,{useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView,Image,TouchableOpacity,TextInput,Button,FlatList,ScrollView } from 'react-native';

const UpLoadCV =({navigation}:{navigation:any})=>{
  return(
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {
              navigation.navigate("HomeSc");
            }}>
          <View style={{alignItems:'flex-start', margin:16}} className="bg-[#6667AB] flex flex-row justify-center items-center py-[4px] px-[14px] rounded-[10px]">
            <Image source={require('../assets/icons/arrow_back.png')}/>
          </View>
        </TouchableOpacity> 
        <View style={{justifyContent:'center',marginLeft:30,marginBottom:20,marginTop:15}}>
          <Text style={{justifyContent:'center',color:'#6667AB',fontWeight:'bold',fontSize:30,fontFamily:'lexend'}}>
            UPLOAD CV
          </Text>
        </View>
        </View>
        <View style={{margin:20}}>
          <Text style={{color:'#6667AB',fontWeight:'bold',fontSize:25,fontFamily:'Cochin'}}>
            Thư giới thiệu :
          </Text>
        </View>
        <View>
          <TextInput 
          style={styles.input}
          />
        </View>
        <View style={{alignItems:'center',marginTop:40}}>
          <TouchableOpacity>
            <View style={{alignItems:'center',width:70,height:70,justifyContent:'center',borderRadius:10,backgroundColor:'#6667AB'}}>
              <Text style={{textAlign:'center',fontSize:40,color:"white",fontWeight:'bold'}}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{alignItems:'center',marginTop:70}}>
          <TouchableOpacity onPress={() => {
              navigation.navigate("UploadSuccess");
            }}>
            <View style={{width:150,height:50,justifyContent:'center',borderRadius:10,backgroundColor:'#6667AB',}}>
              <Text style={{textAlign:'center',fontSize:24,color:"white",fontWeight:'bold',fontFamily:'Cochin'}}>UPLOAD</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default UpLoadCV;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:16,
  },
  input: {
    height: 180,
    margin: 16,
    padding: 10,
    borderRadius:10,
    backgroundColor:'#9B9BC4',
    color:"black"
  },
  header:{
    flexDirection:'row',
  }
})