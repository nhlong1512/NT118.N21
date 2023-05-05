import React,{useState,useRef} from 'react';
import { Text, View, StyleSheet, SafeAreaView,Image,TouchableOpacity,FlatList,ScrollView,Animated } from 'react-native';
import { TextInput } from "react-native-paper";
import notification from "../assets/icons/notification-icon.png";
import user from "../assets/icons/user.png";
import home from "../assets/icons/home.png";
import news from "../assets/icons/news.png";
import stat from "../assets/icons/stat.png";
import logout from "../assets/icons/logout.png";
import menu from "../assets/icons/menu.png";
import closemenu from "../assets/icons/closemenu.png";

const Separator = () => <View style={styles.separator} />;

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
export default function Home ({navigation}:{navigation:any}){
    const [titleText, setTitleText] = useState("Bosh");
    const [currentTab,setCurrentTab] = useState("Home");
    const [showMenu,setShowMenu] = useState(false);

    const offsetValue = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;

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

            <Animated.View style={{
                flexGrow:1,
                backgroundColor:'white',
                position:'absolute',
                top:0,
                bottom:0,
                left:0,
                right:0,
                paddingHorizontal:15,
                paddingVertical:20,
                borderRadius: showMenu ? 15 : 0,

                transform:[
                  { scale: scaleValue },
                  {translateX: offsetValue}
                ]
            }}>
                <Animated.View style={{
                transform:[{
                translateY: closeButtonOffset
                }]
                }}>
                  <ScrollView>
                    <TouchableOpacity 
                    onPress={()=>{
                      Animated.timing(scaleValue,{
                        toValue: showMenu ? 1 : 0.88,
                        duration: 300,
                        useNativeDriver: true 
                      })
                      .start();
                      
                      Animated.timing(offsetValue,{
                        toValue: showMenu ? 0 : 230,
                        duration: 300,
                        useNativeDriver: true 
                      })
                      .start();

                      Animated.timing(closeButtonOffset,{
                        toValue: !showMenu ? -30 : 0,
                        duration: 300,
                        useNativeDriver: true 
                      })
                      .start();

                      setShowMenu(!showMenu);

                    }}
                    >
                    <Image source={showMenu ? close : menu}
                    style={{
                        width:30,
                        height:30,
                        tintColor:'#6667AB',
                        marginTop:40,
                        alignItems:'flex-start',
                        margin:16

                    }}></Image>
                    </TouchableOpacity>
                    <View style={{justifyContent:'center', marginTop:-90, alignItems:'center'}}>
                        <Image style={{height:200,}} source={require('../assets/images/logo1.png')} />
                    </View>
                    <View style={{alignItems:'center'}}>
                        <TextInput
                        textColor="white"
                        placeholder="Search"
                        placeholderTextColor="white"
                        style={{borderRadius:5,width:400, marginLeft:16,marginRight:16,backgroundColor:"#6667AB"}}
                        >
                        </TextInput>
                    </View>
                    <View style={{justifyContent:'center',padding:15,alignItems:'center',marginLeft:16,marginRight:16}}>
                        <Image style={{height:200,width:400,borderRadius:10,}} source={require('../assets/icons/timviec.png')}/>
                    </View>
                    <View style={{marginLeft:16,marginRight:16}}>
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
                    <View style={{marginLeft:16,marginRight:16}}>
                    <FlatList
                      data={horizontalDATA}
                      horizontal={true}
                      renderItem={({item}) => <Item title={item.title} />}
                      keyExtractor={item => item.id}
                    />
                  </View>
                  <View style={{borderWidth:1,backgroundColor:'#5254A4',borderRadius:10,padding:15,alignItems:'center',marginTop:20,marginLeft:16,marginRight:16}}>
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
                </ScrollView>
                </Animated.View>

            </Animated.View>
        </SafeAreaView>
    );
}

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