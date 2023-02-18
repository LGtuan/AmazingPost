import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

import styles from "./style";
import colors from "../../colors/color";
import IconText from "../iconText/IconText";

const Posts = ({ userId, avatar, nickName, post,showCommentScreen }) => {
  const background = post.background;
  const img = post.img;
  const likes = post.likes;
  console.log(likes);

  const showProfilePeople = () => {
    if (userId !== post.userId) {
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={
              avatar === ""
                ? require("../../images/avatarDefault.png")
                : { uri: avatar }
            }
          />
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
          <TouchableOpacity onPress={()=>{
            showCommentScreen(post.id,likes);
          }} activeOpacity={0.7}>
            <View style={styles.footer1}>
              <IconText
                src={require("../../images/like.png")}
                text={likes.length}
                status="small"
                src2=""
              />
              <IconText
                src={require("../../images/comment.png")}
                text="68"
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
              src={require("../../images/like.png")}
              src2={require("../../images/likeShard.png")}
            />
            <IconText
              text="Comment"
              status="medium"
              src={require("../../images/comment.png")}
              src2={require("../../images/comment.png")}
            />
            <IconText
              text="Share"
              status="medium"
              src={require("../../images/share2.png")}
              src2=""
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Posts;
