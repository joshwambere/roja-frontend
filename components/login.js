import {StatusBar, Text, View, StyleSheet, Pressable} from "react-native";
import Percentage from '../components/commons/images/percentage';
import TextInput from '../components/commons/ui/inputs/textInput';
import PrimaryButton from '../components/commons/ui/buttons/primaryButton';
import common from './styles/common';

const Login = ({navigation})=>{
    const handleNavigate=(route)=>{
        navigation.navigate(route)
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={'#fff'}/>
            <View style={styles.homeBanner}>
                <Percentage />
                <View style={styles.helloBanner}>
                    <Text style={common.commonStyles.appH1}>Hello Again</Text>
                    <Text style={styles.homeP}>Have you Share of the economy here</Text>
                </View>
                <View style={common.commonStyles.form}>
                    <TextInput style={common.commonStyles.input} title='Username' email/>
                    <TextInput style={common.commonStyles.input} title='Password' secureTextEntry/>
                </View>
                <View style={styles.homeButtons}>
                    <PrimaryButton title={'Login'} large navigate={handleNavigate} route={'verify'}/>
                </View>
                <View style={styles.registerNow}>
                    <Text style={styles.registerText}>
                        Not a member
                    </Text>
                    <Pressable onPress={()=>{navigation.navigate('register')}}>
                        <Text style={[styles.registerText,styles.registerNowLink]}>
                            Register now
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default  Login;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',

    },
    homeBanner:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:100,
    },
    helloBanner:{
      display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    homeP:{
        fontSize: 18,
        lineHeight: 20,
        opacity: 0.7,
        maxWidth: 185,
        textAlign: "center",
        paddingTop: 18,
        letterSpacing: 0.4,

    },
    homeButtons:{
        width:'100%',
        paddingRight: 34,
        paddingLeft: 34,
        paddingTop: 50,
    },
    registerNow:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:58,

    },
    registerNowLink:{
        color:'#A90A0A',
        paddingLeft:5,
    },
    registerText:{
        fontSize:18,
    }


})
