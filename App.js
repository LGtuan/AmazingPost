import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FormScreen from './src/screens/formScreens/FormScreen';
import SplashScreen from './src/screens/splashScreens/SplashScreen';

import { useState } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
    clearTimeout(this);
  }, 3000);

  if (isLoading) {
    return (
      <SplashScreen />
    )
  }
  return (
    <FormScreen />
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
