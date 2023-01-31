import { View, Text, Image, TouchableOpacity, Touchable, ScrollView } from 'react-native'
import React from 'react'

import styles from './style'
const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.images}>
          <Image style={styles.background} />
          <View style={styles.avatarContainer}>
            <Image source={require('../../images/avatarDefault.png')} style={styles.avatar} />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.text1}>Lê Gia Tuấn</Text>
          <View style={styles.followContainer}>
            <Text><Text style={styles.textBold}>23K</Text> người theo dõi</Text>
            <View style={{width: 5,height: 5,marginHorizontal: 6,borderRadius: 3,backgroundColor: 'black'}}/>
            <Text><Text style={styles.textBold}>15</Text> đang theo dõi</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btnContainer}>
            <Image source={require('../../images/postsAdd.png')}/>
            <Text style={styles.text2}>Thêm bài viết mới</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.box2}>
          <View style={styles.detailsContainer}>
            
          </View>
      </View>
    </ScrollView>
  )
}

export default ProfileScreen