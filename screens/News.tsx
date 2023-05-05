

import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,ScrollView
} from 'react-native';
import {
  Card, Button,DataTable, Appbar}from 'react-native-paper';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
   {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',

  },
    {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',

  },

];

const Item = ({ item,onPress, backgroundColor, textColor,}: { item:any,onPress : any , backgroundColor : any , textColor: any ,}) => (
  
  <><TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>

    <Card>

      <Card.Content>

        <Text style={{ fontFamily: 'Cochin', fontSize: 20 }}>CV là gì</Text>
      </Card.Content>

      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    </Card>



  </TouchableOpacity><TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>

      <Card>

        <Card.Content>

          <Text style={{ fontFamily: 'Cochin', fontSize: 20 }}>Cách viết CV</Text>
        </Card.Content>

        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </Card>



    </TouchableOpacity></>
  
);


const News = ({ navigation }: { navigation: any }) => {
  const [selectedId, setSelectedId] = useState();
  const renderItem = ({item}:{item: any}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#6667AB';
    const color = item.id === selectedId ? '#bfbfdf' : 'white';
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };


  return (
    <SafeAreaView style={styles.container}>
    <TouchableOpacity>
      <Appbar.Header>
        <Appbar.BackAction
         onPress={()=>{
            navigation.navigate("TrangChu");
          }} />
<Appbar.Content title="TIN TỨC"></Appbar.Content>        
      </Appbar.Header>
    </TouchableOpacity>
      <ScrollView style={styles.scrollView}>
        <DataTable>
            <DataTable.Header>
              <DataTable.Title
                sortDirection='descending'
              >
                <Text style={{fontFamily:'Cochin', fontSize:20}}>CV</Text>
              </DataTable.Title>
            
              <DataTable.Title numeric><Button 
            onPress={() => {navigation.navigate("Xemthem")}}> Xem thêm </Button></DataTable.Title>
            </DataTable.Header>
          </DataTable>

          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        horizontal={true}
            extraData={selectedId}
          />
          <DataTable>
            <DataTable.Header>
              <DataTable.Title
                sortDirection='descending'
              >
                <Text style={{fontFamily:'Cochin', fontSize:20}}>JOB</Text>
              </DataTable.Title>
            
              <DataTable.Title numeric><Button 
            onPress={() => {navigation.navigate("Xemthem")}}> Xem thêm </Button></DataTable.Title>
            </DataTable.Header>
          </DataTable>
          <FlatList
            data={DATA}
            renderItem={renderItem} 
            keyExtractor={item => item.id}
        horizontal
            extraData={selectedId}
            
          />
            <DataTable>
            <DataTable.Header>
              <DataTable.Title
                sortDirection='descending'
              >
                <Text style={{fontFamily:'Cochin', fontSize:20}}>MORE</Text>
              </DataTable.Title>
            
              <DataTable.Title numeric>
                <Button 
                onPress={() => {navigation.navigate("Xemthem")}}> Xem thêm 
                </Button></DataTable.Title>
            </DataTable.Header>
          </DataTable>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        horizontal
            extraData={selectedId}
            
          />
        </ScrollView>
    </SafeAreaView>
  );
 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 6,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius:5,
  },
  title:{
    
  },
  button:{
    fontSize:20,
    color: 'pink',
  },scrollView: {
    backgroundColor: '#bfbfdf',
    marginHorizontal: 0,
  },
});
export default News;