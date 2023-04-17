import React from 'react';
import { Text, View, StyleSheet, SafeAreaView,Image,TouchableOpacity,ScrollView } from 'react-native';
import {TextInput,Button} from 'react-native-paper';
const Separator = () => <View style={styles.separator} />;

const DetailsScreen=({navigation}:{navigation:any})=>{
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.header}>
            <TouchableOpacity onPress={()=>{
              navigation.navigate("HomeSc");
            }}>
            <View style={{marginLeft:-30}}>
              <Image style={{height:90,width:90}} source={require('../assets/icons/back.png')}/>
            </View>
          </TouchableOpacity> 
          <View style={{marginBottom:25,marginTop:15}}>
            <Text style={{textAlign:'center',color:'#6667AB',fontWeight:'bold',fontSize:25,}}>
              Chi tiết công việc
            </Text>
          </View>
          </View>
          <View style={{alignItems:'center'}}>
            <Image source={require('../assets/icons/company.png')}/>
          </View>
          <View style={{marginTop:20}}>
            <Text style={{textAlign:'center',fontFamily:'Cochin',fontSize:25,color:'#1E1E1E'}}>
              Senior Java Backend Developer
            </Text>
          </View>
          <Separator />
          <View style={{marginLeft:20}}>
            <Text style={{fontFamily:'Cochin',fontSize:22,color:'#1E1E1E'}}>
              Thông tin
            </Text>
          </View>
          <View style={styles.information}>
            <View>
              <Image source={require('../assets/icons/location.png')}/>
            </View>
            <View style={{marginLeft:20,}}>
              <Text style={{fontFamily:'lexend',fontSize:15,color:'#1E1E1E',marginRight:20}}>
                Anna building, QTSC, Phường Tân Chánh Hiệp, Quận 12, Thành phố Hồ Chí Minh
              </Text>
            </View>
          </View>
          <View style={styles.information}>
            <View>
              <Image source={require('../assets/icons/style.png')}/>
            </View>
            <View style={{marginLeft:20,marginTop:10}}>
              <Text style={{fontFamily:'lexend',fontSize:15,color:'#1E1E1E'}}>
                Full-Time
              </Text>
            </View>
          </View>
          <View style={styles.information}>
            <View>
              <Image source={require('../assets/icons/talk.png')}/>
            </View>
            <View style={{marginLeft:20,marginTop:10}}>
              <Text style={{fontFamily:'lexend',fontSize:15,color:'#1E1E1E'}}>
                Thảo luận
              </Text>
            </View>
          </View>
          <View style={styles.information}>
            <View>
              <Image source={require('../assets/icons/experience.png')}/>
            </View>
            <View style={{marginLeft:20,marginTop:10}}>
              <Text style={{fontFamily:'lexend',fontSize:15,color:'#1E1E1E'}}>
                3 năm
              </Text>
            </View>
          </View>
          <View style={{padding:20}}>
            <Text style={{fontFamily:'Cochin',fontSize:20,color:'#1E1E1E'}}>
              Mô tả công việc
            </Text>
            <Text></Text>
          </View>
          <View style={{padding:20}}>
            <Text style={{fontFamily:'Cochin',fontSize:20,color:'#1E1E1E'}}>
              Trách nhiệm công việc
            </Text>
            <Text></Text>
          </View>
          <View style={{padding:20}}>
            <Text style={{fontFamily:'Cochin',fontSize:20,color:'#1E1E1E'}}>
              Kỹ năng và chuyên môn
            </Text>
            <Text></Text>
          </View>
          <View style={{padding:20}}>
            <Text style={{fontFamily:'Cochin',fontSize:20,color:'#1E1E1E'}}>
              Phúc lợi dành cho bạn
            </Text>
            <Text></Text>
          </View>
          <View style={styles.fixToText}>
            <TouchableOpacity>
              <View style={{borderWidth:1,width:100,height:40,justifyContent:'center',borderRadius:10,backgroundColor:'#8081B8',marginLeft:20}}>
                <Text style={{textAlign:'center',fontSize:20,color:"white",fontFamily:'lexend',fontWeight:'bold'}}>
                  Lưu
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
              navigation.navigate("Upload");
            }}>
              <View style={{borderWidth:1,width:130,height:40,justifyContent:'center',borderRadius:10,backgroundColor:'#A87383',marginRight:20}}>
                <Text style={{textAlign:'center',fontSize:20,color:"white",fontFamily:'lexend',fontWeight:'bold'}}>
                  Ứng tuyển
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:16,
  },
  separator: {
    marginVertical: 8,
    marginHorizontal :20,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom:10,
    marginTop:20,
  },
  fixToText: {
    marginTop:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header:{
    flexDirection:'row',
  },
  information:{
    flexDirection:'row',
    marginLeft:20,
    marginTop:20,
    marginRight:20
  }
})