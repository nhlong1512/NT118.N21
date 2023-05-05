import * as React from 'react';
import { Modal, Portal, Text, Button, Provider,Card, Appbar } from 'react-native-paper';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
 
  TouchableOpacity,ScrollView
} from 'react-native';
const Detailofnews = ({ navigation }: { navigation: any }) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <SafeAreaView style={styles.container}>
    <Appbar.Header>
    
      <Appbar.BackAction onPress={() => {navigation.navigate("Tintuc")}} />
      <Appbar.Content title="TIN TỨC" />
    </Appbar.Header>
    
    <Text style={styles.title}> CV</Text>
     <ScrollView style={styles.scrollView}   >
  
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <ScrollView style={styles.scrollView}>
           <Text style={styles. header}>Cách viết CV thành công</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet,{'/n'} consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Image
        style={{
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  }}
        source={{ uri: 'https://picsum.photos/700' }}
        
      />
      </ScrollView >
        </Modal>
      </Portal>
      
        <Card  style={{marginTop: 30}} onPress={showModal}>
    
    <Card.Content>
      
      <Text style={styles. header}>CV là gì</Text>
    </Card.Content>

    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  </Card>
  <Card  style={{marginTop: 30}} onPress={showModal}>
    
    <Card.Content>
      
      <Text style={styles. header}>Cách viết CV thành công</Text>
    </Card.Content>

    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  </Card>
       <Card  style={{marginTop: 30}} onPress={showModal}>
    
    <Card.Content>
      
      <Text style={styles. header}>Card content</Text>
    </Card.Content>

    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  </Card>
      
    </Provider>
     </ScrollView >
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
 
  title: {
    fontSize: 32,
    textAlign:'center',
    fontFamily:'Cochin',
    fontWeight:'500'
  },
  header:{
    fontSize: 25,
    marginBottom:5,
    fontFamily:'Cochin',
    fontWeight:'500'
  },scrollView: {
    marginHorizontal: 10,
    backgroundColor: '#bfbfdf',
  },
  text:{
    fontSize: 20,
    fontFamily:'Cochin',
  },
  
});

export default Detailofnews;