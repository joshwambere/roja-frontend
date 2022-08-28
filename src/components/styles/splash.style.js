import {Dimensions, StyleSheet} from "react-native";
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container:{
        flex:1,
        display:'flex',
        flexDirection:'column',
        width: width,
    },
    topNavBanner:{
        flex:.5,
        backgroundColor:'#A90A0A',
        paddingTop:35,
        paddingLeft:15,
        paddingRight:15,
        borderBottomLeftRadius:35,
        borderBottomRightRadius:35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:2
    },
    bottomNavBanner:{
        flex:.5,
        backgroundColor:'#fff',
        alignItems: 'center',
    },
    splashH1:{
        fontWeight: '700',
        fontSize: 28,
        textAlign: "center",
        maxWidth: width-60,
        paddingTop: 40,
        color:'#19191C',
        lineHeight: 32,
    },
    splashP:{
        maxWidth:width-80,
        fontWeight:'400',
        textAlign:'center',
        fontSize:20,
        color:'#19191C',
        opacity:.6,
        marginTop: 24,
        lineHeight:18
    },
    bottomBtns:{
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingVertical:20,

    },
    bottomText:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
    }

})
