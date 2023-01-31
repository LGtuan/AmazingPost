import { View, Text, TouchableOpacity, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from './styles'
import FiledInput from '../../components/filedInput/FiledInput'
import CustomButton from '../../components/button/CustomButton'
import LogoButton from '../../components/button/LogoButton'

const LoginInScreen = ({ navigation }) => {

    const showSignUpScreen = () => {
        navigation.navigate('SignUp');
    }

    const showMainScreen = () => {
        navigation.navigate('Main');
    }

    return (
        <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 0.8, y: 1 }}
            colors={['#E2FFF1', '#50D0D2']}
            style={styles.logIn}>
            
            <Image style={styles.logo} source={require('../../images/applogo.png')}/>

            <View style={styles.form}>
                <Text style={styles.title}>Sign In</Text>
                <FiledInput label={'Email'} icon={'email'} />
                <FiledInput label={'Password'} icon={'lock'}/>
                <Text style={styles.forgotPass}>Forgot password ?</Text>
                <CustomButton text={'Sign In'} onPress={showMainScreen}/>
                <View style={styles.bottomForm}>
                    <View style={styles.orContainer}>
                        <View style={styles.viewLine} />
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}> Or connect with </Text>
                        <View style={styles.viewLine} />
                    </View>
                    <View style={styles.btnContainer}>
                        <LogoButton src={require('../../images/fb_logo.png')} />
                        <LogoButton src={require('../../images/google_logo.png')} />
                    </View>
                </View>
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.bottomText}>
                    Don't have and account? <Text onPress={showSignUpScreen} style={styles.textSignUp}>Sign Up</Text>
                </Text>
            </View>
        </LinearGradient>
    )
}

export default LoginInScreen