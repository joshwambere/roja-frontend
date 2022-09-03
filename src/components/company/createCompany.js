import {View, Text, ScrollView, StatusBar, KeyboardAvoidingView} from "react-native";
import common from "../styles/common";
import Indicators from "../commons/ui/utils/indicators";
import TextInput from "../commons/ui/inputs/textInput";
import PrimaryButton from "../commons/ui/buttons/primaryButton";
import { scale,ScaledSheet } from 'react-native-size-matters';
import {useDispatch} from "react-redux";
import {addCompanyInfo} from "../../store/actions/company";
import {useForm,Controller} from "react-hook-form";

const CreateCompany = ({navigation}) =>{
    const dispatch = useDispatch();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            tin: '',
            location: '',
            shareholders: '',
        }
    });





    const handelCreateCompany = ({name, tin, location, shareholders}) => {
        dispatch(addCompanyInfo('name',name));
        dispatch(addCompanyInfo('tin',tin));
        dispatch(addCompanyInfo('location',location));
        dispatch(addCompanyInfo('shareholders',shareholders));
        navigation.navigate('companyDetails');
    }
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

                        <Controller
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: 'Company name is required'
                                },
                                minLength:{value: 3, message: 'Email must be at least 3 characters'},
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                style={common.commonStyles.input}
                                title={'Company name'}
                                value={value}
                                onChangeText={onChange}
                                />
                            )}
                            name="name"
                        />
                        {errors.name && <Text style={styles.errors}>{errors.name.message}</Text>}


                        <Controller
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: 'Company tin is required'
                                },
                                minLength:{value: 9, message: 'Tin must be exactly 9 characters'},
                                maxLength:{value: 9, message: 'Tin must be exactly 9 characters'},
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={common.commonStyles.input}
                                    title={'TIN'}
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                            name="tin"
                        />
                        {errors.tin && <Text style={styles.errors}>{errors.tin.message}</Text>}


                        <Controller
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: 'location is required'
                                }
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={common.commonStyles.input}
                                    title={'Location'}
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                            name="location"
                        />
                        {errors.location && <Text style={styles.errors}>{errors.location.message}</Text>}



                        <Controller
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: 'Shareholders is required'
                                }
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={common.commonStyles.input}
                                    title={'ShareHolders'}
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                            name="shareholders"
                        />
                        {errors.shareholders && <Text style={styles.errors}>{errors.shareholders.message}</Text>}

                    </View>
                    <View style={styles.homeButtons}>
                        <PrimaryButton style={styles.button} title={'Continue'} large navigate={handleSubmit(handelCreateCompany)} />
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
        },
        errors:{
            color: '#A90A0A',
            paddingTop: '5@s',
            paddingLeft: '5@s',
        },
})

