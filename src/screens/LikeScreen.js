import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconText from "../components/iconText/IconText";
import PeopleLine from "../components/PeopleLine";

const LikeScreen = ({ navigation, route }) => {
  const likes = route.params.likes;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <MaterialIcons name="arrow-back" size={30} />
          <Text style={styles.title}>Like of post</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <IconText
            text={likes.length}
            status="medium"
            src={require("../images/like.png")}
            src2={require("../images/likeShard.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <FlatList
          contentContainerStyle={{ flex: 1,paddingHorizontal: 6}}
          data={likes}
          renderItem={({ item, index }) => (
              <PeopleLine
                source={{ uri: item.avatar }}
                text={item.nickName}
                size={60}
                type={item.type}
              />
          )}
        />
      </View>
    </View>
  );
};

export default LikeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    backgroundColor: "white",
    shadowColor: "black",
    elevation: 5,
    alignItems: "center",
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 20,
    fontFamily: "AndikaNewBasic",
    paddingBottom: 7,
    paddingStart: 8,
  },
  body: {
    flex: 1,
    backgroundColor: "white",
  },
});
