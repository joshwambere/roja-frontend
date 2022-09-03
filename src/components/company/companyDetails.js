import {Text, View, Image, ScrollView, StatusBar, KeyboardAvoidingView} from "react-native";
import {ScaledSheet} from "react-native-size-matters";
import common from "../styles/common";
import Indicators from "../commons/ui/utils/indicators";
import TextInput from "../commons/ui/inputs/textInput";
import {useEffect, useState} from "react";
import ImageUploader from "../commons/ui/inputs/imageUploader";
import PrimaryButton from "../commons/ui/buttons/primaryButton";
import {useForm,Controller} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {addCompanyInfo, createCompany} from "../../store/actions/company";

const CompanyDetails =({navigation})=> {
    const dispatch = useDispatch();
    const companyInfo = useSelector((state) => state.company.companyInfo);
    const company = useSelector((state) => state.company.company);
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            description: '',
            paymentAddress: '',
            image:'https://cdn.logojoy.com/wp-content/uploads/2018/05/01104836/1751.png'
        }
    });




    const handelFinalStep=({description,paymentAddress,image})=>{
        dispatch(addCompanyInfo('description',description));
        dispatch(addCompanyInfo('paymentAddress',paymentAddress));
        dispatch(addCompanyInfo('image',image));
        Object.values(companyInfo).every((item)=>item!==null) && dispatch(createCompany(companyInfo));
    }

    useEffect(() => {
        if (company)
        navigation.navigate('companyHome');
    },[company]);
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
                        <View style={styles.formInput}>
                            <Controller
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: 'Payment Address is required'
                                    },
                                }}

                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput

                                        title={"Payement Address"}
                                        value={value}
                                        onChangeText={onChange}
                                    />
                                )}
                                name="paymentAddress"
                            />
                            {errors.paymentAddress && <Text style={styles.errors}>{errors.paymentAddress.message}</Text>}

                        </View>

                        <Controller
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: ' Description is required'
                                },

                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    multiline={true}
                                    style={styles.textArea}
                                    value={value}
                                    onChangeText={onChange}
                                    lines= {7}
                                    title="Tell Others about your company"
                                />
                            )}
                            name="description"
                        />
                        {errors.description && <Text style={styles.errors}>{errors.description.message}</Text>}

                        <ImageUploader />
                        <View style={styles.finishBtn}>
                            <PrimaryButton style={styles.button} title={'Finish'} large navigate={handleSubmit(handelFinalStep)}/>
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
    },
    formInput:{
        marginBottom: '10@ms',
    },
    errors:{
        color: '#A90A0A',
        paddingTop: '5@s',
        paddingLeft: '5@s',
    },
})
