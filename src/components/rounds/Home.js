import {Pressable, ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import common from "../styles/common";
import Google from "../commons/images/google";
import {ScaledSheet} from "react-native-size-matters";
import Round from "../commons/ui/cards/round";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getRounds} from "../../store/actions/round";
import {convertDate} from "../../shared/utility";
import NotFound from "../commons/images/notFOund";



const Home = ({navigation}) => {
    const dispatch = useDispatch();
    const rounds = useSelector((state) => state.round.rounds);
    const handelNavigate = () => {
        navigation.navigate('createRound');
    }
    useEffect(() => {
        dispatch(getRounds());
    } , []);
    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <StatusBar barStyle={"dark-content"} backgroundColor={'#fff'}/>
                <View style={styles.header}>
                    <Text style={styles.title}>Google Inc</Text>
                    <View style={common.commonStyles.profile}>
                        <Google/>
                    </View>
                </View>
                <View style={styles.banner}>
                    <View style={styles.bannerHeader}>
                        <Text style={styles.bannerHeaderTitle}>Valued {rounds && rounds.length>0?convertDate(rounds.slice(-1)[0].createdAt):null}</Text>
                        <TouchableOpacity style={styles.roundBtn} onPress={handelNavigate}>
                            <Text style={styles.roundText}>New Round</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.bannerText}>RWF {rounds&&rounds.length>0? rounds.slice(-1)[0].valuation:null}</Text>
                    </View>
                </View>
                <View style={styles.cards}>
                    <Text style={styles.recents}>Recent Rounds</Text>
                    <View style={styles.round}>
                        {
                            rounds && rounds.map((round, index) => {
                                return(
                                    <TouchableOpacity key={index} onPress={()=>{round.status==='PENDING'?navigation.navigate('offers',{round:round}):null}}>
                                        <Round key={index} round={round}/>
                                    </TouchableOpacity>
                                )
                            })

                        }
                        {
                            !rounds||rounds.length===0?
                                <View style={styles.notFOund}>
                                    <NotFound/>
                                    <Text  style={styles.notFound}>No rounds has been created yet</Text>
                                </View>
                                :null
                        }
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};
export default Home;

const styles = ScaledSheet.create({
    container:{
        backgroundColor:'#fff',
        minHeight:'100%',
        paddingHorizontal:'20@s',
    },
    header:{
        justifyContent:'space-between',
        paddingVertical:'12@s',
        alignItems:'center',
        flexDirection:'row',
    },
    title:{
        fontWeight:'500',
        fontSize:'22@s',
    },
    banner:{
        backgroundColor:'#A90A0A',
        borderRadius:'10@s',
        paddingVertical:'12@s',
        paddingHorizontal:'20@s',
        minHeight:'100@s',
        marginTop:'10@s',
    },
    bannerHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    bannerHeaderTitle:{
        color:'#fff',
        fontSize:'14@s',
        opacity:.8,
        fontWeight:'400',
    },
    roundBtn:{
        backgroundColor:'#fff',
        paddingVertical:'5@s',
        paddingHorizontal:'10@s',
        borderRadius:'25@s',
    },
    roundText:{
        fontWeight:'500',
        color:'#A90A0A',
        fontSize:'12@s',
    },
    bannerText:{
        color:'#fff',
        fontSize:'22@s',
        fontWeight:'500',
        paddingTop:'15@s',
        paddingBottom:'15@s',
    },
    cards:{
        paddingTop:'20@s',

    },
    recents:{
        fontSize:'18@s',
        fontWeight:'500',
        color:'#000',
    },
    notFOund:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        paddingTop:'30@s',
    },
    notFound:{
        paddingTop:'20@s',
        fontSize:'16@s',
        opacity:.5,

    }
})
