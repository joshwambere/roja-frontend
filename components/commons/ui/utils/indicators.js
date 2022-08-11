import {StyleSheet, View} from "react-native";

const Indicators = ({active}) =>{
    const indicator=Array(4).fill(0);
    return(
            <View style={styles.container}>
                {
                    indicator.map((item,index)=>{
                        return (
                            <View
                                key={index}
                                style={index===active?[styles.indicator, styles.active]:styles.indicator}
                            >

                            </View>
                        )
                    })
                }
            </View>
    )
};

export default Indicators;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

        width:'100%',
        height:40,


    },
    indicator:{
        width:15,
        height:15,
        borderRadius:10,
        backgroundColor:'#666885',
        marginRight:5,

    },
    active:{
        backgroundColor:'#19191C',
    }
})
