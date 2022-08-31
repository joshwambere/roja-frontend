import {ScaledSheet} from "react-native-size-matters";
import {Text, View} from "react-native";
import Google from "../../images/google";


const Raising = ({round}) => {
    console.log(round);
    return (
        <View style={styles.round}>
            <View style={styles.seedHolder}>
                <View style={styles.iconPloceholder}>
                    <Google/>
                </View>
                <View style={styles.seedDate}>
                    <Text style={styles.roundText}>{round.company_id.name}</Text>
                    <Text style={styles.dateText}>{round.description}</Text>
                </View>
            </View>
        </View>
    )
}

export default Raising;


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
    roundTextAmount:{
        fontSize:'17@s',
        fontWeight:'500',
        color:'#A90A0A',
    }
})
