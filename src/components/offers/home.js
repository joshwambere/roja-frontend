import {ScrollView, Text, View} from "react-native";
import {ScaledSheet} from "react-native-size-matters";
import common from "../styles/common";
import Google from "../commons/images/google";
import Round from "../commons/ui/cards/offer";
import {useEffect} from "react";
import {getOffers, getPendingRounds} from "../../store/actions/round";
import {useDispatch, useSelector} from "react-redux";
import Offer from "../commons/ui/cards/offer";

const Home=({navigation})=>{
    const dispatch = useDispatch();
    const offers = useSelector((state)=>state.round.offers);
    const round = navigation.getState().routes[navigation.getState().index].params.round;
    useEffect(()=>{
        dispatch(getPendingRounds());
    },[])
    useEffect(()=>{
        dispatch(getOffers(round.id))
    },[round.id!==undefined])
    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Offers</Text>
                    <View style={common.commonStyles.profile}>
                        <Google/>
                    </View>
                </View>
                <View style={styles.cards}>
                    {
                        offers&&offers.map((item, index) => {
                            return(
                                <Offer key={index} offer={item}/>
                            )
                        })
                    }
                </View>
            </View>
        </ScrollView>
    )
}

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
    }
})
