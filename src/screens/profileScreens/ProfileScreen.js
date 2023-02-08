import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Touchable,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import styles from "./style";
import colors from "../../colors/color";
import Posts from "../../components/posts/Posts";
import LineInfo from "../../components/LineInfo";

const UserApi = require("../../api/UserApi.js");

const ProfileScreen = ({ stackNavigation, userId }) => {
  const [avatar, setAvatar] = useState("");
  const [background, setBackground] = useState("");
  const [nickName, setNickName] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    var user = await UserApi.getUserWithId(userId);
    setAvatar(user.avatar);
    setBackground(user.background);
    setNickName(user.nickName);
  };

  const showEditProfileScreen = () => {
    stackNavigation.navigate("EditProfile",{showEditProfileDetails: showEditProfileDetails});
  };

  const showEditProfileDetails = () => {
    stackNavigation.navigate("EditProfileDetails");
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
          <LineInfo
            iconName="school"
            content="Từng học tại trường THPT Phúc Thọ"
          />
          <LineInfo iconName="place" content="Đến từ Hà Nội" />
          <LineInfo iconName="favorite" content="Độc thân" />
          <LineInfo iconName="more-horiz" content="Xem thông tin của bạn" />
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
