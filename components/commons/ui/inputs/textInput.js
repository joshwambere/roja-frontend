import {View,TextInput, StyleSheet} from "react-native";
import Eye from '../../images/eye'
import At from '../../images/at'

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

const styles = StyleSheet.create({
    input:{

       paddingLeft:15,
       paddingRight:15,
        paddingBottom:16,
        paddingTop:16,
        borderRadius:5,
        fontWeight:'400',
        fontSize:18,
        color:'#19191C',
        justifyContent:'center',
        height:'100%',
        width:'97%',
    },
    wrap:{
        borderStyle:'solid',
        borderColor:'#EDEFF1',
        borderWidth:1.5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:15,

    },
    icon:{
        marginLeft:-35
    }

 }
)
