import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";

import { FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./style";
import Posts from "../../components/posts/Posts";
import colors from "../../colors/color";
import IconText from "../../components/iconText/IconText";

import { getUserWithId } from "../../api/UserApi";
import { getAllPost } from "../../api/PostApi";

const HomeScreen = ({ stackNavigation, userId }) => {
  const [isLoading, setIsLoading] = useState();
  const [posts, setPosts] = useState([]);
  const [avatar, setAvatar] = useState("");
  const [type, setType] = useState("user");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    const user = await getUserWithId(userId);
    setAvatar(user.avatar);
    setType(user.type);
    setPosts(await getAllPost());
    setIsLoading(false);
  };

  const showCommentScreen = (postId, likes) => {
    stackNavigation.navigate("Comment", {
      postId: postId,
      likes: likes,
      userId: userId,
    });
  };

  const createPosts = () => {
    stackNavigation.navigate("CreatePost", { userId: userId });
  };

  const search = () => {
    stackNavigation.navigate("Search", { userId: userId });
  };

  const showProfilePeople = (peopleId, userId) => {
    if (peopleId !== userId) {
      stackNavigation.navigate("PeopleProfile", { peopleId: peopleId });
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.header1}>
            <Text style={styles.title}>Amazing Posts</Text>
            <View style={styles.menu}>
              <TouchableOpacity
                onPress={search}
                activeOpacity={0.4}
                style={styles.searchBtn}
              >
                <Ionicons name="search" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          {type === "admin" ? (
            <View style={styles.header2}>
              <Image
                source={
                  avatar === ""
                    ? require("../../images/avatarDefault.png")
                    : { uri: avatar }
                }
                style={styles.imgHeader}
              />
              <TouchableOpacity onPress={createPosts} style={styles.btnPosts}>
                <Text style={styles.label}>What are you thinking?</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <></>
          )}
        </View>
        <View style={styles.body}>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={() => {
                  getData();
                }}
              />
            }
            contentContainerStyle={{ paddingBottom: 120 }}
            showsVerticalScrollIndicator={false}
            data={posts}
            renderItem={({ item, index }) => {
              return (
                <Posts
                  avatar={item.user.avatar}
                  nickName={item.user.nickName}
                  post={item}
                  userId={userId}
                  showCommentScreen={showCommentScreen}
                  showProfilePeople={() => {
                    showProfilePeople(item.userId, userId);
                  }}
                />
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
