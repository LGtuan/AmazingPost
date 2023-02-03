import { View, Text, Image, TouchableOpacity, Touchable, ScrollView, FlatList } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import styles from './style'
import colors from '../../colors/color'
import Posts from '../../components/posts/Posts'

const ProfileScreen = () => {

  const data = [1,2,3,4,5];

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
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
            <View style={{ width: 5, height: 5, marginHorizontal: 6, borderRadius: 3, backgroundColor: 'black' }} />
            <Text><Text style={styles.textBold}>15</Text> đang theo dõi</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btnEditProfile}>
          <MaterialIcons name='edit' size={22} color={colors.black} />
          <Text style={styles.text2}>Chỉnh sửa trang cá nhân</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box2}>
        <View style={styles.detailsContainer}>
          <Text style={[styles.text1, { fontSize: 18, marginBottom: 5 }]}>Chi Tiết</Text>
          {lineInfoComponent('school', 'Từng học tại trường THPT Phúc Thọ')}
          {lineInfoComponent('place', 'Đến từ Hà Nội')}
          {lineInfoComponent('favorite', 'Độc thân')}
          {lineInfoComponent('more-horiz', 'Xem thông tin của bạn')}
        </View>
        <TouchableOpacity style={[styles.btnEditProfile, { backgroundColor: colors.color8, width: '100%', marginTop: 10 }]}>
          <Text style={[styles.text2, { color: colors.color4 }]}>Chỉnh sửa thông tin và chi tiết công khai</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box3}>
        <Text style={[styles.text1, { fontSize: 18, marginBottom: 5 ,paddingHorizontal: '4%'}]}>Danh sách bài viết</Text>
        <FlatList showsVerticalScrollIndicator={false} style={{backgroundColor: colors.color6,paddingBottom: 20}}
          data={data}
          renderItem ={()=> <Posts/>}
        />
      </View>
    </ScrollView>
  )
}

function lineInfoComponent(iconName, content) {
  return (
    <View style={{ flexDirection: 'row', paddingVertical: 4, alignItems: 'center' }}>
      <MaterialIcons name={iconName} size={26} color={colors.color7} />
      <Text style={[styles.text2, { color: colors.color7, fontSize: 15, marginStart: 10 }]}>{content}</Text>
    </View>
  )
}

export default ProfileScreen