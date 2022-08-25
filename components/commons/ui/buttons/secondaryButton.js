import {TouchableOpacity,StyleSheet,Text} from "react-native";

const SecondaryButton=(props)=>{
    return(
        <>
            <TouchableOpacity style={props.large?[styles.container,styles.large]: [styles.container,props.style]}
                              onPress={props.navigate}
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
