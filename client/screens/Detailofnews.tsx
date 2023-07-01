import { View, Text, SafeAreaView, Button, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Appbar, DataTable } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import Bars from '../navigator/Bar';

const NewsUpdate = ({navigation}:{navigation:any}) => {
  return (
    <SafeAreaView style={{flex:1}}>
        <Bars
        headerLeft="return"
        title="TIN TỨC"
        onLeftButtonPress={() => navigation.goBack()}
        className="mb-2 font-[700]"
      />
        <ScrollView className="w-full">
            <View style={{paddingBottom:20}}>
            <View >
            <View style={{flexDirection:'row',width:'100%',padding:16}}>
                <View style={{width:'75%'}}
              >
                    <Text style={{fontFamily:'Cochin',fontSize:20,color:'#6667AB',fontWeight:'700'}}>Tech Blog</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => {
                  navigation.navigate("ContentNews");
                }}>
            <View style={{flexDirection:'column',paddingLeft:16,paddingRight:16,height:320,marginBottom:-50}}>
                
                <View style={{flexDirection:'column', borderWidth:2,borderColor:'#6667AB',width:'100%', padding:5, borderRadius:10,backgroundColor:'white'}}>
                    <Image style={{width:'100%',height:'60%'}} source={require('../assets/icons/locky.png')} />

                    <View style={{flexDirection:'column',width:'95%'}}>
                        <Text numberOfLines={1} style={{marginBottom:10, fontSize:15,fontWeight:'600'}}>
                        Locky là gì ? Mã độc có đáng sợ hay không ?
                        </Text>
                        <Text numberOfLines={2} style={{ fontSize:13,fontWeight:'300'}}>
                        Mã độc Locky ransomware đã xuất hiện vào năm 2016. Tính ra mã độc này đã có tuổi đời bảy năm. Giống như hầu hết các chủng raansomware khác ra đời cùng thời điểm đó. Mã độc Locky, xuất hiện dưới dạng tệp đính kèm email. Mã độc này được gắn dưới dạng dạng hóa đơn, yêu cầu thanh toán.
                        Bài viết này sẽ giải thích tường tận cách hoạt động của Locky. Đưa ra một số cách phòng tránh khi gặp phải loại mã độc này.
                        </Text>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
                  navigation.navigate("ContentNews");
                }}>
            <View style={{flexDirection:'column',paddingLeft:16,paddingRight:16,height:320,marginBottom:-50}}>
                
                <View style={{flexDirection:'column', borderWidth:2,borderColor:'#6667AB',width:'100%', padding:5, borderRadius:10,backgroundColor:'white'}}>
                    <Image style={{width:'100%',height:'60%'}} source={require('../assets/icons/ngonngulaptrinh.jpg')} />

                    <View style={{flexDirection:'column',width:'95%'}}>
                        <Text numberOfLines={1} style={{marginBottom:10, fontSize:15,fontWeight:'600'}}>
                        Có mấy loại ngôn ngữ lập trình ? Loại nào phổ biến nhất ?
                        </Text>
                        <Text numberOfLines={2} style={{ fontSize:13,fontWeight:'300'}}>
                            Ngày nay, ngôn ngữ lập trình đóng vai trò quan trọng và cần thiết trong nhiều khía cạnh. Từ việc xây dựng ứng dụng di động, phát triển trang web, đến việc quản lý dữ liệu, ngôn ngữ lập trình đang góp phần tạo nên sự tiến bộ và sự phát triển của xã hội hiện đại. Tuy nhiên, ngôn ngữ lập trình có đặc điểm phức tạp và đôi khi khá khó hiểu với những ai mới bắt đầu tìm hiểu. Bài viết này sẽ giúp bạn biết được có mấy loại ngôn ngữ lập trình và các ngôn ngữ lập trình phổ biến nhất hiện nay là gì?
                        </Text>
                    </View>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                  navigation.navigate("ContentNews");
                }}>
            <View style={{flexDirection:'column',paddingLeft:16,paddingRight:16,height:320,marginBottom:-50}}>
                
                <View style={{flexDirection:'column', borderWidth:2,borderColor:'#6667AB',width:'100%', padding:5, borderRadius:10,backgroundColor:'white'}}>
                    <Image style={{width:'100%',height:'60%'}} source={require('../assets/icons/ngonngulaptrinh.jpg')} />

                    <View style={{flexDirection:'column',width:'95%'}}>
                        <Text numberOfLines={1} style={{marginBottom:10, fontSize:15,fontWeight:'600'}}>
                        Có mấy loại ngôn ngữ lập trình ? Loại nào phổ biến nhất ?
                        </Text>
                        <Text numberOfLines={2} style={{ fontSize:13,fontWeight:'300'}}>
                            Ngày nay, ngôn ngữ lập trình đóng vai trò quan trọng và cần thiết trong nhiều khía cạnh. Từ việc xây dựng ứng dụng di động, phát triển trang web, đến việc quản lý dữ liệu, ngôn ngữ lập trình đang góp phần tạo nên sự tiến bộ và sự phát triển của xã hội hiện đại. Tuy nhiên, ngôn ngữ lập trình có đặc điểm phức tạp và đôi khi khá khó hiểu với những ai mới bắt đầu tìm hiểu. Bài viết này sẽ giúp bạn biết được có mấy loại ngôn ngữ lập trình và các ngôn ngữ lập trình phổ biến nhất hiện nay là gì?
                        </Text>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
            
          </View>

        </View>
        
        
          
        </ScrollView>
    </SafeAreaView>
  )
}

export default NewsUpdate