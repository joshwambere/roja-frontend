import {ScaledSheet} from "react-native-size-matters";
import {Text, View} from "react-native";
import Up from "../../images/up";
import {convertDate, convertNumbers} from "../../../../shared/utility";


const Round = (round) => {
    return (
        <View style={styles.round}>
            <View style={styles.seedHolder}>
                <View style={styles.iconPloceholder}>
                    <Up/>
                </View>
                <View style={styles.seedDate}>
                    <Text style={styles.roundText}>{round.round.name}</Text>
                    <Text style={styles.dateText}>{convertDate(round.round.createdAt)}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.roundTextAmount}>{round.round.status==='PENDING'?'Active': convertNumbers(round.round.amount)}</Text>
            </View>
        </View>
    )
}

export default Round;


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
        fontSize:'13@s',

        opacity:.5,
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
        fontSize:'17@s',
        fontWeight:'500',
        textTransform:'capitalize',
    },
    roundTextAmount:{
        fontSize:'17@s',
        fontWeight:'500',
        color:'#A90A0A',
    }
})
