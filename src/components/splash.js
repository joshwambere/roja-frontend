import {View, StyleSheet, Text, StatusBar} from "react-native";
import SplashImage from './commons/images/splashImage'
import PrimaryButton from "./commons/ui/buttons/primaryButton";
import SecondaryButton from "./commons/ui/buttons/secondaryButton";
import {styles} from "./styles/splash.style";
import {useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import {useSelector} from "react-redux";

const Splash=({navigation})=>{
    const verified = useSelector((state) => state.auth.verified);

    const handelRegister=()=>{
        navigation.navigate('register')
    }
    const handelLogin=()=>{
        navigation.navigate('login')
    }
    useEffect( () => {
        const getToken = async() => {
            const loginData = await  AsyncStorage.getItem('loginData');
            if (loginData) {
                const token = JSON.parse(loginData)
                const role = jwt_decode(token.token?.refreshToken);

                if (verified && role.role === 'ENTREPRENEUR') {
                    navigation.navigate('companyHome');
                }
                if(verified && role.role === 'INVESTOR'){
                    navigation.navigate('investorHome');
                }else{
                    navigation.navigate('login');
                }
            }

        }
        getToken()
    },[]);

    return(

            <View style={styles.container}>
                <StatusBar barStyle={"light-content"} backgroundColor={'#A90A0A'}/>
                <View style={styles.topNavBanner}>
                    <SplashImage />
                </View>
                <View style={styles.bottomNavBanner}>
                    <View style={styles.bottomText}>
                        <Text style={styles.splashH1}>Discover Your Dream Business Partner here</Text>
                        <Text style={styles.splashP}>Explore all of the most exiting  Investment opportunities, based on your terms and choice</Text>
                    </View>
                    <View style={styles.bottomBtns}>
                        <PrimaryButton style={localStyles.localBtn} title='Register' type='smallRed' navigate={handelRegister} route={'register'}/>
                        <SecondaryButton style={localStyles.localBtn} title='Login' type='smallDark' navigate={handelLogin} route={'login'} />
                    </View>
                </View>
            </View>

    )
}
export default Splash;


const localStyles = StyleSheet.create({
    localBtn:{
        flex:.35,
    }
})
