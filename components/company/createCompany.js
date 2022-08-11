import{StyleSheet, View, Text} from "react-native";
import common from "../styles/common";
import Indicators from "../commons/ui/utils/indicators";
import TextInput from "../commons/ui/inputs/textInput";
import PrimaryButton from "../commons/ui/buttons/primaryButton";

const CreateCompany = ({navigation}) =>{
    const handleNavigate=(route)=>{
        navigation.navigate(route)
    }
    return(
        <View style={styles.container}>
            <View style={styles.textSection}>
                <Text style={common.commonStyles.appH1}>Company Details</Text>
                <Text style={styles.text}>
                    Jump start Your Financial investments and growth
                </Text>
            </View>
            <View style={common.commonStyles.indicatorSection}>
                <Indicators active={1} />
            </View>
            <View style={common.commonStyles.formSmall}>
               <TextInput style={common.commonStyles.input} title={'Company name'} />
                <TextInput style={common.commonStyles.input} title={'TIN'} />
                <TextInput style={common.commonStyles.input} title={'Location'} />
                <TextInput style={common.commonStyles.input} title={'ShareHolders'} />
            </View>
            <View style={styles.homeButtons}>
                <PrimaryButton title={'Continue'} large navigate={handleNavigate} route={'pitch'}/>
            </View>
        </View>
    )
};

export default CreateCompany;


const styles= StyleSheet.create({
        container:{
            backgroundColor: '#fff',
            alignItems:'center',
            flex:1,
        },
        textSection:{
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            maxWidth:336,
            paddingTop:100,
        },
        text:{
            color:'#19191C',
            fontSize: 18,
            opacity:0.7,
            lineHeight:20,
            paddingTop:38,
            textAlign:'center',

        },
        homeButtons:{
            width:'100%',
            paddingRight: 34,
            paddingLeft: 34,
            paddingTop: 60,
        }



})

