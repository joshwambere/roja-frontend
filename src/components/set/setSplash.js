import {StatusBar, Text, View} from "react-native";
import Check from "../commons/images/check";
import SecondaryButton from "../commons/ui/buttons/secondaryButton";
import {ScaledSheet} from "react-native-size-matters";




const SetSplash = ({navigation})=>{
    const handelNavigate =()=>{
        navigation.navigate('companyHome')
    }
    return(
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#A90A0A'} />
            <View style={styles.allSet}>
                <Check />
                <Text style={styles.setTitle}>You are all set</Text>
            </View>
            <SecondaryButton title='Continue' navigate={handelNavigate} />
        </View>
    )
}

export default SetSplash;











const styles = ScaledSheet.create({
    container:{
        backgroundColor:'#A90A0A',
        flex:1,
        paddingHorizontal:'20@s',
    },
    allSet:{
        flex:.93,
        alignItems:'center',
        justifyContent:'center',
    },
    setTitle:{
        color:'#fff',
        fontSize: '24@s',
        fontWeight:'500',
        marginTop:'10@s',
    }
})
