import {Image, Text, TouchableOpacity, View} from "react-native";
import {ScaledSheet} from "react-native-size-matters";
import Google from "../commons/images/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useDispatch, useSelector} from "react-redux";
import {authLogout} from "../../store/actions/auth";
import {clearRound} from "../../store/actions/round";
import {clearCompany} from "../../store/actions/company";

const Profile =({navigation})=>{
    const dispatch = useDispatch();
    const error = useSelector((state) => state.auth.error);
    const handelLogout = ()=>{
        dispatch(authLogout());
        dispatch(clearRound());
        dispatch(clearCompany());
        if (!error)
        navigation.navigate('login')

    }
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <View style={styles.profileImage}>
                    <Google/>
                </View>
                <View>
                    <Text>Mohammad reza</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.logout} onPress={handelLogout}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile;

const styles = ScaledSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:'20@s',
    },
    profileImage:{
        paddingHorizontal:'10@s',
        paddingVertical:'10@s',
    },
    profile:{
        alignItems:'center',
    },
    logout:{
        alignItems:'center',
    },
    logoutText:{
        fontSize:'15@s',
        opacity:.9,
    }
})
