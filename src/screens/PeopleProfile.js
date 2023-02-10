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

const PeopleProfile = ({ navigation, route }) => {
  const data = [1, 2, 3, 4, 5];
  const [avatar, setAvatar] = useState("");
  const [background, setBackground] = useState("");
  const [nickName, setNickName] = useState("");
  const [type, setType] = useState("");
  const peopleId = route.params.peopleId;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    var user = await UserApi.getUserWithId(peopleId);
    setAvatar(user.avatar);
    setBackground(user.background);
    setNickName(user.nickName);
    setType(user.type);
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
          {type=="admin" && <View
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
            <Text style={[styles.text1,{color: colors.color4, fontSize: 18, padding: 3}]}>Admin</Text>
          </View>}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.text1}>{nickName}</Text>
          <View style={styles.followContainer}>
            <Text>
              <Text style={styles.textBold}>23K</Text> người theo dõi
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
              <Text style={styles.textBold}>15</Text> đang theo dõi
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btnEditProfile}>
          <SimpleLineIcons name="user-follow" size={22} color={colors.color4} />
          <Text style={styles.text2}>Theo dõi</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box2}>
        <View style={styles.detailsContainer}>
          <Text style={[styles.text1, { fontSize: 18, marginBottom: 5 }]}>
            Chi Tiết
          </Text>
          <LineInfo
            iconName="school"
            content="Từng học tại trường THPT Phúc Thọ"
          />
          <LineInfo iconName="place" content="Đến từ Hà Nội" />
          <LineInfo iconName="favorite" content="Độc thân" />
          <LineInfo iconName="more-horiz" content="Xem thông tin của bạn" />
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
    height: 35,
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
