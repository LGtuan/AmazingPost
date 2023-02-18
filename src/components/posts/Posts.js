import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import { Ionicons } from "@expo/vector-icons";

import styles from "./style";
import colors from "../../colors/color";
import IconText from "../iconText/IconText";
import { updatePost } from "../../api/PostApi";
import { getUserWithId } from "../../api/UserApi";

const Posts = ({
  userId,
  avatar,
  nickName,
  post,
  showCommentScreen,
  showProfilePeople,
}) => {
  const [isLike, setLike] = useState(false);
  const background = post.background;
  const img = post.img;
  const likes = post.likes;
  const commentCount = post.commentCount;

  useEffect(() => {
    checkLike();
  });

  const checkLike = () => {
    for (let i = 0; i < likes.length; i++) {
      if (likes[i].userId === userId) {
        setLike(true);
        return;
      }
    }
    setLike(false);
  };

  const likeClick = async () => {
    const user = await getUserWithId(userId);
    let check = false;
    for (let i = 0; i < likes.length; i++) {
      if (likes[i].userId === userId) {
        likes.splice(i, 1);
        check = true;
        setLike(false);
        break;
      }
    }
    if (!check) {
      likes.push({
        userId: userId,
        avatar: user.avatar,
        nickName: user.nickName,
        type: user.type,
      });
      setLike(true);
    }
    updatePost(post.id, { likes: likes });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={showProfilePeople}
            style={{ borderRadius: 25 }}
          >
            <Image
              style={styles.avatar}
              source={
                avatar === ""
                  ? require("../../images/avatarDefault.png")
                  : { uri: avatar }
              }
            />
          </TouchableOpacity>
          <View style={styles.viewInfo}>
            <Text style={styles.label1}>{nickName}</Text>
            <Text>2hrs</Text>
          </View>
        </View>
        <View style={styles.content}>
          {img === "" ? (
            background.url === "" ? (
              <Text
                numberOfLines={10}
                style={[styles.label2, { paddingHorizontal: 6 }]}
              >
                {post.content}
              </Text>
            ) : (
              <View>
                <Image
                  style={{ width: "100%", height: 300 }}
                  source={{ uri: background.url }}
                />
                <Text
                  numberOfLines={10}
                  style={{
                    color: background.textColor,
                    width: "100%",
                    height: 300,
                    fontSize: 20,
                    fontFamily: "AndikaNewBasic",
                    padding: 30,
                    position: "absolute",
                    textAlign: "center",
                    textAlignVertical: "center",
                  }}
                >
                  {post.content}
                </Text>
              </View>
            )
          ) : (
            <View>
              <Text
                numberOfLines={10}
                style={[styles.label2, { paddingHorizontal: 6 }]}
              >
                {post.content}
              </Text>
              <Image style={styles.imgContent} source={{ uri: img }} />
            </View>
          )}
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => {
              showCommentScreen(post.id, likes);
            }}
            activeOpacity={0.7}
          >
            <View style={styles.footer1}>
              <IconText
                src={require("../../images/like.png")}
                text={likes.length}
                status="small"
                src2=""
              />
              <IconText
                src={require("../../images/comment.png")}
                text={commentCount}
                status="small"
                src2=""
              />
              <IconText
                src={require("../../images/share2.png")}
                text="12"
                status="small"
                src2=""
              />
            </View>
          </TouchableOpacity>
          <View style={{ height: 1, backgroundColor: colors.color6 }} />
          <View style={styles.footer2}>
            <IconText
              text="Like"
              status="medium"
              src={
                isLike
                  ? require("../../images/likeShard.png")
                  : require("../../images/like.png")
              }
              // src2={require("../../images/likeShard.png")}
              color={isLike ? colors.color4 : colors.color7}
              onPress={likeClick}
            />
            <IconText
              text="Comment"
              status="medium"
              src={require("../../images/comment.png")}
              onPress={() => {
                showCommentScreen(post.id, likes,commentCount);
              }}
            />
            <IconText
              text="Share"
              status="medium"
              src={require("../../images/share2.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Posts;
