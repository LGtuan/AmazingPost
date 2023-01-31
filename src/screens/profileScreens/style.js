import { StyleSheet } from "react-native";

import colors from "../../colors/color";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.color6
    }, 
    box1: {
        height: 430,
        backgroundColor: 'white',
    },
    images: {
        height: 300,
    },
    background: {
        height: 250,
        backgroundColor: 'gray'
    },
    avatarContainer: {
        width: 200,
        height: 200,
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 1,
        bottom: 5,
        start: 10,
        borderRadius: 100,
    },
    avatar: {
        position: 'absolute',
        width: 190,
        height: 190,
        top: 5,
        start: 5,
        zIndex: 1,
        borderRadius: 95
    },
    followContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    text1: {
        fontFamily: 'AndikaNewBasic',
        fontSize: 24
    },
    infoContainer: {
        paddingHorizontal: 14,
        paddingBottom: 20,
    },
    textBold: {
        fontWeight: 'bold',
        fontSize: 15
    },
    btnContainer: {
        height: 35,
        backgroundColor: colors.color4,
        flexDirection: 'row',
        alignSelf: 'baseline',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        paddingHorizontal: 20,
        paddingVertical: 6,
        marginStart: 13
    },
    text2: {
        fontSize: 14,
        color: colors.white,
        fontWeight: 'bold',
        marginStart: 5
    },
    box2: {
        marginTop: 10,
        height: 500,
        backgroundColor: 'white'
    }
})

export default styles;