import React,{useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView,Image,TouchableOpacity } from 'react-native';

const Separator = () => <View style={styles.separator} />;

const PleaseSignIn=({navigation}:{navigation:any})=>{
  return(
    <SafeAreaView style={styles.container}>
      <View>
        <View style={{justifyContent:'center',padding:15,alignItems:'center'}}>
          <Image style={{height:220,borderRadius:10,margin:15}} source={require('../assets/icons/avt.png')}/>
        </View>
        <View>
          <Text style={styles.jobhot}>
            Mời đăng nhập
          </Text>
        </View>
        <Separator />
        <View style={styles.signinback}>
            <TouchableOpacity onPress={()=>{
              navigation.navigate("SignIn");
            }}>
              <View style={{borderWidth:1,width:130,height:40,justifyContent:'center',borderRadius:10,backgroundColor:'#6667AB',marginLeft:20}}>
                <Text style={{textAlign:'center',fontSize:20,color:"white",fontFamily:'lexend',fontWeight:'bold'}}>
                  ĐĂNG NHẬP
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
              navigation.navigate("HomeSc");
            }}>
              <View style={{borderWidth:1,width:150,height:40,justifyContent:'center',borderRadius:10,backgroundColor:'#6667AB',marginRight:20}}>
                <Text style={{textAlign:'center',fontSize:20,color:"white",fontFamily:'lexend',fontWeight:'bold'}}>
                  QUAY LẠI
                </Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  );
}

export default PleaseSignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:16,
  },
  jobhot:{
    fontFamily:'Cochin',
    paddingLeft:20,
    fontSize:23,
    color:'#223183',
    fontWeight:'700'
  },
  separator: {
    marginVertical: 8,
    marginHorizontal :20,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom:30,
    marginTop:20,
  },
  signinback:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:60
  }
})