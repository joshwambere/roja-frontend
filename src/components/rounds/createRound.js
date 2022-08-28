import {ActivityIndicator, KeyboardAvoidingView, Text, View} from "react-native";
import {ScaledSheet} from "react-native-size-matters";
import common from "../styles/common";
import TextInput from "../commons/ui/inputs/textInput";
import Select2 from "react-native-select-two";
import {useState} from "react";
import PrimaryButton from "../commons/ui/buttons/primaryButton";
import Google from "../commons/images/google";
import {useDispatch, useSelector} from "react-redux";
import {Controller, useForm} from "react-hook-form";
import {createRound} from "../../store/actions";
import {ScrollView} from "react-native";

const roundType = [{name:'OPEN',id:1 ,checked:true},{name:'ONE_INVESTOR',id:2},{name:'LIMITED',id:3}]
const CreateRound=({navigation})=>{
    const [type, setType] = useState('');
    const loading = useSelector((state) => state.round.loading);
    const error = useSelector((state) => state.round.error);
    const dispatch = useDispatch();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            valuation: '',
            amount: '',
            description: '',
            roundCategory:''
        }
    });


    const handelCreateRound =({valuation,amount,roundCategory,description})=>{
        const type = roundCategory===1?'OPEN':roundCategory===2?'ONE_INVESTOR':'LIMITED';
        dispatch(createRound({valuation,amount,type,description}))
        if (!error){
            navigation.navigate('rounds')
        }
    }


    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={common.commonStyles.profile}>
                        <Google/>
                    </View>
                </View>
                <View style={styles.headerText}>
                    <Text style={styles.title}>Create an Investment Round</Text>
                    <Text style={styles.text}>Lets get you started on the journey to success</Text>
                </View>

                <View style={[common.commonStyles.form, styles.formSection]}>
                    <KeyboardAvoidingView>
                    <Controller
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: 'Valuation is required'
                            },
                            pattern: {
                                value: /(\d+(?:\.\d+)?)/,
                                message: 'Value must be a number'
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.formInput}
                                title={"Current valuation"}
                                value={value}
                                onChangeText={onChange}
                            />
                        )}
                        name="valuation"
                    />
                    {errors.valuation && <Text style={styles.errors}>{errors.valuation.message}</Text>}


                    <Controller
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: 'amount is required'
                            },
                            pattern: {
                                value: /(\d+(?:\.\d+)?)/,
                                message: 'amount must be a number'
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.formInput}
                                title={"Seed amount"}
                                value={value}
                                onChangeText={onChange}
                            />
                        )}
                        name="amount"
                    />
                    {errors.amount && <Text style={styles.errors}>{errors.amount.message}</Text>}

                    <Controller
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: 'Round type is required'
                            },

                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Select2
                                isSelectSingle
                                style={[styles.select,styles.formInput]}
                                colorTheme="#A90A0A"
                                popupTitle="Round Type"
                                title="Round Type"
                                data={roundType}
                                value={value[0]}
                                selectButtonText={'Select'}
                                cancelButtonText={'Cancel'}
                                onSelect={value => {
                                    onChange(value[0]);
                                }}
                                onRemoveItem={value => {
                                    onChange(value[0])
                                }}
                            />
                        )}
                        name="roundCategory"
                    />
                    {errors.roundCategory && <Text style={styles.errors}>{errors.roundCategory.message}</Text>}


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
                                title="Description"
                            />
                        )}
                        name="description"
                    />
                    {errors.description && <Text style={styles.errors}>{errors.description.message}</Text>}

                    <View>
                        {loading &&  <ActivityIndicator style={styles.loader} size="small" color="#A90A0A" />}
                        {error && (
                            <Text style={styles.errors}>
                                {typeof error.message === 'string'
                                    ? error.message
                                    : error.message}
                            </Text>
                        )}
                    </View>

                    <View style={styles.finishBtn}>
                        <PrimaryButton style={styles.button} title={'Create'} large navigate={handleSubmit(handelCreateRound)}/>
                    </View>
                    </KeyboardAvoidingView>
                </View>
            </View>
        </ScrollView>
    )
}

export default CreateRound;


const styles = ScaledSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
        justifyContent:'space-around',
    },
    header:{
        alignItems:'flex-end',
        paddingTop: '10@ms',
        paddingHorizontal: '20@ms',

    },
    headerText:{
        alignItems:'center',
        paddingTop: '20@ms',
    },
    title:{
        fontSize: '24@ms',
        color: '#19191C',
        lineHeight: '28@ms',
        letterSpacing: 0.5,
        fontWeight: 'bold',
    },
    text:{
        fontSize: '14@ms',
        color: '#19191C',
        opacity: 0.7,
        lineHeight: '21@ms',
    },
    formSection:{
        flex:.85,
        justifySelf:'center',
    },
    formInput:{
        marginBottom:'10@ms',
    },
    select:{
        marginTop: '10@vs',
        paddingVertical: '10@vs',
        fontSize: '18@vs',
        fontWeight: 'bold',
        borderRadius: '5@ms',
    },
    errors:{
        color: '#A90A0A',
        paddingTop: '5@s',
        paddingLeft: '5@s',
    },
    loader:{
        marginTop: '5@s',
    },
    finishBtn:{
        paddingTop: '40@ms',
    },
    textArea:{
        textAlignVertical: 'top'
    },
})
