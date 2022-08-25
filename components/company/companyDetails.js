import {Text, View, Image, ScrollView, StatusBar, KeyboardAvoidingView} from "react-native";
import {ScaledSheet} from "react-native-size-matters";
import common from "../styles/common";
import Indicators from "../commons/ui/utils/indicators";
import TextInput from "../commons/ui/inputs/textInput";
import {useState} from "react";
import ImageUploader from "../commons/ui/inputs/imageUploader";
import PrimaryButton from "../commons/ui/buttons/primaryButton";

const CompanyDetails =({navigation})=> {
    const [description, setDescription] = useState('');
    const setLineBreaks = (text)=>{

        if (  text.split(/\r\n|\r|\n/).length <= 10 )
        {
            console.log(text)
            setDescription({text});
        }
    }
    const handelNavigate = ()=>{
        navigation.navigate('set')
    }
    return(
        <ScrollView  contentContainerStyle={{ flexGrow: 1 }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
            <View style={styles.container}>
                <View style={styles.introSection}>
                    <Text style={[common.commonStyles.appH1, styles.localH1]}>Company Description</Text>
                    <Text style={styles.details}> Final Details to fine tune your Appearance</Text>
                    <View style={common.commonStyles.indicatorSection}>
                        <Indicators active={3} />
                    </View>
                </View>
                <KeyboardAvoidingView>
                    <View style={common.commonStyles.form}>
                        <TextInput
                            multiline={true}
                            style={styles.textArea}
                            onTextChange={setLineBreaks}
                            lines= {9}
                            title="Tell Others about your company"
                        />
                        <ImageUploader />
                        <View style={styles.finishBtn}>
                            <PrimaryButton style={styles.button} title={'Finish'} large navigate={handelNavigate} route={'companyDetails'}/>
                        </View>
                    </View>
                </KeyboardAvoidingView>

            </View>
        </ScrollView>
    )
}

export default CompanyDetails;

const styles = ScaledSheet.create({
    container:{
        backgroundColor: '#fff',
        flex:1 ,
        alignItems:'center',
    },
    localH1: {
        paddingTop: '40@ms',
        lineHeight: '21@s',
    },
    details: {
        paddingTop: '20@ms',
        fontSize: '16@ms',
        opacity: 0.7,
        color: '#19191C',
        textAlign: 'center',
        maxWidth: '320@ms',
        letterSpacing: 0.5,
    },
    introSection:{
        paddingTop: '20@ms',
        paddingHorizontal: '20@ms',
    },
    textArea:{
        textAlignVertical: 'top'
    },
    finishBtn:{
        paddingTop: '40@ms',
    }
})
