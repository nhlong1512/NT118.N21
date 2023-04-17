import React,{useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView,Image,TouchableOpacity,FlatList,ScrollView } from 'react-native';
import { TextInput } from "react-native-paper";
const horizontalDATA =[
  {
    id:'job',
    title:'HRSGROUP'+'\n'+'IT'
  },
  {
    id:'job',
    title:'HRSGROUP'+'\n'+'IT'
  },
  {
    id:'job',
    title:'HRSGROUP'+'\n'+'IT'
  }
];

const HomePageScreen=({ navigation }: { navigation: any })=>{
  const [titleText, setTitleText] = useState("Bosh");
  const bodyText = 'Tellus at sit ante rutrum suspendisse pretium, vitae vel dignissim. Nunc, scelerisque adipiscing condimentum massa dignissim tortor leo lacus. Sapien felis ultrices fringilla nisi sit nibh. Etiam volutpat nisl ornare lorem mus at a, et pulvinar.';
  const onPressTitle = () => {
    setTitleText("Bosh");
  };

  const Item = ({title}:{title:any}) =>{
    return(
      <SafeAreaView>
        <TouchableOpacity onPress={()=>{
            navigation.navigate("Detail");
          }}>
          <View style={styles.item}>
            <Text style={styles.title}>{title}
            </Text>
            <Text>0 apply</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <TouchableOpacity onPress={()=>{
            navigation.navigate("PlSignIn");
          }}>
            <View style={{padding:10}}>
              <Image style={{height:20,width:20,marginTop:10}} source={require('../assets/icons/menu.png')} />
            </View>
          </TouchableOpacity>
          <View style={{justifyContent:'center', marginTop:-90}}>
            <Image style={{height:200,}} source={require('../assets/images/logo1.png')} />
          </View>
          <View>
            <TextInput 
            style={styles.input}
            placeholder="Search"
            placeholderTextColor='#CCCCDC'
            />
          </View>
          <View style={{justifyContent:'center',padding:15,alignItems:'center'}}>
            <Image style={{height:224,borderRadius:10,}} source={require('../assets/icons/job.png')}/>
          </View>
          <View>
            <Text style={styles.baseText}>
              <Text style={styles.titleText} onPress={onPressTitle}>
                {titleText}
                {'\n'}
              </Text>
              <Text numberOfLines={5} style={{fontSize:18}}>
                {bodyText}
              </Text>
            </Text>
          </View>
          <TouchableOpacity onPress={()=>{
            navigation.navigate("ThongKe");
          }}>
            <View style={{height:40,justifyContent:'center',alignItems:'center',backgroundColor:'#6667AB',borderRadius:10,margin:20}}>
              <Text style={{textAlign:'center',color:"white",fontWeight:'bold',fontSize:20,fontFamily:'lexend'}}>
                NEXT
              </Text> 
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.jobhot}>Hot for you</Text>
          </View>
          <View>
            <FlatList
            data={horizontalDATA}
            horizontal={true}
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={item => item.id}
            />
          </View>
          <View style={{borderWidth:1,backgroundColor:'#5254A4',borderRadius:10,padding:15,alignItems:'center',marginTop:20}}>
            <View style={{margin:10}}>
              <Text style={{color:"white",fontFamily:'Cochin',fontSize:25,fontWeight:'bold'}}>
                Find top IT job for you
              </Text>
            </View>
            <TouchableOpacity>
              <View style={{borderWidth:1,height:40,width:250,justifyContent:'center',backgroundColor:"white",borderRadius:10}}>
                <Text style={{textAlign:'center',fontSize:15, color:"black",fontFamily:'Cochin',fontWeight:'bold'}}>
                  CLICK HERE TO FIND MORE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default HomePageScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    backgroundColor:'#6667AB',
  },
  baseText: {
    fontFamily: 'Cochin',
    paddingLeft:15,
    paddingRight:15,
  },
   titleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  jobhot:{
    fontFamily:'Cochin',
    padding:15,
    fontSize:25,
    color:'#572C29',
    fontWeight:'bold'
  },
  item: {
    backgroundColor: '#CFCFE1',
    padding: 20,
    margin: 4,
    borderRadius:10,
    flex:1,
    flexDirection:'column',
    width:180,
  },
  title: {
    fontSize: 20,
    fontFamily:'Cochin',
    fontWeight:'bold'
  },
   button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
