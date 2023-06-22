import {
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    View,
    ScrollView,
  } from 'react-native';
  import { StatusBar } from "expo-status-bar";
  import { Button, Checkbox } from "react-native-paper";
  const Separator = () => <View style={styles.separator} />;

  const AddJobs = ({ navigation }: { navigation: any }) => {
  return (
    <ScrollView>
    <View style={{marginTop:40}} className="flex-1 px-[20px] pt-[25px] flex justify-between mb-[25px]">
   <View style={styles.header}>
        <TouchableOpacity
         onPress={()=>{
                navigation.navigate("");
              }}
       >
          <View style={{alignItems:'flex-start', margin:16}} className="bg-[#6667AB] flex flex-row justify-center items-center py-[4px] px-[14px] rounded-[10px]">
              <Image  source={require("../../assets/icons/arrow_back.png")} />
            </View>
        </TouchableOpacity>
        <Text style={styles.title}>THÊM VIỆC LÀM</Text>
        <View style={{ width: 50 }} />
      </View>
      <TouchableOpacity>
      <View style={styles.iconWrapper}>
             </View>
      </TouchableOpacity>
            <TouchableOpacity>
    <Text style={styles.labelbel}>TÊN VIỆC LÀM</Text>
          </TouchableOpacity>
      <Separator />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>THÔNG TIN</Text>
        <TextInput
          style={styles.input}
          placeholder="Địa chỉ"
        />
        <TextInput
          style={styles.input}
          placeholder="Thời gian"
        />
        <TextInput
          style={styles.input}
          placeholder="Lương"
        />
        <TextInput
          style={styles.input}
          placeholder="Kinh nghiệm"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>MÔ TẢ CÔNG VIỆC</Text>
        <TextInput
          style={styles.inputto}
          placeholder="Your text..."
        />
      </View>
       <View style={styles.inputContainer}>
        <Text style={styles.label}>TRÁCH NHIỆM CÔNG VIỆC</Text>
        <TextInput
          style={styles.inputto}
          placeholder="Your text..."
        />
      </View>
       <View style={styles.inputContainer}>
        <Text style={styles.label}>KỸ NĂNG VÀ CHUYÊN MÔN</Text>
        <TextInput
          style={styles.inputto}
          placeholder="Your text..."
        />
      </View>
      <View>
      <TouchableOpacity
            onPress={()=>{
              navigation.navigate("AddSuccess");
            }}
            >
              <View style={{width:130,height:40,justifyContent:'center',borderRadius:10,backgroundColor:'#6667AB',marginLeft:20}}>
                <Text style={{textAlign:'center',fontSize:24,color:"white",fontFamily:'Cochin',fontWeight:'bold'}}>
                  THÊM
                </Text>
              </View>
            </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
  }
  
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefffe',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
    paddingTop: 15,
  },
    title: {
    color:'#6767aa',
    fontSize: 25,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%'
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color:'#1d2363',
    fontWeight: 'bold',
  
  },
  labelbel: {
    fontSize: 24,
    marginBottom: 5,
    color:'#1d2363',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#bebfdd',
    borderRadius: 5,
    padding: 10,
    fontSize: 10,
    color:'#7c7c8e',
    marginVertical: 8,
  },
  inputto: {
    backgroundColor: '#bebfdd',
    borderRadius: 5,
    fontSize: 10,
    color:'#7c7c8e',
    marginVertical: 8,
    height:100,
    paddingHorizontal:10,
  },
   separator: {
    marginVertical: 16,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  iconWrapper:{
    width:66,
    height:66,
    background:'pink',
    borderRadius:66,
    marginBottom: 15,
    alignSelf: 'center',
  },
  scrollview:{
    marginHorizontal:16,
  },
  
  });
  export default AddJobs;