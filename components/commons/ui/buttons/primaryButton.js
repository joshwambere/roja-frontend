import {TouchableOpacity,StyleSheet,Text} from "react-native";

const PrimaryButton=(props)=>{
    return(
        <>
            <TouchableOpacity style={props.large?[styles.container,styles.large]: styles.container}
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
        paddingBottom:16,
        paddingTop:16,
        paddingLeft:65,
        paddingRight:65,
    },
    large:{
        width:'100%',
    },
    text:{
        fontWeight:'600',
        color:'#fff',
        fontSize: 22
    }

})
