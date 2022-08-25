import {View, Text, ScrollView, StatusBar, KeyboardAvoidingView} from "react-native";
import common from "../styles/common";
import Indicators from "../commons/ui/utils/indicators";
import TextInput from "../commons/ui/inputs/textInput";
import PrimaryButton from "../commons/ui/buttons/primaryButton";
import { scale,ScaledSheet } from 'react-native-size-matters';

const CreateCompany = ({navigation}) =>{
    const handleNavigate=(route)=>{
        navigation.navigate('companyDetails')
    }
    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <StatusBar barStyle={"dark-content"} backgroundColor={'#fff'}/>
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
                <KeyboardAvoidingView style={styles.button}>
                    <View style={common.commonStyles.formSmall}>
                        <TextInput style={common.commonStyles.input} title={'Company name'} />
                        <TextInput style={common.commonStyles.input} title={'TIN'} />
                        <TextInput style={common.commonStyles.input} title={'Location'} />
                        <TextInput style={common.commonStyles.input} title={'ShareHolders'} />
                    </View>
                    <View style={styles.homeButtons}>
                        <PrimaryButton style={styles.button} title={'Continue'} large navigate={handleNavigate} route={'companyDetails'}/>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </ScrollView>
    )
};

export default CreateCompany;


const styles= ScaledSheet.create({
        container:{
            backgroundColor: '#fff',
            alignItems:'center',
            flex:1,
        },
        textSection:{
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            maxWidth:scale(346),
            paddingTop:scale(20),
        },
        text:{
            color:'#19191C',
            fontSize: scale(16),
            opacity:0.7,
            width:scale(300),
            lineHeight:scale(24),
            paddingTop:scale(20),
            textAlign:'center',

        },
        homeButtons:{
            width:'100%',
            paddingRight: scale(34),
            paddingLeft: scale(34),
            paddingTop: scale(40),
        },
    button:{
            width:'100%',
    }



})

