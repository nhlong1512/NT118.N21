import React,{useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView,Image,TouchableOpacity,TextInput,Button,FlatList,ScrollView } from 'react-native';

const UpLoadCV =()=>{
  return(
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <TouchableOpacity>
          <View style={{marginLeft:-20}}>
            <Image style={{height:90,width:90}} source={require('../assets/icons/back.png')}/>
          </View>
        </TouchableOpacity> 
        <View style={{marginBottom:20,marginTop:10}}>
          <Text style={{textAlign:'center',color:'#6667AB',fontWeight:'bold',fontSize:30,fontFamily:'lexend'}}>
            UPLOAD CV
          </Text>
        </View>
        </View>
        <View style={{margin:20}}>
          <Text style={{color:'#6667AB',fontWeight:'bold',fontSize:20,fontFamily:'lexend'}}>
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
            <View style={{borderWidth:1,width:50,height:50,justifyContent:'center',borderRadius:30,backgroundColor:'#6667AB'}}>
              <Text style={{textAlign:'center',fontSize:40,color:"white",fontWeight:'bold'}}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{alignItems:'center',marginTop:70}}>
          <TouchableOpacity>
            <View style={{borderWidth:1,width:100,height:50,justifyContent:'center',borderRadius:10,backgroundColor:'#6667AB',}}>
              <Text style={{textAlign:'center',fontSize:20,color:"white",fontWeight:'bold',fontFamily:'lexend'}}>UPLOAD</Text>
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