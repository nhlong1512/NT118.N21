import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const horizontalDATA = [
  {
    id: "job",
    title: "HRSGROUP" + "\n" + "IT",
  },
  {
    id: "job",
    title: "HRSGROUP" + "\n" + "IT",
  },
  {
    id: "job",
    title: "HRSGROUP" + "\n" + "IT",
  },
];

const HomePageScreen = ({ navigation }: { navigation: any }) => {
  const [titleText, setTitleText] = useState("Bạn muốn tìm việc làm ?");
  const bodyText =
    "Bạn muốn tìm kiếm việc làm, nhưng không biết bắt đầu từ đâu. Ở đây chúng tôi có những tin tức hữu ích sẽ giúp bạn có thể tìm kiếm một công việc như mong muốn một cách dễ dàng nhất. Nhấn vào Next để cùng bắt đầu nào !";
  const onPressTitle = () => {
    setTitleText("Bosh");
  };

  const Item = ({ title }: { title: any }) => {
    return (
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Detail");
          }}
        >
          <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text>0 apply</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Drawer");
              }}
            >
              <View style={{ margin: 16 }}>
                <Image
                  style={{ height: 40, width: 40 }}
                  source={require("../assets/icons/menu.png")}
                />
              </View>
            </TouchableOpacity>
            <View style={{ alignItems: "center", marginLeft: -45 }}>
              <Image
                style={{ height: 200 }}
                source={require("../assets/images/logo1.png")}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Find");
            }}
          >
            <View
              style={{
                margin: 16,
                padding: 16,
                backgroundColor: "white",
                borderWidth: 2,
                borderRadius: 10,
                borderColor: "#6667AB",
              }}
            >
              <Text style={{}}>Bạn muốn tìm việc ?</Text>
            </View>
          </TouchableOpacity>
          <ScrollView horizontal={true} style={{ padding: 16 }}>
            <View
              style={{
                flexDirection: "row",
                marginRight: 16,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Info");
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    borderWidth: 1,
                    backgroundColor: "white",
                    borderRadius: 10,
                  }}
                >
                  <Image
                    style={{ width: 350, height: 200, borderRadius: 10 }}
                    source={require("../assets/icons/FPT_Software_Logo.png")}
                  />
                  <Text
                    style={{
                      marginLeft: 16,
                      fontFamily: "Cochin",
                      fontSize: 22,
                      color: "#6667AB",
                      fontWeight: "600",
                    }}
                  >
                    FPT SoftWare
                  </Text>
                  <View style={{ flexDirection: "row", margin: 16 }}>
                  
                    <Text style={{fontSize:15, fontWeight:'500'}}>
                    Tân Xá, Thạch Thất, Hà Nội
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Info");
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    borderWidth: 1,
                    backgroundColor: "white",
                    borderRadius: 10,
                    marginLeft: 16,
                    marginRight: 16,
                  }}
                >
                  <Image
                    style={{ width: 350, height: 200, borderRadius: 10 }}
                    source={require("../assets/icons/groove.jpg.png")}
                  />
                  <Text
                    style={{
                      marginLeft: 16,
                      fontFamily: "Cochin",
                      fontSize: 22,
                      color: "#6667AB",
                      fontWeight: "600",
                    }}
                  >
                    Groove Technology
                  </Text>
                  <View style={{ flexDirection: "row", margin: 16 }}>
                  <Text style={{fontSize:15, fontWeight:'500'}}>
                  Quận 1, Thành phố Hồ Chí Minh
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Info");
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    borderWidth: 1,
                    backgroundColor: "white",
                    borderRadius: 10,
                    marginLeft: 16,
                    marginRight: 16,
                  }}
                >
                  <Image
                    style={{ width: 350, height: 200, borderRadius: 10 }}
                    source={require("../assets/icons/zigexn-ventura-logo.jpg")}
                  />
                  <Text
                    style={{
                      marginLeft: 16,
                      fontFamily: "Cochin",
                      fontSize: 22,
                      color: "#6667AB",
                      fontWeight: "600",
                    }}
                  >
                    ZIGEXN VENTURA
                  </Text>
                  <View style={{ flexDirection: "row", margin: 16 }}>
                  <Text style={{fontSize:15, fontWeight:'500'}}>
                  Bình Thạnh, Thành phố Hồ Chí Minh
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View>
            <Text style={styles.baseText}>
              <Text style={styles.titleText} onPress={onPressTitle}>
                {titleText}
                {"\n"}
              </Text>
              <Text numberOfLines={5} style={{ fontSize: 18 }}>
                {bodyText}
              </Text>
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Tintuc");
            }}
          >
            <View
              style={{
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#6667AB",
                borderRadius: 10,
                margin: 20,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20,
                  fontFamily: "lexend",
                }}
              >
                NEXT
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              borderWidth: 1,
              backgroundColor: "#5254A4",
              borderRadius: 10,
              padding: 16,
              alignItems: "center",
              margin: 16,
            }}
          >
            <View style={{ margin: 10 }}>
              <Text
                style={{
                  color: "white",
                  fontFamily: "Cochin",
                  fontSize: 25,
                  fontWeight: "bold",
                }}
              >
                Find top IT job for you
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("More");
              }}
            >
              <View
                style={{
                  borderWidth: 1,
                  height: 40,
                  width: 250,
                  justifyContent: "center",
                  backgroundColor: "white",
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 15,
                    color: "black",
                    fontFamily: "Cochin",
                    fontWeight: "bold",
                  }}
                >
                  CLICK HERE TO FIND MORE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomePageScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#6667AB",
  },
  baseText: {
    fontFamily: "Cochin",
    paddingLeft: 15,
    paddingRight: 15,
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  jobhot: {
    fontFamily: "Cochin",
    padding: 15,
    fontSize: 25,
    color: "#572C29",
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "#CFCFE1",
    padding: 20,
    margin: 4,
    borderRadius: 10,
    flex: 1,
    flexDirection: "column",
    width: 180,
  },
  title: {
    fontSize: 20,
    fontFamily: "Cochin",
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
