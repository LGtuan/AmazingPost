import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import styles from "./style";
import colors from "../../colors/color";
import Posts from "../../components/posts/Posts";
import LineInfo from "../../components/LineInfo";

const UserApi = require("../../api/UserApi.js");

const info = {
  name: "",
  show: false,
};

const ProfileScreen = ({ stackNavigation, userId }) => {
  const [avatar, setAvatar] = useState("");
  const [background, setBackground] = useState("");
  const [nickName, setNickName] = useState("");
  const [type, setType] = useState("");
  const [follower, setFollower] = useState(0);
  const [following, setFollowing] = useState(0);

  const [address, setAddress] = useState(info);
  const [school, setSchool] = useState(info);
  const [work, setWork] = useState(info);
  const [relationship, setRelationship] = useState(info);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    var user = await UserApi.getUserWithId(userId);
    setAvatar(user.avatar);
    setBackground(user.background);
    setNickName(user.nickName);
    setFollower(user.follower.length);
    setFollowing(user.following.length);
    setType(user.type);

    setWork(user.info.work);
    setAddress(user.info.address);
    setRelationship(user.info.relationship);
    setSchool(user.info.school);
  };

  const showEditProfileScreen = () => {
    stackNavigation.navigate("EditProfile", { userId: userId });
  };

  const showEditProfileDetails = () => {
    stackNavigation.navigate("EditProfileDetails", { userId: userId });
  };

  const data = [1, 2, 3, 4, 5];

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
                  ? require("../../images/avatarDefault.png")
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
              <Text style={styles.textBold}>{follower}</Text> người theo dõi
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
              <Text style={styles.textBold}>{following}</Text> đang theo dõi
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={showEditProfileScreen}
          style={styles.btnEditProfile}
        >
          <MaterialIcons name="edit" size={22} color={colors.black} />
          <Text style={styles.text2}>Chỉnh sửa trang cá nhân</Text>
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
              content={"You are not share any infomation"}
            />
          )}
        </View>
        <TouchableOpacity
          onPress={showEditProfileDetails}
          style={[
            styles.btnEditProfile,
            { backgroundColor: colors.color8, width: "100%", marginTop: 10 },
          ]}
        >
          <Text style={[styles.text2, { color: colors.color4 }]}>
            Chỉnh sửa thông tin và chi tiết công khai
          </Text>
        </TouchableOpacity>
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

export default ProfileScreen;
