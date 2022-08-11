import {View, StyleSheet, Text, StatusBar} from "react-native";
import SplashImage from './commons/images/splashImage'
import PrimaryButton from "./commons/ui/buttons/primaryButton";
import SecondaryButton from "./commons/ui/buttons/secondaryButton";

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
                <Text style={styles.splashH1}>Discover Your Dream Business Partner here</Text>
                <Text style={styles.splashP}>Explore all of the most exiting  Investment opportunities, based on your terms and choice</Text>
                <View style={styles.bottomBtns}>
                    <PrimaryButton title='Register' type='smallRed' navigate={handleNavigate} route={'register'}/>
                    <SecondaryButton title='Login' type='smallDark' navigate={handleNavigate} route={'login'} />
                </View>
            </View>
        </View>
    )
}
export default Splash;
const styles = StyleSheet.create({
    container:{
        flex:1,
        display:'flex',
        flexDirection:'column',

    },
    topNavBanner:{
        flex:2,
        backgroundColor:'#A90A0A',
        paddingTop:35,
        paddingLeft:15,
        paddingRight:15,
        borderBottomLeftRadius:35,
        borderBottomRightRadius:35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:2
    },
    bottomNavBanner:{
        flex:2,
        backgroundColor:'#fff',
        alignItems: 'center'
    },
    splashH1:{
        fontWeight: '700',
        fontSize: 36,
        textAlign: "center",
        maxWidth: 345,
        paddingTop: 40,
        color:'#19191C',
        lineHeight: 42,
    },
    splashP:{
        maxWidth:340,
        fontWeight:'400',
        textAlign:'center',
        fontSize:18,
        color:'#19191C',
        opacity:.6,
        marginTop: 24,
        lineHeight:24
    },
    bottomBtns:{
        width:'100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop:'auto',
        paddingBottom:32,
        paddingRight: 20,
        paddingLeft:20,
    }

})
