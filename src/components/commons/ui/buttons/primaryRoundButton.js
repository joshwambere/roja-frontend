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
        paddingVertical:10,
        paddingHorizontal:45,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:45,
    },
    text:{
        color:'#fff',
        fontSize: 18,
        fontWeight:'400',

    }
})
