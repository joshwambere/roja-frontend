import {TouchableOpacity,StyleSheet,Text} from 'react-native';
const SecondaryRoundButton = (props)=>{
    return(
        <>
            <TouchableOpacity style={props.large?[styles.container,styles.large]: styles.container}>
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        </>
    )
};

export default  SecondaryRoundButton

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#3F3D56',
        paddingTop:15,
        paddingBottom:15,
        paddingRight:65,
        paddingLeft:65,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:45,
    },
    text:{
        color:'#fff',
        fontSize: 22,
        fontWeight:'600',

    }
})
