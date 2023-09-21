import {ScaledSheet} from "react-native-size-matters";
import {Text, TouchableOpacity, View} from "react-native";
import Up from "../../images/up";
import {convertDate, convertNumbers} from "../../../../shared/utility";
import {useDispatch} from "react-redux";
import {acceptOffer, rejectOffer} from "../../../../store/actions/round";


const Offer = (offer) => {
    const dispatch = useDispatch();

    const handelAcceptOrReject =(id, action)=>{
        if (action==='ACCEPT'){
            dispatch(acceptOffer(id))

        }
        if (action==='REJECT'){
            dispatch(rejectOffer(id))
        }
    }
    return (
        <View style={styles.round}>
            <View style={styles.seedHolder}>
                <View style={styles.iconPloceholder}>
                    <Up/>
                </View>
                <View style={styles.seedDate}>
                    <Text style={styles.roundText}>{offer.offer.user_id.name}</Text>
                    <View style={styles.valuation}>
                        <Text style={styles.dateText}>Valuation: {convertNumbers(offer.offer.valuation)}</Text>
                        <Text style={[styles.dateTextValuation,styles.dateText]}>offer: {convertNumbers(offer.offer.amount)}</Text>
                    </View>
                </View>
            </View>
            {
                offer.offer.status==='PENDING'?

                <View>
                    <TouchableOpacity
                        style={styles.roundBtnAccept}
                        onPress={()=>handelAcceptOrReject(offer.offer.id, 'ACCEPT')}
                    >
                     <Text style={styles.acceptText}>Accept</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.roundBtnReject}
                        onPress={()=>handelAcceptOrReject(offer.offer.id,'REJECT')}
                    >
                     <Text style={styles.rejectText}>Reject</Text>
                    </TouchableOpacity>
                </View>
                : <Text style={styles.statusText}>{offer.offer.status}</Text>

            }
        </View>
    )
}

export default Offer;


const styles = ScaledSheet.create({
    round:{
        borderRadius:'10@s',
        width:'100%',
        borderWidth:'1@s',
        borderColor:'#EDEFF1',
        flexDirection:'row',
        minHeight:'70@s',
        justifyContent:'space-between',
        paddingHorizontal:'10@s',
        alignItems:'center',
        marginBottom:'10@s',
    },
    dateText:{
        fontSize:'12@s',
        opacity:.8,
        marginTop:'5@s',
        fontWeight:'500',
    },
    seedHolder:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    seedDate:{
        paddingHorizontal:'20@s',
    },
    iconPloceholder:{
        backgroundColor:'rgba(169, 10, 10, 0.17)',
        width:'40@s',
        height:'40@s',
        borderRadius:'20@s',
        alignItems:'center',
        justifyContent:'center',
    },
    roundText:{
        fontSize:'12@s',
        fontWeight:'500',
        textTransform:'capitalize',
    },
    roundTextAmount:{
        fontSize:'17@s',
        fontWeight:'500',
        color:'#A90A0A',
    },
    valuation:{
      flexDirection:'row',
    },
    roundBtnAccept:{
        backgroundColor:'rgb(4,185,11)',
        paddingHorizontal:'15@s',
        paddingVertical:'2@s',
        borderRadius:'3@s',
        marginBottom:'10@s',
    },
    acceptText:{
        fontSize:'12@s',
        fontWeight:'500',
        color:'#FFF',
    },
    statusText:{
        fontSize:'12@s',
        fontWeight:'500',
        color:'#A90A0A',
    },
    roundBtnReject:{
        backgroundColor:'#A90A0A',
        paddingHorizontal:'15@s',
        paddingVertical:'2@s',
        borderRadius:'3@s',
    },
    rejectText:{
        fontSize:'12@s',
        fontWeight:'500',
        color:'#FFF',
    },
    dateTextValuation:{
        marginLeft:'10@s',
    }

})
