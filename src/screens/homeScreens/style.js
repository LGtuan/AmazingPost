import { StyleSheet } from "react-native";

import { Dimensions } from 'react-native'
import { Platform } from 'react-native'
import Constants from 'expo-constants'

import colors from "../../colors/color";

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        height: Platform.OS == 'android' ? screenHeight + Constants.statusBarHeight : screenHeight,
        backgroundColor: colors.color6
    },
    header: {
        backgroundColor: colors.white,
        paddingHorizontal: 12,
    },
    header1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingEnd: 10,
        paddingBottom: 10
    },
    header2: {
        flexDirection: 'row',
        paddingBottom: 5,
    },
    imgHeader: {
        width: 36,
        height: 36,
        borderRadius: 17,
        resizeMode: "contain",
        backgroundColor: colors.color6
    },
    title: {
        color: colors.color4,
        fontFamily: 'AndikaNewBasic',
        fontSize: 28
    },
    searchBtn: {
        backgroundColor: colors.color6,
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    btnPosts: {
        borderRadius: 20,
        borderColor: colors.black,
        borderWidth: 1.8,
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        marginStart: 10,
        paddingStart: 6,
    },
    label: {
        color: colors.black,
        fontSize: 14,
        fontFamily: 'AndikaNewBasic'
    },
    body: {
        flex: 1
    }
})

export default styles;