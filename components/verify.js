import {View, Text, StyleSheet, StatusBar} from 'react-native'
import Envelop from "./commons/images/envelop";
import common from "./styles/common";
import VerificationInput from "./commons/ui/inputs/verificationInput";
import PrimaryButton from "./commons/ui/buttons/primaryButton";

const Verify = ({navigation}) =>{
    const handleNavigate=(route)=>{
        navigation.navigate(route)
    }
    return(
        <>
            <View style={styles.container}>
                <StatusBar barStyle={"dark-content"} backgroundColor={'#fff'}/>
                <View style={styles.verifySection}>
                    <Envelop/>
                    <Text style={common.commonStyles.appH1}>
                        Verify your email
                    </Text>
                    <Text style={styles.verifyText}>
                        We have sent a verification email to
                    </Text>
                    <Text style={styles.verifyEmail}>
                        Johnson*****@******.com
                    </Text>
                </View>
                <View>
                    <VerificationInput/>
                </View>
                <View style={styles.verifyButtons}>
                    <PrimaryButton title={'Verify'} large route={'onboarding'} navigate={handleNavigate}/>
                </View>
            </View>
        </>
    )
}

export default Verify;

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:'#fff',
        paddingTop:50,
        flex:1,
    },
    verifySection:{
        alignItems:'center',
        paddingBottom:30,
        paddingTop:100,
    },
    verifyText:{
        color:'#19191C',
        opacity:.7,
        fontSize:18,
        lineHeight:20,
        paddingTop:20,
    },
    verifyEmail:{
        color:'#19191C',
        opacity:.7,
        fontSize:18,
        lineHeight:20,
        paddingTop:4
    },
    verifyButtons:{
        width:'100%',
        paddingTop:80,
        paddingLeft:34,
        paddingRight:34,
    }
})
