import {ScaledSheet } from 'react-native-size-matters';
const commonStyles =ScaledSheet.create({
    appH1: {
        fontWeight: '700',
        fontSize: '32@s',
        lineHeight: '42@s',
        paddingTop: '40@s',
        color:'#19191C'
    },
    form:{
        width:'100%',
        paddingRight:'34@s',
        paddingLeft:'34@s',
        justifyContent:'center',
        paddingTop:'40@s',

    },
    formSmall:{
        display:'flex',
        width:'100%',
        paddingRight:'34@s',
        paddingLeft:'34@s',
        justifyContent:'center',
        paddingTop:'30@s',
    },
    inputSmall:{
        marginTop:'8@s',
    },
    input:{
        marginTop:'10@s',
    },
    bottomLinkView:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:'18@s',
    },
    bottomLinkText:{
        color:'#19191C',
    },
    linkText:{
        fontSize:'14@s',
    },
    linkRed:{
        color:'#A90A0A',
        paddingLeft:5,
    },
    indicatorSection:{
        paddingTop:'10@s',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },



})

export default {commonStyles}

