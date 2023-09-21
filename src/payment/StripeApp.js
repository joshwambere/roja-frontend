import React, { useState } from "react";
import {View, StyleSheet, TextInput, Alert, TouchableOpacity, Text} from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import {useDispatch} from "react-redux";
import {makePayment} from "../store/actions/round";

//ADD localhost address of your server
const API_URL = "https://equity-back-end.herokuapp.com";

const StripeApp = ({offer}) => {
    const [email, setEmail] = useState('');
    const [cardDetails, setCardDetails] = useState();
    const { confirmPayment, loading } = useConfirmPayment();
    const dispatch = useDispatch()


    const paymentData ={
            amount: offer.amount,
            currency: 'rwf',
            payment_method_types: ['card']
    }

    const fetchPaymentIntentClientSecret = async () => {
        const response = await fetch(`${API_URL}/stripe/payment-intent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(paymentData)
        });
        const { clientSecret, error } = await response.json();
        return { clientSecret, error };
    };

    const handlePayPress = async () => {
        //1.Gather the customer's billing information (e.g., email)
        if (!cardDetails?.complete || !email) {
            Alert.alert("Please enter Complete card details and Email");
            return;
        }
        const billingDetails = {
            email: email,
        };
        //2.Fetch the intent client secret from the backend
        try {
            const { clientSecret, error } = await fetchPaymentIntentClientSecret();
            //2. confirm the payment
            if (error) {
                console.log("Unable to process payment");
                console.log(error)

            } else {
                const { paymentIntent, error } = await confirmPayment(clientSecret, {
                    type: "Card",
                    billingDetails: billingDetails,
                });
                if (error) {
                    alert(`Payment Confirmation Error ${error.message}`);
                } else if (paymentIntent) {
                    dispatch(makePayment({id:offer.id}))
                    alert("Payment Successful");
                    console.log("Payment successful ", paymentIntent);
                }
            }
        } catch (e) {
            console.log("-------")
            console.log(e);
        }

    };

    return (
        <View style={styles.container}>
            <TextInput
                autoCapitalize="none"
                placeholder="E-mail"
                keyboardType="email-address"
                default="default@gmail.com"
                onChangeText={value=>setEmail(value)}
                style={styles.input}
            />
            <CardField
                postalCodeEnabled={true}
                placeholder={{
                    number: "4242 4242 4242 4242",
                }}
                cardStyle={styles.card}
                style={styles.cardContainer}
                onCardChange={cardDetails => {
                    setCardDetails(cardDetails);
                }}
            />
            <TouchableOpacity style={styles.pay} onPress={handlePayPress} disabled={loading}>
                <Text style={styles.payText}>Pay</Text>
            </TouchableOpacity>
        </View>
    );
};
export default StripeApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#fff"
    },
    input: {
        backgroundColor: "#efefefef",

        borderRadius: 8,
        fontSize: 20,
        height: 50,
        padding: 10,
    },
    card: {
        backgroundColor: "#efefefef",
    },
    cardContainer: {
        height: 50,
        marginVertical: 30,
    },
    pay:{
        backgroundColor:'#A90A0A',
        paddingHorizontal:20,
        paddingVertical:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    payText:{
        color:'#fff',
        fontWeight: '500',
        fontSize:15

    },
});
