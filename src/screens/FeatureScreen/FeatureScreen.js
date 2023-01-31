import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import MainScreen from '../mainScreens/MainScreen'
import CreatePostsScreen from '../createPostsScreen/CreatePostsScreen'

const FeatureScreen = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name='MainScreen' component={MainScreen} />
                <Stack.Screen options={{headerShown: false}} name='CreatePostsScreen' component={CreatePostsScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default FeatureScreen