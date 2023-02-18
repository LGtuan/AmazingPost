import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconText from "../components/iconText/IconText";

const CommentScreen = ({ navigation, postId, likes }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ flexDirection: "row",alignItems: 'center'}}
        >
          <MaterialIcons name="arrow-back" size={30} />
          <Text style={styles.title}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <IconText
            text="Like"
            status="medium"
            src={require("../images/like.png")}
            src2={require("../images/likeShard.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.body}></View>
    </View>
  );
};

export default CommentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    height: 50,
    justifyContent: 'space-between',
    backgroundColor: "white",
    shadowColor: "black",
    elevation: 5,
    alignItems: 'center',
    paddingHorizontal: 8
  },
  title: {
    fontSize: 20,
    fontFamily: 'AndikaNewBasic',
    paddingBottom: 7,
    paddingStart: 8
  }
});
