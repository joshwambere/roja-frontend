import {View, Text, StyleSheet, Pressable, StatusBar} from "react-native";
import Computer from '../components/commons/images/computer';
import common from './styles/common';
import TextInput from "./commons/ui/inputs/textInput";
import PrimaryButton from "./commons/ui/buttons/primaryButton";

const Register = ({navigation}) => {
    const handleNavigate=(route)=>{
        navigation.navigate(route)
    }
    return(
        <View style={styles.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={'#fff'}/>
           <View style={styles.registerBanner}>
               <Computer />
           </View>
            <View style={styles.registerTitle}>
                <Text style={common.commonStyles.appH1}>
                    Create an Account
                </Text>
                <Text style={styles.registerP}>
                    Let’s get you started on the journey to success
                </Text>
            </View>
            <View style={[common.commonStyles.formSmall]}>
                <TextInput style={common.commonStyles.inputSmall} title='Username'/>
                <TextInput style={common.commonStyles.inputSmall} title='Email' email/>
                <TextInput style={common.commonStyles.inputSmall} title='Role'/>
                <TextInput style={common.commonStyles.inputSmall} title='Password' secureTextEntry/>

            </View>
            <View style={styles.homeButtons}>
                <PrimaryButton title={'Register'} navigate={handleNavigate} route={'verify'}/>
            </View>
            <View style={common.commonStyles.bottomLinkView}>
                <Text style={[common.commonStyles.bottomLinkText,common.commonStyles.linkText]}>
                    Already a member
                </Text>
                <Pressable onPress={()=>{navigation.navigate('login')}}>
                    <Text style={[common.commonStyles.linkText,common.commonStyles.linkRed]}>
                        Login now
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Register;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        flex:1,
    },
    registerBanner:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:100,
    },
    registerTitle:{
        justifyContent:'center',
        alignItems:'center',
    },
    registerP:{
        paddingTop:20,
        fontSize:16,
        opacity:0.7,
        color:'#19191C',
        textAlign:'center',
        maxWidth:285,
        letterSpacing:0.5,
    },

    homeButtons:{
        width:'100%',
        paddingRight: 34,
        paddingLeft: 34,
        paddingTop: 50,
    },
})
