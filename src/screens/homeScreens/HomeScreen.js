import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'

import { FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import styles from './style'
import Posts from '../../components/posts/Posts';
import colors from '../../colors/color';
import IconText from '../../components/iconText/IconText';

const HomeScreen = ({ stackNavigation,userId }) => {
  const arr = [1, 2, 3, 4, 5];

  const createPosts = () => {
    stackNavigation.navigate('CreatePost');
  }

  const search = () => {
    stackNavigation.navigate('Search',{userId: userId});
  }

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.header1}>
            <Text style={styles.title}>Amazing Posts</Text>
            <View style={styles.menu}>
              <TouchableOpacity onPress={search} activeOpacity={0.4} style={styles.searchBtn}>
                <Ionicons name="search" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.header2}>
            <Image source={require('../../images/avatarDefault.png')} style={styles.imgHeader} />
            <TouchableOpacity onPress={createPosts} style={styles.btnPosts}>
              <Text style={styles.label}>What are you thinking?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
            contentContainerStyle={{ paddingBottom: 120 }}
            showsVerticalScrollIndicator={false}
            data={arr}
            renderItem={(item) => {
              return <Posts />
            }} />
        </View>
      </View>
    </View>
  )
}

export default HomeScreen