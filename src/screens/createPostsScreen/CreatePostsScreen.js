import { View, Text, Alert, BackHandler, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../colors/color';
import { StatusBar } from 'expo-status-bar';

const CreatePostsScreen = ({ navigation }) => {
  
  const backAction = () => {
    navigation.goBack();
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.header}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={backAction} style={styles.backBtn}>
            <MaterialIcons name='arrow-back' size={30} color='black' />
          </TouchableOpacity>
          <Text style={{ color: 'black', fontSize: 20, fontFamily: 'AndikaNewBasic', marginStart: 10 }}>Posts Article</Text>
        </View>
        <TouchableOpacity style={styles.postsBtn}>
          <Text style={{ color: colors.white, fontSize: 14, fontWeight: 'bold' }}>Posts</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Image style={styles.avatar} source={require('../../images/avatarDefault.png')} />
          <View style={styles.viewInfo}>
            <Text style={styles.label1}>Lê Gia Tuấn</Text>
            <Text>Publish</Text>
          </View>
        </View>
        <View style={styles.contentBody}>
          <TextInput style={styles.inputBody} placeholder='What are you thinking?' multiline={true} />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.choseBackground}>
          <FlatList

          />
        </View>
        <View style={styles.choseContent}>
          <TouchableOpacity>
            <Ionicons name='images' size={30} color={colors.color9} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='images' size={30} color={colors.color9} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='images' size={30} color={colors.color9} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='images' size={30} color={colors.color9} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default CreatePostsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingEnd: 12,
  },
  backBtn: {
    width: 35,
    height: 35,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  postsBtn: {
    width: 70,
    height: 36,
    backgroundColor: colors.color4,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    borderTopWidth: 1.8,
    borderTopColor: colors.color6,
    flex: 1
  },
  bodyHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  avatar: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    borderRadius: 25,
    backgroundColor: colors.color6,
    margin: 8
  },
  viewInfo: {

  },
  label1: {
    fontFamily: 'AndikaNewBasic',
    fontSize: 17
  },
  contentBody: {
    flex: 5,
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  inputBody: {
    width: '100%',
    height: '100%',
    fontSize: 20,
    fontFamily: 'AndikaNewBasic',
    textAlignVertical: 'top'
  },
  footer: {
    height: 90,
  },
  choseBackground: {
    flex: 1,
  },
  choseContent: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  }
})