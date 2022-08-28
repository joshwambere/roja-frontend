import {View,TextInput} from "react-native";
import Eye from '../../images/eye'
import At from '../../images/at'
import {ScaledSheet } from 'react-native-size-matters';

const textInput = ({style, onChangeText, title, secureTextEntry, email, value,lines,multiline}) =>{
    return (
        <View style={[styles.wrap,style]}>

            <TextInput
                multiline={multiline}
                style={[styles.input, style]}
                onChangeText={onChangeText}
                placeholder={title}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={'#19191C'}
                value={value}
                numberOfLines={lines}
            />
            {
                secureTextEntry ?
                    <Eye style={styles.icon}/>
                    :null
            }
            {
             email?
                    <At style={styles.icon}/>
                    :null
            }


        </View>
    )
}

export default textInput;

const styles = ScaledSheet.create({
    input:{
        letterSpacing:1,
        fontSize:'13@s',
        width:'100%',
    },
    wrap:{
        borderStyle:'solid',
        borderColor:'#EDEFF1',
        borderWidth:1.5,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:'25@s',
        paddingHorizontal:'16@s',
        paddingVertical:'7@s',
        borderRadius:'5@s',

    },
    icon:{
        marginLeft:-35
    }

 }
)
