import {View,Text, StyleSheet} from "react-native";
import Setup from "./commons/images/setup";
import PrimaryRoundButton from "./commons/ui/buttons/primaryRoundButton";
import SecondaryRoundButton from "./commons/ui/buttons/secondaryRoundButton";
import Indicators from './commons/ui/utils/indicators'
import common from "./styles/common";

const Onboarding = ({navigation})=>{
    const handleNavigate=(route)=>{
        navigation.navigate(route)
    }
    return(
        <View style={styles.container}>
            <View style={styles.banner}>
                <Setup/>
            </View>
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
    )
};
export default Onboarding;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
    },
    banner:{
        paddingTop:100,
        alignItems:'center',
        justifyContent:'center',
    },
    textSection:{
        paddingTop:20,
        justifyContent:'center',
        alignItems:'center',
        maxWidth:346,
        marginRight:'auto',
        marginLeft:'auto',
        textAlign:'center',
    },
    title:{
        textAlign:'center',
    },
    text:{
        color:'#19191C',
        opacity:.7,
        fontSize:18,
        lineHeight:20,
        paddingTop:38,
        textAlign:'center',
    },

    buttomBtns:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingRight:20,
        marginTop:'auto',
        paddingBottom:62,
    }
})
