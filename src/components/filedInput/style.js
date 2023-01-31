import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    filed: {
        marginTop: 10
    },
    label: {
        fontSize: 16,
        fontFamily: 'AndikaNewBasic'
    },
    input: {
        width: '100%',
        borderRadius: 14,
        height: 40,
        backgroundColor: '#F8FBFF',
        borderWidth: 2,
        paddingHorizontal: 34,
        borderColor: '#2E3154',
    },
    icon: {
        position: 'absolute',
        zIndex: 10,
        start: 4
    },
    formInput: {
        justifyContent: 'center'
    }
});

export default styles;