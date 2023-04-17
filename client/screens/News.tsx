

import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,ScrollView
} from 'react-native';
import {
  Card, Button,DataTable, Appbar}from 'react-native-paper'
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

const Item = ({ item,onPress, backgroundColor, textColor}: { item:any,onPress : any , backgroundColor : any , textColor: any }) => (
  
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
  
    
     <Card>
    
    <Card.Content>
      
      <Text >Card content</Text>
    </Card.Content>

    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  </Card>
  
   

  </TouchableOpacity>
);

const News = ({ navigation }: { navigation: any }) => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}:{item: any}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

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
<Appbar.Header  >
    
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title="TRANG CHỦ" />
    </Appbar.Header>
      <ScrollView style={styles.scrollView}>
        <DataTable>
            <DataTable.Header>
              <DataTable.Title
                sortDirection='descending'
              >
                CV
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
                JOB
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
                Blala
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

  button:{
    fontSize:10,
    color: 'pink',
  },scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 0,
  },
});
export default News;