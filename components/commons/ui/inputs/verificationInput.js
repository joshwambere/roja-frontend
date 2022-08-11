import {TextInput, StyleSheet, View} from "react-native";
import {useState} from "react";

const VerificationInput = (props)=>{
    const [active, setActive] = useState(false);
    const inputs = Array(4).fill(0);
    const handelFocus = ()=>{
        setActive(true);
    }
    return(
        <View style={styles.otp}>
            {
                inputs.map((input,index)=>{
                    return(
                        <TextInput
                            key={index}
                            style={active?[styles.input, styles.inputActive]:styles.input}
                            keyboardType={'numeric'}
                            maxLength={1}
                            onFocus={()=>handelFocus(index)}
                            onChangeText={(text)=>{}}
                        />
                    );
                })
            }
        </View>
    )
}

export default VerificationInput;

const styles = StyleSheet.create({
    otp:{
        flexDirection:'row',
        paddingTop:50,
    },
    input:{
        borderColor:'#EDEFF1',
        borderStyle:'solid',
        borderWidth:2,
        marginLeft:9,
        marginRight:9,
        borderRadius:5,
        paddingTop:8,
        paddingRight:16,
        paddingLeft:16,
        paddingBottom:8,
        fontSize:28,
        fontWeight:'bold',
    },
    inputActive:{
        borderColor:'#3F8AFC',

    }
})
