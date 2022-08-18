import {TouchableOpacity,StyleSheet,Text} from "react-native";


const PrimaryButton=(props)=>{
    return(
        <>
            <TouchableOpacity style={props.large?[styles.container,styles.large,props.style]: [styles.container,props.style]}
                              onPress={()=>{
                                  props.navigate(props.route)
                              }}
            >
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        </>
    )
}
export default  PrimaryButton;

const styles = StyleSheet.create({

    container:{
        backgroundColor: '#A90A0A',
        borderRadius:5,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:15,
    },
    large:{
        width:'100%',
    },
    text:{
        fontWeight:'500',
        color:'#fff',
        fontSize: 18
    }

})
