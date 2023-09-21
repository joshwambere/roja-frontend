import {ScaledSheet} from "react-native-size-matters";
import {Text, View} from "react-native";
import {convertNumbers} from "../../../../shared/utility";
import Google from "../../images/google";


const Investment = ({offer}) => {

    return (
        <View style={styles.round}>
            <View style={styles.seedHolder}>
                <View style={styles.iconPloceholder}>
                    <Google/>
                </View>
                <View style={styles.company}>
                    <Text style={styles.companyName}>{offer.round_id.company_id.name}</Text>
                    <Text style={styles.status}>{offer.status}</Text>
                </View>

            </View>
            <View>
                <View style={styles.seedDate}>
                    <View style={styles.valuation}>
                        <Text style={styles.dateText}>Rwf {convertNumbers(offer.amount)}</Text>
                        <Text style={[styles.dateTextValuation,styles.dateText]}>{((offer.amount/(offer.valuation+offer.amount))*100).toFixed(2)} %</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Investment;


const styles = ScaledSheet.create({
    round:{
        borderRadius:'10@s',
        width:'100%',
        borderWidth:'1@s',
        backgroundColor:'#F4FBFF',
        borderColor:'#EDEFF1',
        flexDirection:'row',
        minHeight:'70@s',
        justifyContent:'space-between',
        paddingHorizontal:'10@s',
        alignItems:'center',
        marginBottom:'10@s',
    },
    dateText:{
        fontSize:'15@s',
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
        backgroundColor:'#F4FBFF',
        width:'40@s',
        height:'40@s',
        borderRadius:'20@s',
        alignItems:'center',
        justifyContent:'center',
    },
    roundText:{
        fontSize:'17@s',
        fontWeight:'500',
        textTransform:'capitalize',
    },
    company:{
        justifyContent:'center',
    },
    companyName:{
        paddingLeft:'10@s',
        fontSize:'15@s',
        fontWeight:'500',
        color:'#1E1E1E',
    },
    roundTextAmount:{
        fontSize:'17@s',
        fontWeight:'500',
        color:'#A90A0A',
    },
    valuation:{
        alignItems:'flex-end',
    },
    roundBtnAccept:{
        backgroundColor:'rgb(4,185,11)',
        paddingHorizontal:'15@s',
        paddingVertical:'2@s',
        borderRadius:'2@s',
        marginBottom:'10@s',
    },
    acceptText:{
        fontSize:'12@s',
        fontWeight:'500',
        color:'#FFF',
    },
    roundBtnReject:{
        backgroundColor:'#A90A0A',
        paddingHorizontal:'15@s',
        paddingVertical:'2@s',
        borderRadius:'2@s',
    },
    rejectText:{
        fontSize:'12@s',
        fontWeight:'500',
        color:'#FFF',
    },
    dateTextValuation:{
        marginLeft:'10@s',
        color:'#A90A0A',
    },
    status:{
        paddingLeft:'10@s',
        paddingTop:'5@s',
        fontWeight:'500',
        opacity:0.6,
    }

})
