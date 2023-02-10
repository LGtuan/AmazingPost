import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import LineInfo from "../components/LineInfo";
import colors from "../colors/color";

import { getUserWithId } from "../api/UserApi";

const EditProfileScreen = ({ navigation, route }) => {
  const userId = route.params.userId;
  const [avatar, setAvatar] = useState("");
  const [background, setBackground] = useState("");
  const [address,setAddress] = useState("");
  const [school,setSchool] = useState("");
  const [work,setWork] = useState("");
  const [relationship,setRelationship] = useState("");

  useEffect(()=>{
    getData();
  },[]);


  const getData = async()=>{
    const user = await getUserWithId(userId);
    setAvatar(user.avatar);
    setBackground(user.background);
    setAddress(user.info.address.name);
    setSchool(user.info.school.name);
    setWork(user.info.work.name);
    setRelationship(user.info.relationship.name);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.header}>
          <Text style={styles.text1}>Avatar</Text>
          <Text style={styles.text2}>Chỉnh sửa</Text>
        </View>
        <Image
          source={
            avatar === ""
              ? require("../images/avatarDefault.png")
              : { uri: avatar }
          }
          style={styles.avatar}
        />
      </View>
      <View style={styles.backgroundContainer}>
        <View style={styles.header}>
          <Text style={styles.text1}>Background</Text>
          <Text style={styles.text2}>Chỉnh sửa</Text>
        </View>
        <Image
          source={
            background === "" ? require("../images/bg.jpg") : { uri: background }
          }
          resizeMode="cover"
          style={styles.imgBackground}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.header}>
          <Text style={styles.text1}>Details</Text>
          <Text
            style={styles.text2}
            onPress={() => {
              navigation.navigate("EditProfileDetails",{userId: userId});
            }}
          >
            Chỉnh sửa
          </Text>
        </View>
        <LineInfo
          iconName="school"
          content={school===""? "No infomation" : "Từng học tại "+school}
        />
        <LineInfo iconName="place" content={address===""? "No infomation" :"Đến từ " + address} />
        <LineInfo iconName="work" content={work===""? "No infomation" :"Làm việc tại" + work} />
        <LineInfo iconName="favorite" content={relationship===""? "No infomation" : relationship} />
      </View>
    </ScrollView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  avatarContainer: {
    width: "100%",
    height: 230,
    borderBottomWidth: 1.4,
    borderBottomColor: colors.color6,
  },
  backgroundContainer: {
    width: "100%",
    height: 300,
    borderBottomWidth: 1.4,
    borderBottomColor: colors.color6,
  },
  detailsContainer: {
    paddingBottom: 20,
  },
  text1: {
    fontFamily: "AndikaNewBasic",
    fontSize: 18,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text2: {
    color: colors.color4,
    fontFamily: "AndikaNewBasic",
  },
  avatar: {
    width: 190,
    height: 190,
    borderRadius: 95,
    alignSelf: "center",
  },
  imgBackground: {
    width: "100%",
    height: 250,
    backgroundColor: "gray",
    marginTop: 10,
    borderRadius: 16,
  },
});
