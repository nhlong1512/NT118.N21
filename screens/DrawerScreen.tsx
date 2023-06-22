import React,{useState,useRef} from 'react';
import { Text, View, StyleSheet, SafeAreaView,Image,TouchableOpacity,FlatList,ScrollView,Animated } from 'react-native';
import { TextInput } from "react-native-paper";
import notification from "../assets/icons/notification-icon.png";
import user from "../assets/icons/user.png";
import home from "../assets/icons/home.png";
import news from "../assets/icons/news.png";
import stat from "../assets/icons/stat.png";
import logout from "../assets/icons/logout.png";
import menu from "../assets/icons/menuhome.png";
import closemenu from "../assets/icons/closemenu.png";
const Separator = () => <View style={styles.separator} />;


const DrawerScreen =({navigation}:{navigation:any})=>{
    const [titleText, setTitleText] = useState("Bosh");
    const [currentTab,setCurrentTab] = useState("Home");
    const [showMenu,setShowMenu] = useState(false);

    const offsetValue = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;

    
    return (
        <SafeAreaView style={styles.container}>
            <View style={{justifyContent:'flex-start', padding: 20}}>
                <Image style={{width:70,height:70,marginLeft:16,borderRadius:50}} source={require('../assets/icons/avtuser.jpg')}></Image>
                <Text style={{marginLeft:16,fontSize:25,marginTop:10, color:'white',fontWeight:'bold',fontFamily:'Cochin'}}>Nhi Truong</Text>
                <Separator/>
                <View style={{flexGrow:1}}>
                {
            //Tab Bar Button
                }
                    {TabButton(currentTab, setCurrentTab,"Profile",user)}
                    {TabButton(currentTab, setCurrentTab,"Trang chủ",home)}
                    {TabButton(currentTab, setCurrentTab,"Tin tức",news)}
                    {TabButton(currentTab, setCurrentTab,"Thống kê",stat)}
                    {TabButton(currentTab, setCurrentTab,"Thông báo",notification)}

                </View>
                <Separator/>
                <View>
                {
            //Tab Bar Button
                }
                    {TabButton(currentTab, setCurrentTab,"Đăng xuất",logout)}
                </View>
            </View>
            
        </SafeAreaView>
    );
}
export default DrawerScreen;
const TabButton=(currentTab,setCurrentTab,title,image)=>{
    return (
      <TouchableOpacity onPress={()=>{
        if (title == "Đăng xuất"){
          //Do not stuff...
        }else{
          setCurrentTab(title)
        }
      }}>
        <View style={{
          flexDirection: "row",
          paddingVertical: 8,
          backgroundColor: currentTab == title ? 'white' : 'transparent',
          borderRadius: 10,
          width: 250,
          height: 50,
          alignItems: 'center',
          marginTop: 20,
          marginLeft: 16,
          paddingLeft:16
        }}>
          <Image style={{ width: 30,height:30, 
          tintColor: currentTab == title ? "#5359D1" : "white",
        }} source={image}></Image>
          <Text style={{fontWeight: '600',
          fontSize: 25, marginLeft: 16, fontFamily: 'Cochin',
          color: currentTab == title ? "#5359D1" : "white",
          }}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#9798d6',
        alignItems:'flex-start',
        justifyContent:'flex-start'
        
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding:10,
        borderRadius:10,
        backgroundColor:'#6667AB',
      },
      baseText: {
        fontFamily: 'Cochin',
      
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
      separator: {
        marginVertical: 8,
        marginHorizontal :20,
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom:10,
        marginTop:20,
      },
})