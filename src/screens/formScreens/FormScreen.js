import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainScreen from '../mainScreens/MainScreen'
import SignUpScreen from '../signUpScreen/SignUpScreen'
import LoginInScreen from '../loginScreens/LoginInScreen'
import { StatusBar } from 'expo-status-bar'
import styles from '../loginScreens/styles'
import FeatureScreen from '../FeatureScreen/FeatureScreen'

const Stack = createNativeStackNavigator();

const FormScreen = () => {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <StatusBar style='auto' />
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='LogIn' component={LoginInScreen} />
                    <Stack.Screen name='SignUp' component={SignUpScreen} />
                    <Stack.Screen name='Main' component={FeatureScreen}/>
                </Stack.Navigator>
            </View>
        </NavigationContainer>
    )
}

export default FormScreen