import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import LineInfo from "../components/LineInfo";
import colors from "../colors/color";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Posts from "../components/posts/Posts";

const UserApi = require("../api/UserApi");

import { userId } from "./mainScreens/MainScreen";

const info = {
  name: "",
  show: false,
};

const PeopleProfile = ({ navigation, route }) => {
  const peopleId = route.params.peopleId;

  const data = [1, 2, 3, 4, 5];
  const [avatar, setAvatar] = useState("");
  const [background, setBackground] = useState("");
  const [nickName, setNickName] = useState("");
  const [type, setType] = useState("");

  const [arrFollwer, setArrFollower] = useState([]);
  const [arrfollowing, setArrFollowing] = useState([]);


  const [address, setAddress] = useState(info);
  const [school, setSchool] = useState(info);
  const [work, setWork] = useState(info);
  const [relationship, setRelationship] = useState(info);

  const [iconFollow,setIconFollow] = useState("user-follow");
  const [textFollow,setTextFollow] = useState("Theo dõi");

  useEffect(() => {
    getData();
  }, []);

  const followClick = async() => {
    const arr = arrFollwer;
    const user = await UserApi.getUserWithId(userId);
    if(arr.includes(userId)){
      arr.splice(arr.indexOf(userId),1);
      user.following.splice(user.following.indexOf(peopleId),1);
    }else{
      arr.push(userId);
      user.following.push(peopleId);
    }
    setArrFollower(arr);
    await UserApi.updateInfoUser({follower: arr},peopleId);
    await UserApi.updateInfoUser(user,userId);
    checkFollow(arr);
  }

  const checkFollow = async(arr) => {
    if(arr.includes(userId)){
      setIconFollow("user-following");
      setTextFollow("Đã theo dõi");
    }else{
      setIconFollow("user-follow");
      setTextFollow("Theo dõi");
    }
  }

  const getData = async () => {
    var user = await UserApi.getUserWithId(peopleId);
    setAvatar(user.avatar);
    setBackground(user.background);
    setNickName(user.nickName);
    setType(user.type);

    setWork(user.info.work);
    setAddress(user.info.address);
    setRelationship(user.info.relationship);
    setSchool(user.info.school);

    setArrFollower(user.follower);
    setArrFollowing(user.following);

    checkFollow(user.follower);

    navigation.setOptions({
      title: user.nickName,
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.images}>
          <Image
            source={background === "" ? "gray" : { uri: background }}
            style={styles.background}
          />
          <View style={styles.avatarContainer}>
            <Image
              source={
                avatar === ""
                  ? require("../images/avatarDefault.png")
                  : { uri: avatar }
              }
              style={styles.avatar}
            />
          </View>
          {type == "admin" && (
            <View
              style={{
                width: "100%",
                justifyContent: "flex-end",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialIcons
                name="admin-panel-settings"
                size={30}
                color={colors.color4}
              />
              <Text
                style={[
                  styles.text1,
                  { color: colors.color4, fontSize: 18, padding: 3 },
                ]}
              >
                Admin
              </Text>
            </View>
          )}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.text1}>{nickName}</Text>
          <View style={styles.followContainer}>
            <Text>
              <Text style={styles.textBold}>{arrFollwer.length}</Text> người theo dõi
            </Text>
            <View
              style={{
                width: 5,
                height: 5,
                marginHorizontal: 6,
                borderRadius: 3,
                backgroundColor: "black",
              }}
            />
            <Text>
              <Text style={styles.textBold}>{arrfollowing.length}</Text> đang theo dõi
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btnEditProfile} onPress={()=> followClick()}>
          <SimpleLineIcons name={iconFollow} size={27} color={colors.color4} />
          <Text style={[styles.text2,{marginStart: 8}]}>{textFollow}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box2}>
        <View style={styles.detailsContainer}>
          <Text style={[styles.text1, { fontSize: 18, marginBottom: 5 }]}>
            Chi Tiết
          </Text>
          {school.show && <LineInfo iconName="school" content={school.name} />}
          {work.show && <LineInfo iconName="work" content={work.name} />}
          {address.show && <LineInfo iconName="place" content={address.name} />}
          {relationship.show && (
            <LineInfo iconName="favorite" content={relationship.name} />
          )}
          {!school.show && !work.show && !address.show && !relationship.show && (
            <LineInfo
              iconName="security"
              content={nickName + " does not share any infomation"}
            />
          )}
        </View>
      </View>
      <View style={styles.box3}>
        <Text
          style={[
            styles.text1,
            { fontSize: 18, marginBottom: 5, paddingHorizontal: "4%" },
          ]}
        >
          Danh sách bài viết
        </Text>
        {data.map((item, index) => (
          <Posts key={index} />
        ))}
      </View>
    </ScrollView>
  );
};

export default PeopleProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color6,
  },
  box1: {
    height: 430,
    backgroundColor: "white",
  },
  images: {
    height: 300,
  },
  background: {
    height: 250,
    backgroundColor: "gray",
  },
  avatarContainer: {
    width: 200,
    height: 200,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 1,
    bottom: 5,
    start: 10,
    borderRadius: 100,
  },
  avatar: {
    position: "absolute",
    width: 190,
    height: 190,
    top: 5,
    start: 5,
    zIndex: 1,
    borderRadius: 95,
  },
  followContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  text1: {
    fontFamily: "AndikaNewBasic",
    fontSize: 24,
  },
  infoContainer: {
    width: "94%",
    paddingBottom: 20,
    alignSelf: "center",
  },
  textBold: {
    fontWeight: "bold",
    fontSize: 15,
  },
  btnEditProfile: {
    backgroundColor: colors.color8,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    paddingVertical: 6,
    width: "94%",
  },
  text2: {
    fontSize: 14,
    color: colors.color4,
    fontWeight: "bold",
    marginStart: 5,
  },
  box2: {
    width: "100%",
    marginTop: 10,
    alignSelf: "baseline",
    backgroundColor: "white",
    paddingHorizontal: "3%",
    paddingBottom: 10,
  },
  box3: {
    marginTop: 10,
  },
});
