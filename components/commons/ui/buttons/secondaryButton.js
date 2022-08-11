import {TouchableOpacity,StyleSheet,Text} from "react-native";

const SecondaryButton=(props)=>{
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
export default  SecondaryButton;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#19191C',
        borderRadius:5,
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
