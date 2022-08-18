import {View,TextInput, StyleSheet} from "react-native";
import Eye from '../../images/eye'
import At from '../../images/at'
import {ScaledSheet } from 'react-native-size-matters';

const textInput = ({style, onChangeText, title, secureTextEntry, email}) =>{
    return (
        <View style={[styles.wrap,style]}>

            <TextInput
                style={[styles.input]}
                onChangeText={onChangeText}
                placeholder={title}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={'#19191C'}
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
        fontSize:'12@s',
        justifyContent:'center',
        width:'100%',

    },
    wrap:{
        borderStyle:'solid',
        borderColor:'#EDEFF1',
        borderWidth:1.5,
        flexDirection:'row',
        alignItems:'center',
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
