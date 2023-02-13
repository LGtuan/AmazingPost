import { View, Text, Image } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons';

import styles from './style'
import colors from '../../colors/color'
import IconText from '../iconText/IconText';

const Posts = ({userId,avatar,nickName,post}) => {

  const showProfilePeople = () => {
    if(userId !== post.userId){
      
    }
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.avatar} source={{uri: avatar}} />
          <View style={styles.viewInfo}>
            <Text style={styles.label1}>{nickName}</Text>
            <Text>2hrs</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text
            numberOfLines={10}
            style={[styles.label2,
            { paddingHorizontal: 6 }]}
          >{post.content}</Text>
          <Image style={styles.imgContent} source={require('../../images/bg.jpg')} />
        </View>
        <View style={styles.footer}>
          <View>
            <View style={styles.footer1}>
              <IconText src={require('../../images/like.png')} text='68' status='small' src2='' />
              <IconText src={require('../../images/share2.png')} text='12' status='small' src2='' />
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: colors.color6 }} />
          <View style={styles.footer2}>
            <IconText text='Like' status='medium' src={require('../../images/like.png')} src2={require('../../images/likeShard.png')} />
            <IconText text='Share' status='medium' src={require('../../images/share2.png')} src2='' />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Posts