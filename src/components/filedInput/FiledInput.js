import { View, Text, TextInput } from 'react-native'
import React from 'react'

import { MaterialIcons } from '@expo/vector-icons';

import styles from './style'

const FiledInput = ({ label, icon }) => {
    return (
        <View style={styles.filed}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.formInput}>
                <MaterialIcons style={styles.icon} name={icon} size={28} color="#313131" />
                <TextInput style={styles.input} cursorColor='#313131' />
            </View>
        </View>
    )
}

export default FiledInput