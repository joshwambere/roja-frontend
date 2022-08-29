import axios from '../../../axios-base';
import * as actionTypes from './actionTypes';
import AsyncStorage from "@react-native-async-storage/async-storage";


export const roundStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};
export const createRound = ({valuation,amount,type,description}) => {
    return async (dispatch)=>{
        dispatch(roundStart());
        const roundData = {
            valuation:parseInt(valuation),
            amount:parseInt(amount),
            type,
            description
        }
        console.log(roundData)
        axios
            .post(`/rounds`,roundData,{headers: { Authorization: `Bearer ${JSON.parse(await AsyncStorage.getItem('loginData')).token.refreshToken}`}})
            .then((response) => {
                dispatch(createRoundSuccess(response.data));
            })
            .catch((err) => {
                dispatch(createRoundFail(err.response));
            });
    }
}

export const createRoundSuccess = () => {
    return {
        type: actionTypes.CREATE_ROUND_SUCCESS,
    }
}
export const createRoundFail = (error) => {
    return {
        type: actionTypes.CREATE_ROUND_FAIL,
        error:error.data
    }
}

export const getRounds = () => {
    return async (dispatch)=>{
        dispatch(roundStart());
        axios
            .get(`/rounds`,{headers: { Authorization: `Bearer ${JSON.parse(await AsyncStorage.getItem('loginData')).token.refreshToken}`}})
            .then((response) => {
                console.log('++++++++++++++++++++++++++')
                console.log(response.data)
                dispatch(getRoundsSuccess(response.data));
            })
            .catch((err) => {
                console.log('++++++++++++++++++++++++++')
                console.log(err)
                dispatch(createRoundFail(err.response));
            });
    }
}


export const getRoundsSuccess = (rounds) => {
    return {
        type: actionTypes.GET_ROUNDS_SUCCESS,
        rounds: rounds?rounds:null,
    }
}
