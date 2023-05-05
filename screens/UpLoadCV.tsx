import { FontAwesome5 } from '@expo/vector-icons';
import React,{useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView,Image,TouchableOpacity,TextInput,Button,FlatList,ScrollView } from 'react-native';

const UpLoadCV =({navigation}:{navigation:any})=>{
  return(
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
        <TouchableOpacity
            onPress={() => {
              navigation.navigate("Detail");
            }}
          >
            <View style={{alignItems:'flex-start',margin:16}} className="bg-[#6667AB] flex flex-row justify-center items-center py-[4px] px-[14px] rounded-[10px]">
              <Image source={require("../assets/icons/arrow_back.png")} />
            </View>
          </TouchableOpacity>
        <View style={{marginBottom:20,marginTop:13,alignItems:'center'}}>
          <Text style={{textAlign:'center',marginLeft:30,color:'#6667AB',fontWeight:'bold',fontSize:30,}}>
            UPLOAD CV
          </Text>
        </View>
        </View>
        <View style={{margin:16}}>
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
            <View style={{width:60,height:60,justifyContent:'center',borderRadius:10,backgroundColor:'#6667AB'}}>
              <Text style={{textAlign:'center',fontSize:40,color:"white",fontWeight:'700'}}>
                +
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{alignItems:'center',marginTop:70}}>
          <TouchableOpacity>
            <View style={{width:150,height:50,justifyContent:'center',borderRadius:10,backgroundColor:'#6667AB',}}>
              <Text style={{textAlign:'center',fontSize:25,color:"white",fontWeight:'bold',fontFamily:'Inner'}}>UPLOAD</Text>
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
    height: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    backgroundColor:'#9B9BC4',
    color:"black"
  },
  header:{
    flexDirection:'row',
  }
})