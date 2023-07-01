import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import Bars from '../navigator/Bar'

const ContentNews = ({navigation}:{navigation:any}) => {
  return (
    <SafeAreaView style={{flex:1, padding:16}}>
        <Bars
        headerLeft="return"
        title="NỘI DUNG TIN TỨC"
        onLeftButtonPress={() => navigation.goBack()}
        className="mb-2 font-[700]"
      />
        <ScrollView>
        <View style={{flexDirection:'column',width:'100%'}}>
            <Text style={{fontSize:30, fontWeight:'700',textAlignVertical:'center',textAlign:'justify'}}>
            Locky là gì ? Mã độc có đáng sợ hay không ?
            </Text>
            <Image style={{width:'98%',height:200}} source={require('../assets/icons//madoclocky.jpg')}/>
            <Text style={{fontSize:20, fontWeight:'400',textAlignVertical:'center',textAlign:'justify'}}>
            Mã độc Locky ransomware đã xuất hiện vào năm 2016. Tính ra mã độc này đã có tuổi đời bảy năm. Giống như hầu hết các chủng raansomware khác ra đời cùng thời điểm đó. Mã độc Locky, xuất hiện dưới dạng tệp đính kèm email. Mã độc này được gắn dưới dạng dạng hóa đơn, yêu cầu thanh toán.
            Bài viết này sẽ giải thích tường tận cách hoạt động của Locky. Đưa ra một số cách phòng tránh khi gặp phải loại mã độc này.
            </Text>
            <Text style={{fontSize:20, fontWeight:'400',textAlignVertical:'center',textAlign:'justify'}}>
            Tuy đã được phát hiện và có phương án phòng tránh, tuy nhiên vẫn rất nhiều trường hợp bị dính phải loại mã độc này. Anh em nên chủ động đọc để hiểu tường tận và có cách phòng tránh hiệu quả nha.
            </Text>
            <Text style={{fontSize:20, fontWeight:'700',textAlignVertical:'center',textAlign:'justify'}}>
            1. Locky hoạt động như thế nào?
            </Text>
            <Text style={{fontSize:20, fontWeight:'400',textAlignVertical:'center',textAlign:'justify'}}>
            Mã độc nào muốn hoạt động hoặc tấn công người dùng đều phải có phương án để lây nhiễm. Đối với locky thì vật trung gian lây truyền là email.
            Email ở đây có thể là email cá nhân, email công ty hoặc bất cứ email nào khác. Mã độc Locky thường lây lan qua các tệp đính kèm trong email, được ngụy trang dưới dạng các tài liệu vô hại, chẳng hạn như hóa đơn hoặc sơ yếu lý lịch.
            Khi anh em mở lên và nhấp vào tệp đính kèm, ransomware sẽ được cài đặt trên máy tính và bắt đầu mã hóa các tệp. Việc mã hoá này được thực hiện âm thầm và không để cho nạn nhân có cơ hội phát hiện ra.
            </Text>
            <Text style={{fontSize:20, fontWeight:'700',textAlignVertical:'center',textAlign:'justify'}}>
            2. Ví dụ về cuộc tấn công mã độc locky
            </Text>
            <Text style={{fontSize:20, fontWeight:'400',textAlignVertical:'center',textAlign:'justify'}}>
            Thế giới ghi nhận nhiều cuộc tấn công bằng mã độc Locky. Tuy nhiên để có báo cáo cụ thể cho anh em biết số lượng và mức độ thiệt hại thì đó là các cuộc tấn công vào dịch vụ chăm sóc sức khoẻ tại mỹ.
            Thông thường những kẻ sử dụng locky để tấn công thường chọn các dịch vụ mà người dùng có xác suất mở tệp cao hơn. Dẫn tới số lượng nạn nhân nhiều hơn. Đã ghi nhận một bệnh viện ở Los Angeles phải trả một khoản tiền chuộc lên tới 17.000 đô do bị tấn công bởi mã độ Locky.
            </Text>
            <Image style={{width:'98%',height:200}} source={require('../assets/icons/locky.png')}/>
            
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default ContentNews