import { View, Text, StyleSheet, Button, Image, FlatList, TouchableHighlight, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { Video } from 'expo-av';
import colors from '../../colors/color';
import { Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

const EntertaimentScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setPlay] = useState(true)

  const videos = [
    {
      source: 'https://d1afwtdnq7wrem.cloudfront.net/7159/video/1a27513f-2b4e-46db-bf7b-012a440335fe/hacknasa.mp4',
      content: 'Hướng dẫn cách hách Nasa bằng HTML trong 2p',
    },
    {
      source: 'https://d1afwtdnq7wrem.cloudfront.net/7159/video/d7434913-dfb7-4f4e-aabf-9bb9a4fa1c01/anime.mp4',
      content: 'Đây là một bộ phim hoạt hình',
    },
    {
      source: 'https://d1afwtdnq7wrem.cloudfront.net/7159/video/d86603d6-63cd-4070-9e05-f5bf16799607/fullstack.mp4',
      content: 'Hướng dẫn trở thành full stack trong 8 minutes ',
    },
    {
      source: 'https://d1afwtdnq7wrem.cloudfront.net/7159/video/54d42565-a8f3-4000-a65d-cdcb2471d737/autrungtinhnghich.mp4',
      content: 'Ấu trùng tinh nghịch đại chiến robot',
    },
    {
      source: 'https://d1afwtdnq7wrem.cloudfront.net/7159/video/255b4988-d17b-480f-9da8-bc7c7939443b/khamphafpt.mp4',
      content: 'Cùng phóng viên VTV đi tham quan FPT Polytechnich',
    },
    {
      source: 'https://d1afwtdnq7wrem.cloudfront.net/7159/video/158aef6d-06f3-4fd8-a4e3-115e1ef40fe0/lidogi.mp4',
      content: 'Ngày hôm ấy em buông tay anh vì lý do gì remix',
    }
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entertaiment</Text>
      {
        <FlatList
          data={videos}
          keyExtractor={(item) => { return item.source }}
          renderItem={({ item, index }) => videoInterface(item.content, item.source, index, index === activeIndex, isPlaying, setPlay)}
          showsVerticalScrollIndicator={false}
          snapToAlignment='start'
          decelerationRate='fast'
          snapToInterval={ScreenHeight - 147}
          onScroll={e => {
            const index = Math.round(e.nativeEvent.contentOffset.y / (ScreenHeight - 147));
            if (index != activeIndex) {
              setActiveIndex(index);
              setPlay(true);
            }
          }}
        />
      }
    </View>
  )
}

function videoInterface(content, source, index, isActive, isPlaying, setPlay) {
  return (
    <View key={index} style={styles.videoWrapper}>
      <TouchableWithoutFeedback onPress={() => { setPlay(!isPlaying) }}>
        <View>
          <Video
            style={styles.video}
            source={{ uri: source }}
            resizeMode="cover"
            isLooping
            shouldPlay={isActive && isPlaying}
          />
          <MaterialIcons name='play-arrow' size={isPlaying && isActive ? 0 : 150} color='gray' style={{ position: 'absolute', left: (ScreenWidth - 150) / 2, top: (ScreenHeight - 300) / 2 }} />
        </View>
      </TouchableWithoutFeedback>
      <Text
        ellipsizeMode='tail'
        numberOfLines={3}
        style={styles.text1}>
        {content}
      </Text>
    </View>
  )
}

export default EntertaimentScreen

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  title: {
    fontFamily: 'AndikaNewBasic',
    fontSize: 30,
    color: colors.color4,
    marginStart: 10,
    paddingBottom: 20
  },
  videoWrapper: {
    backgroundColor: colors.black,
    paddingBottom: 85,
    height: Dimensions.get("window").height - 147
  },
  text1: {
    fontFamily: 'AndikaNewBasic',
    fontSize: 15,
    paddingHorizontal: 12,
    color: 'white'
  }
})