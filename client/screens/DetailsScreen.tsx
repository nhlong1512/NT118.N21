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
              navigation.navigate("TrangChu");
            }}>
            <View style={{alignItems:'flex-start', margin:16}} className="bg-[#6667AB] flex flex-row justify-center items-center py-[4px] px-[14px] rounded-[10px]">
              <Image source={require('../assets/icons/arrow_back.png')}/>
            </View>
          </TouchableOpacity> 
          <View style={{marginBottom:25,marginTop:16,marginLeft:20}}>
            <Text style={{textAlign:'center',color:'#6667AB',fontWeight:'bold',fontSize:25,}}>
              CHI TIẾT CÔNG VIỆC
            </Text>
          </View>
          </View>
          <View style={{alignItems:'center',}}>
            <Image source={require('../assets/icons/company.png')}/>
          </View>
          <View style={{marginTop:20,marginLeft:16,marginRight:16}}>
            <Text style={{textAlign:'center',fontFamily:'Cochin',fontSize:25,color:'#1E1E1E',fontWeight:'bold'}}>
              Senior Java Backend Developer
            </Text>
          </View>
          <Separator />
          <View style={{marginLeft:20,marginRight:20}}>
            <Text style={{fontFamily:'Cochin',fontSize:22,color:'#1E1E1E'}}>
              Thông tin
            </Text>
          </View>
          <View style={styles.information}>
            <View>
              <Image source={require('../assets/icons/location.png')}/>
            </View>
            <View style={{marginLeft:10,marginRight:20}}>
              <Text style={{fontFamily:'Cochin',fontSize:19,color:'#1E1E1E'}}>
                Anna building, QTSC, Phường Tân Chánh Hiệp, Quận 12, Thành phố Hồ Chí Minh
              </Text>
            </View>
          </View>
          <View style={styles.information}>
            <View>
              <Image source={require('../assets/icons/style.png')}/>
            </View>
            <View style={{marginLeft:10,marginTop:10}}>
              <Text style={{fontFamily:'Cochin',fontSize:19,color:'#1E1E1E'}}>
                Full-Time
              </Text>
            </View>
          </View>
          <View style={styles.information}>
            <View>
              <Image source={require('../assets/icons/talk.png')}/>
            </View>
            <View style={{marginLeft:10,marginTop:10}}>
              <Text style={{fontFamily:'Cochin',fontSize:19,color:'#1E1E1E'}}>
                Thảo luận
              </Text>
            </View>
          </View>
          <View style={styles.information}>
            <View>
              <Image source={require('../assets/icons/experience.png')}/>
            </View>
            <View style={{marginLeft:10,marginTop:10}}>
              <Text style={{fontFamily:'Cochin',fontSize:19,color:'#1E1E1E'}}>
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
            <TouchableOpacity
            onPress={()=>{
              navigation.navigate("DeleteJ");
            }}
            >
              <View style={{width:130,height:40,justifyContent:'center',borderRadius:10,backgroundColor:'#8081B8',marginLeft:20}}>
                <Text style={{textAlign:'center',fontSize:24,color:"white",fontFamily:'Cochin',fontWeight:'bold'}}>
                  Lưu
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
              navigation.navigate("Upload");
            }}>
              <View style={{width:130,height:40,justifyContent:'center',borderRadius:10,backgroundColor:'#A87383',marginRight:20}}>
                <Text style={{textAlign:'center',fontSize:24,color:"white",fontFamily:'Cochin',fontWeight:'bold'}}>
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