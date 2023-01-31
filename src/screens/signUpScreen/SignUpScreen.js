import { View, Text, Touchable, TouchableHighlight, Image, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FiledInput from '../../components/filedInput/FiledInput'
import CustomButton from '../../components/button/CustomButton'
import LogoButton from '../../components/button/LogoButton'
import styles from './styles'

const SignUpScreen = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  }
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }} end={{ x: 0.8, y: 1 }}
      colors={['#E2FFF1', '#50D0D2']}
      style={styles.signUp}>
      <Pressable style={{ alignSelf: 'baseline' }} onPress={goBack}>
        <View style={styles.gobackContainer}>
          <Image style={styles.imgLogo} source={require('../../images/previous.png')} />
          <Text style={styles.label}>Sign In</Text>
        </View>
      </Pressable>
      <Image style={styles.logo} source={require('../../images/applogo.png')}/>
      <View style={styles.form}>
        <Text style={styles.title}>Sign Up</Text>
        <KeyboardAwareScrollView extraScrollHeight={50}>
          <FiledInput label={'Email'} icon={'email'}/>
          <FiledInput label={'Nick name'} icon={'account-circle'}/>
          <FiledInput label={'Password1'} icon={'lock'}/>
          <FiledInput label={'Password2'} icon={'lock'}/>
          <CustomButton text={'Sign Up'} />
        </KeyboardAwareScrollView>
      </View>
    </LinearGradient>
  )
}

export default SignUpScreen