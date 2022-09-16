import {View,Text, StyleSheet} from "react-native";
import Setup from "./commons/images/setup";
import PrimaryRoundButton from "./commons/ui/buttons/primaryRoundButton";
import SecondaryRoundButton from "./commons/ui/buttons/secondaryRoundButton";
import Indicators from './commons/ui/utils/indicators'
import common from "./styles/common";
import { scale,ScaledSheet } from 'react-native-size-matters';

const Onboarding = ({navigation})=>{
    const handleNavigate=(route)=>{
        navigation.navigate(route)
    }
    return(
        <View style={styles.container}>
            <View style={styles.banner}>
                <Setup style={styles.bannerImage}/>
            </View>
            <View style={styles.bottomSection}>
                <View style={styles.textSection}>
                    <Text style={[common.commonStyles.appH1, styles.title]}>
                        Setup Your Company Profile
                    </Text>
                    <Text style={styles.text}>
                        Create a company profile, for the investor to see and connect with and grow exponentially
                    </Text>
                </View>
                <View style={common.commonStyles.indicatorSection}>
                    <Indicators active={0} />
                </View>
                <View style={styles.buttomBtns}>
                    <SecondaryRoundButton title={'Skip'}/>
                    <PrimaryRoundButton navigate={handleNavigate} title={'Next'} route={'company'}/>
                </View>
            </View>
        </View>
    )
};
export default Onboarding;

const styles = ScaledSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
        justifyContent:'center',

    },
    banner:{
        paddingTop:scale(100),
        alignItems:'center',
        justifyContent:'center',

    },
    bottomSection:{
        flexGrow:1,
    },
    textSection:{
        paddingTop:'20@s',
        justifyContent:'flex-end',
        alignItems:'center',
        maxWidth:'346@s',
        marginRight:'auto',
        marginLeft:'auto',
        textAlign:'center',

    },
    bannerImage:{

    },
    title:{
        textAlign:'center',
        fontSize: scale(24),
        width:scale(240),
        fontWeight: '700',
        lineHeight: '22@s',
        paddingTop: '20@s',
    },
    text:{
        color:'#19191C',
        opacity:.7,
        fontSize:'14@s',
        lineHeight:'20@s',
        paddingTop:'38@s',
        textAlign:'center',
        width:scale(300),
    },

    buttomBtns:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:'20@s',
        paddingRight:'20@s',
        marginTop:'auto',
        paddingBottom:'40@s',
    }
})
