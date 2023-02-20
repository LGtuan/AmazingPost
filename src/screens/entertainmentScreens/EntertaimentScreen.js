import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { Video } from "expo-av";
import colors from "../../colors/color";
import { Dimensions } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const ScreenWidth = Dimensions.get("screen").width;
const WindowHeight = Dimensions.get("window").height;
const ScreenHeight = Dimensions.get("screen").height;
const BottomBarHeight = ScreenHeight - WindowHeight + 26;
const TitleHeight = 60;

const EntertaimentScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setPlay] = useState(true);

  const videos = [
    {
      source:
        "https://d1afwtdnq7wrem.cloudfront.net/7159/video/29acec85-ff31-458a-b5e6-a004469dfa6f/vd1.mp4",
      content: "",
      title: "",
      song: "",
    },
    {
      source:
        "https://d1afwtdnq7wrem.cloudfront.net/7159/video/7c10ff3e-43c7-4090-8352-10ffa4161e20/vd2.mp4",
      content: "",
      title: "",
      song: "",
    },
    {
      source:
        "https://d1afwtdnq7wrem.cloudfront.net/7159/video/be2fc0e9-5111-4641-9068-4e6158065558/vd3.mp4",
      content: "",
      title: "",
      song: "",
    },
    {
      source:
        "https://d1afwtdnq7wrem.cloudfront.net/7159/video/d3f37b34-c1ee-4730-a339-f0a2fb12b589/vd4.mp4",
      content: "",
      title: "",
      song: "",
    },
    {
      source:
        "https://d1afwtdnq7wrem.cloudfront.net/7159/video/37fb7b21-5fc9-4020-996f-bd7e6a51397f/vd5.mp4",
      content: "",
      title: "",
      song: "",
    },
    {
      source:
        "https://d1afwtdnq7wrem.cloudfront.net/7159/video/ad67a5f7-5fd0-4d65-9e11-7e58b394f7a4/vd6.mp4",
      content: "",
      title: "",
      song: "",
    },
    {
      source:
        "https://d1afwtdnq7wrem.cloudfront.net/7159/video/2780354c-2410-4984-9746-788d06f10c3f/vd7.mp4",
      content: "",
      title: "",
      song: "",
    },
    {
      source:
        "https://d1afwtdnq7wrem.cloudfront.net/7159/video/40793e94-df78-46ab-bc1a-2e341c74a52f/vd8.mp4",
      content: "",
      title: "",
      song: "",
    },
    {
      source:
        "https://d1afwtdnq7wrem.cloudfront.net/7159/video/de7bff7a-18f4-4bc2-8c98-767c63b86b78/vd9.mp4",
      content: "",
      title: "",
      song: "",
    },
    {
      source:
        "https://d1afwtdnq7wrem.cloudfront.net/7159/video/6de83272-6f04-4d78-a05f-04e7bc9d21f0/vd10.mp4",
      content: "",
      title: "",
      song: "",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entertaiment</Text>
      {
        <FlatList
          data={videos}
          keyExtractor={(item) => {
            return item.source;
          }}
          renderItem={({ item, index }) =>
            videoInterface(
              item.content,
              item.source,
              index,
              index === activeIndex,
              isPlaying,
              setPlay
            )
          }
          showsVerticalScrollIndicator={false}
          snapToAlignment="start"
          decelerationRate="fast"
          snapToInterval={WindowHeight - TitleHeight - BottomBarHeight}
          onScroll={(e) => {
            const index = Math.round(
              e.nativeEvent.contentOffset.y /
                (WindowHeight - TitleHeight - BottomBarHeight)
            );
            if (index != activeIndex) {
              setActiveIndex(index);
              setPlay(true);
            }
          }}
        />
      }
    </View>
  );
};

function videoInterface(content, source, index, isActive, isPlaying, setPlay) {
  return (
    <View key={index} style={styles.videoWrapper}>
      <TouchableWithoutFeedback
        onPress={() => {
          setPlay(!isPlaying);
        }}
      >
        <View>
          <Video
            style={styles.video}
            source={{ uri: source }}
            resizeMode="cover"
            isLooping
            shouldPlay={isActive && isPlaying}
          />
          <MaterialIcons
            name="play-arrow"
            size={isPlaying ? 0 : 150}
            color="#1f1a1a95"
            style={{
              position: "absolute",
              left: (ScreenWidth - 150) / 2,
              top: (WindowHeight - BottomBarHeight - TitleHeight - 150) / 2,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
      {/* <Text
        ellipsizeMode='tail'
        numberOfLines={3}
        style={styles.text1}>
        {content}
      </Text> */}
      <View style={styles.bottomView}>
        <View style={styles.contentVideoContainer}>
          <Text style={styles.titleVideo}>Rap</Text>
          <Text style={styles.contentVideo}>This is a rap very good</Text>
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="musical-notes"
              color="white"
              size={20}
              style={{ paddingEnd: 5 }}
            />
            <Text style={styles.contentVideo}>Song #1</Text>
          </View>
        </View>
        <View style={styles.animatedView}>
          <Image
            style={styles.plate}
            source={require("../../images/tiktok.png")}
          />
        </View>
      </View>
      <View style={styles.menuView}>
        <View style={styles.avatarView}>
          <Image
            style={{ width: 45, height: 45, borderRadius: 23 }}
            source={require("../../images/tiktok.png")}
          />
          <View
            style={{
              position: "absolute",
              bottom: -7,
              backgroundColor: "white",
              width: 24,
              height: 24,
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
              paddingStart: 0.6,
            }}
          >
            <Ionicons name="add-circle" size={24} color="#ff00a6" />
          </View>
        </View>
        <View style={styles.itemMenu}>
          <MaterialIcons name="favorite" size={40} color="white"/>
          <Text style={styles.label}>1234</Text>
        </View>
        <View style={styles.itemMenu}>
          <Ionicons name="chatbox-ellipses" size={40} color="white"/>
          <Text style={styles.label}>7362</Text>
        </View>
        <View style={styles.itemMenu}>
          <MaterialIcons name="share" size={40} color="white"/>
          <Text style={styles.label}>890</Text>
        </View>
      </View>
    </View>
  );
}

export default EntertaimentScreen;

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontFamily: "AndikaNewBasic",
    fontSize: 30,
    color: colors.color4,
    paddingStart: 10,
    height: TitleHeight,
  },
  videoWrapper: {
    backgroundColor: colors.black,
    height: WindowHeight - TitleHeight - BottomBarHeight,
  },
  text1: {
    fontFamily: "AndikaNewBasic",
    fontSize: 15,
    paddingHorizontal: 12,
    color: "white",
  },
  bottomView: {
    height: 75,
    position: "absolute",
    bottom: 10,
    width: "100%",
    flexDirection: "row",
  },
  contentVideo: {
    color: "white",
  },
  titleVideo: {
    fontFamily: "AndikaNewBasic",
    color: "white",
  },
  contentVideoContainer: {
    flex: 4.5,
    paddingStart: 5,
    justifyContent: "space-between",
  },
  animatedView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  plate: {
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
  menuView: {
    position: "absolute",
    right: 3,
    top: (ScreenHeight-350)/2,
    alignItems: 'center'
  },
  avatarView: {
    width: 48,
    height: 48,
    backgroundColor: "white",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  itemMenu: {
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 20,
  }
});
