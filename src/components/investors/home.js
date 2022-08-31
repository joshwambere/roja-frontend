import {Pressable, ScrollView, Text, View} from "react-native";
import Raising from "../commons/ui/cards/raising";
import {ScaledSheet} from "react-native-size-matters";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getPendingRounds} from "../../store/actions/round";


const Home =({navigation})=>{
    const dispatch = useDispatch();
    const rounds = useSelector((state)=>state.round.rounds);
    useEffect(()=>{
        dispatch(getPendingRounds());
    },[])
    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor:'#fff' }}>

            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.profile}>
                        <Text style={styles.title}>John doe</Text>

                    </View>
                    <Text style={styles.raising}>Who is raising</Text>
                </View>
                {
                    rounds && rounds.map((item,index)=>{
                        return(
                            <Pressable key={index} onPress={()=> navigation.navigate('bid',{round:item})}>
                                <Raising round={item}/>
                            </Pressable>
                        )
                    })
                }


            </View>
        </ScrollView>
    )
}

export default Home;


const styles = ScaledSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
        paddingHorizontal: '10@s',
    },
    profile:{
        backgroundColor:'rgba(169, 10, 10, 0.17)',
        maxWidth:'100@s',
        borderRadius:'20@s',
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        color:'#A90A0A',
        fontSize: '13@s',
        fontWeight:'500',
        textAlign:'center',
    },
    raising:{
        paddingVertical:'10@s',
        fontSize: '17@s',
        fontWeight:'500',
        color:'#19191C',
    }
})
