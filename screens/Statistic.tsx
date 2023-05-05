import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions
  } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";
// @ts-ignore
import {BarChart} from "react-native-chart-kit";

const Statistic =({navigation}:{navigation:any})=> {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={{ marginTop: 20, marginBottom: 30 }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', fontFamily: 'Cochin', textAlign: 'center' }}>Hi there, Long Nguyen</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <BarChart
                        data={{
                            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                            datasets: [
                                {
                                    data: [20, 45, 28, 80, 99, 43, 50],
                                },
                            ],
                        }}
                        width={Dimensions.get('window').width - 16}
                        height={270}
                        yAxisLabel={'Rs'}
                        chartConfig={{
                            backgroundColor: '#20124d',
                            backgroundGradientFrom: '#dbdbec',
                            backgroundGradientTo: '6667ab',
                            decimalPlaces: 2,
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16,
                                
                            },
                        }}
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                        }} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity>
                        <View style={{ width: 300, marginLeft: 20, marginRight: 20, height: 40, backgroundColor: '#6667AB', borderRadius: 10, justifyContent: 'center',marginTop: 50 }}>
                            <Text style={{ fontFamily: 'Cochin', fontSize: 18, fontWeight: '700', textAlign: 'center', color: 'white' }}>
                            DOANH NGHIỆP
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                    navigation.navigate("TrangChu");
                    }}>
                        <View style={{ width: 300, marginLeft: 20, marginRight: 20, marginTop: 30, height: 40, backgroundColor: '#B25000', borderRadius: 10, justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'Cochin', fontSize: 18, fontWeight: '700', textAlign: 'center', color: "white" }}>
                                TRANG CHỦ
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                    navigation.navigate("Tintuc");
                    }}>
                        <View style={{ width: 300, marginLeft: 20, marginRight: 20, marginTop: 30, height: 40, backgroundColor: '#FFB340', borderRadius: 10, justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'Cochin', fontSize: 18, fontWeight: '700', textAlign: 'center', color: "white" }}>
                                TIN TỨC
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
export default Statistic;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:16,
      },
})
