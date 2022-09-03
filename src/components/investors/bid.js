import {StatusBar, Text, TouchableOpacity, View, Modal, Pressable, KeyboardAvoidingView} from "react-native";
import {ScaledSheet} from "react-native-size-matters";
import {convertNumbers} from "../../shared/utility";
import Investment from "../commons/ui/cards/investment";
import {useEffect, useState} from "react";
import {Controller, useForm} from "react-hook-form";
import TextInput from "../commons/ui/inputs/textInput";
import {useDispatch, useSelector} from "react-redux";
import {getOffers, sendOffer} from "../../store/actions/round";

const Bid =({navigation})=>{
    const [modalVisible, setModalVisible] = useState(false);
    const round = navigation.getState().routes[navigation.getState().index].params.round;
    const error = useSelector((state)=>state.round.error);
    const dispatch = useDispatch();
    const offers = useSelector((state)=>state.round.offers);

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            valuation: '',
            amount: '',
        }
    });
    const handleBid = async({amount, valuation})=>{

        dispatch(sendOffer({amount, valuation, round_id:round.id}))
        if (!error){
            setModalVisible(!modalVisible);
        }
    }
    useEffect(()=>{
        dispatch(getOffers(round.id))
    },[])
    return(

        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#A90A0A'} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
                style={styles.modal}
            >
                <TouchableOpacity
                    style={styles.overlay}
                    activeOpacity={1}
                    onPressOut={() => {setModalVisible(false)}}
                ></TouchableOpacity>
                <View style={styles.centeredView}>
                    <View style={[styles.modal,styles.modalView]}>
                        <Text style={styles.modalText}>
                            Submit your bid
                        </Text>
                        <View  style={styles.form}>
                            <View style={styles.formSection}>
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

                                    <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit(handleBid)}>
                                        <Text style={styles.submitText}>Submit</Text>
                                    </TouchableOpacity>
                                </KeyboardAvoidingView>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.header}>
                <View style={styles.headerRound}>
                    <Text style={styles.roundText}>Round</Text>
                    <Text style={styles.equityText}>{(round.amount/round.valuation).toFixed(3)} % Equity</Text>
                </View>
                <Text style={styles.valuation}>Rwf {convertNumbers(round.amount)}</Text>
                <TouchableOpacity style={styles.bidBtn} onPress={() => setModalVisible(true)}>
                    <Text style={styles.bidText}>Bid</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.investment}>
                <View style={styles.yourInvestments}>
                    <Text style={styles.yourInvestmentsText}>
                        Your investments
                    </Text>
                </View>
                <View style={styles.cards}>
                    {
                        offers && offers.map((offer,index)=>{
                            return(
                                <Investment key={index} offer={offer}/>
                            )
                        })
                    }

                </View>
            </View>
        </View>
    )
}

export default Bid;


const styles = ScaledSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
    },
    header:{
        backgroundColor:'#A90A0A',
        paddingHorizontal: '10@s',
        paddingVertical: '10@s',
        paddingTop: '20@s',
        paddingBottom: '20@s',
    },
    headerRound:{
        flexDirection:'row',
        justifyContent:'space-between',
        maxWidth:'50%',
    },
    roundText:{
        color:'#fff',
        fontSize: '13@s',
        textTransform:'capitalize',
        fontWeight:'500',
    },
    overlay:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    equityText:{
        fontSize:'13@s',
        color:'#19191C',
        fontWeight:'500',
    },
    valuation:{
        paddingVertical:'20@s',
        fontSize: '17@s',
        fontWeight:'500',
        color:'#fff',
    },
    bidBtn:{
        backgroundColor:'#F1F1F1',
        paddingVertical:'6@s',
        paddingHorizontal:'20@s',
        maxWidth:'30%',
        minWidth:'27%',
        borderRadius:'2@s',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'flex-end'
    },
    bidText:{
        color:'#A90A0A',
        fontSize: '16@s',
        fontWeight:'500',

    },
    investment:{
        backgroundColor:'#FFF',
        marginTop:'-10@s',
        borderTopRightRadius:'10@s',
        borderTopLeftRadius:'10@s',
        flex:1,
        paddingHorizontal:'10@s',

    },
    yourInvestments:{
        paddingVertical:'10@s',
    },
    yourInvestmentsText:{
        color:'#19191C',
        textTransform:'capitalize',
        fontSize: '16@s',
        fontWeight:'500',
    },
    //modal

    modal:{
        width:'100%',
        paddingHorizontal:'20@s',
        borderTopRightRadius:'20@s',
        borderTopLeftRadius:'20@s',
        minHeight:'50%',
    },
    form:{
        width:'100%'
    },
    formSection:{

    },
    formInput:{
        marginBottom:'10@s',
    },
    submitBtn:{
      backgroundColor:'#A90A0A',
      paddingVertical:'10@s',
      width:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'5@s',
    },
    submitText:{
        fontSize:'16@s',
        color:'#fff',
        fontWeight:'500',

    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",

    },
    modalView: {
        backgroundColor: "white",
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.45,
        shadowRadius: 5,
        elevation: 8
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        alignSelf: "flex-start",
        fontWeight: "bold",
        fontSize: "14@s",
        paddingBottom: '20@s',
    }

})
