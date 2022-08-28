import {Text, View} from "react-native";
import {ScaledSheet} from "react-native-size-matters";
import Google from "../commons/images/google";
import common from "../styles/common";
import Pitch from "../commons/images/pitch";
import ImageUploader from "../commons/ui/inputs/imageUploader";
import PrimaryButton from "../commons/ui/buttons/primaryButton";

const CreatePitch = ({navigation}) => {
    const handleNavigate = () => {
        navigation.navigate('companyHome')
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={common.commonStyles.profile}>
                    <Google />
                </View>
            </View>
            <View style={styles.invest}>
                <View style={styles.banner}>
                    <Pitch/>
                </View>
                <View style={styles.titleSection}>
                    <Text style={styles.title}>Create Investor Pitch</Text>
                    <Text style={styles.text}>Show investors your dream in numbers and hope to secure investment</Text>
                </View>
                <View style={styles.upload}>
                    <ImageUploader />
                </View>
                <View style={styles.bottomBtn}>
                    <PrimaryButton style={styles.button} title={'Continue'} large navigate={handleNavigate} route={'companyDetails'}/>
                </View>
            </View>
        </View>
    )
}

export default CreatePitch;



const styles = ScaledSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
        alignItems:'center',
        paddingHorizontal:'20@s',
        justifyContent:'space-evenly',
    },
    header:{
        paddingTop:'20@s',
        alignItems:'flex-end',
        width:'100%',
    },
    titleSection:{
        alignItems:'center',
        paddingTop:'20@s',
        textAlign:'center',
    },
    title:{
        fontSize:'25@s',
        fontWeight:'bold',
        color:'#000',
        textAlign:'center',
    },
    text:{
        fontSize:'12@s',
        opacity:.6,
        color:'#000',
        textAlign:'center',
    },
    invest:{
      flex:.85,
        width:'100%'
    },
    upload:{
        width:'100%',
    },
    bottomBtn:{
        width:'100%',
        paddingTop:'40@s',
    }

})
