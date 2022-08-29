import { Pressable, StatusBar, Text, View} from "react-native";
import {ScaledSheet} from "react-native-size-matters";
import Google from "../commons/images/google";
import Round from "../commons/images/round";
import PercentageSmall from "../commons/images/percentageSmall";
import common from "../styles/common";

const Home = ({navigation}) => {
    return (
        <View style={styles.container} >
            <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
            <View style={styles.header}>
                <Text style={styles.title}>Home</Text>
                <View style={common.commonStyles.profile}>
                    <Google/>
                </View>
            </View>
            <View style={styles.cards}>
                <View style={[styles.leftGrid]}>
                    <Pressable>
                        <View style={[styles.investmentsTop,styles.rightGrid]}>
                            <PercentageSmall/>
                            <Text style={styles.investmentsText}>Investments</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>navigation.navigate('createPitch')}>
                        <View style={[styles.investments,styles.rightGrid]}>
                            <PercentageSmall/>
                            <Text style={styles.investmentsText}>Pitch</Text>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.rightGrid}>
                <Pressable style={styles.pressBtn} onPress={() => navigation.navigate('rounds')}>

                        <Round />
                        <Text style={styles.roundText}>Investment Rounds</Text>

                </Pressable>
                <Pressable style={styles.pressBtn} onPress={() => navigation.navigate('offers')}>
                    <Round />
                    <Text style={styles.roundText}>Offers</Text>

                </Pressable>
            </View>
            </View>
        </View>
    )
}

export default Home;


const styles = ScaledSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
        alignItems:'center',
    },
    header:{
        flex:.1,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:'20@s',
        paddingTop:'20@s',
    },
    title:{
        color:'#000000',
        fontSize: '24@s',
        fontWeight:'500',

    },

    cards:{
        flexDirection:'row',
        paddingTop:'20@s',
    },
    leftGrid:{
        flex:.6,
        marginRight:'10@s',
    },
    rightGrid:{
        backgroundColor:'#F4FBFF',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:'10@s',
        paddingHorizontal:'10@s',
        borderRadius:10,
        shadowColor:'rgba(0, 0, 0, 0.25)',
        shadowOffset:{width:0,height:1.5},
        shadowOpacity:0.2,
        shadowRadius:0,
        elevation: 6,
    },
    roundText:{
        fontSize:'15@s',
        fontWeight:'500',
        paddingTop:'10@s',
    },
    investments:{
        marginTop:'10@s',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:'10@s',
        paddingVertical:'10@s',

    },
    investmentsTop:{
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:'10@s',
        paddingVertical:'10@s',


    },
    investmentsText:{
        fontSize:'15@s',
        fontWeight:'500',
        paddingTop:'10@s',
    },
    percentageSmall:{
        height:'40@s',
    },
    pressBtn:{
        alignItems:'center',
        flex:1,
        justifyContent:'space-evenly',
    }
})
