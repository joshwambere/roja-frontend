import {TouchableOpacity,StyleSheet,Text} from 'react-native';
const PrimaryRoundButton = (props)=>{
    return(
        <>
            <TouchableOpacity
                style={props.large?[styles.container,styles.large]: styles.container}
                onPress={()=>{
                    props.navigate(props.route)
                }}
            >
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        </>
    )
};

export default  PrimaryRoundButton

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#A90A0A',
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
