import {View, StyleSheet, Text, StatusBar, ScrollView} from "react-native";
import SplashImage from './commons/images/splashImage'
import PrimaryButton from "./commons/ui/buttons/primaryButton";
import SecondaryButton from "./commons/ui/buttons/secondaryButton";
import {styles} from "./styles/splash.style";

const Splash=({navigation})=>{
    const handleNavigate=(route)=>{
        navigation.navigate(route)
    }
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
                        <PrimaryButton style={localStyles.localBtn} title='Register' type='smallRed' navigate={handleNavigate} route={'register'}/>
                        <SecondaryButton style={localStyles.localBtn} title='Login' type='smallDark' navigate={handleNavigate} route={'login'} />
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
