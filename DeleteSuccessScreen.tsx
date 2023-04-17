import React,{useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView,Image,TouchableOpacity } from 'react-native';

const DeleteSuccessScreen=()=>{
  return(
    <SafeAreaView style={styles.container}>
      <View style={{alignItems:'center'}}>
        <View style={{marginTop:120}}>
          <Image source={require('../assets/icons/delete.png')}/>
        </View>
        <View style={{marginTop:35,marginBottom:50}}>
          <Text style={{fontSize:25,color:'#26277D',fontWeight:'bold'}}>
            XÓA THÀNH CÔNG
          </Text>
        </View>
        <View style={{marginTop:20}}>
          <TouchableOpacity>
            <Text style={{fontSize:25,color:'#26277D',fontWeight:'500'}}>
              Quay lại
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView> 
  );
}
export default DeleteSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:16,
  },
})
