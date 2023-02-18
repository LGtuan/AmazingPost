import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../colors/color'

const CommentItem = ({avatar,nickName,content}) => {
  return (
    <View style={styles.container}>
        <Image source={{uri: avatar}} style={styles.avatar}/>
        <View style={styles.contentContainer}>
            <Text style={styles.nickName}>{nickName}</Text>
            <Text style={styles.content}>{content}</Text>
        </View>
    </View>
  )
}

export default CommentItem

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 12,
        paddingHorizontal: 5
    },
    contentContainer: {
        backgroundColor: colors.color6,
        paddingHorizontal: 8,
        paddingBottom: 8,
        borderRadius: 12,
        maxWidth: '85%',

    },
    nickName: {
        fontSize: 16,
        fontFamily:'AndikaNewBasic'
    },
    content: {
        fontSize: 15,
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 30,
        margin: 4
    }
})