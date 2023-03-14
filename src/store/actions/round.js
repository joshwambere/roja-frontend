import axios from '../../../axios-base';
import * as actionTypes from './actionTypes';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useSelector} from "react-redux";


export const roundStart = () => {
    return {
        type: actionTypes.INIT_ROUND,
    };
};

export const clearRound = () => {

    return {
        type: actionTypes.INIT_ROUND,
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

        axios
            .post(`/rounds`,roundData,{headers: { Authorization: `Bearer ${JSON.parse(await AsyncStorage.getItem('loginData')).token.refreshToken}`}})
            .then((response) => {
                dispatch(createRoundSuccess(response.data));
            })
            .catch((err) => {
                console.log(err);
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
                dispatch(getRoundsSuccess(response.data));
            })
            .catch((err) => {
                dispatch(createRoundFail(err.response));
            });
    }
}
export const getPendingRounds = () => {
    return async (dispatch)=>{
        dispatch(roundStart());
        axios
            .get(`/rounds?status=PENDING`,{headers: { Authorization: `Bearer ${JSON.parse(await AsyncStorage.getItem('loginData')).token.refreshToken}`}})
            .then((response) => {

                dispatch(getRoundsSuccess(response.data));
            })
            .catch((err) => {
                dispatch(createRoundFail(err.response));
            });
    }
}

export const getRecentRounds = () => {
    return async (dispatch)=>{
        dispatch(roundStart());
        axios
            .get(`/rounds`,{headers: { Authorization: `Bearer ${JSON.parse(await AsyncStorage.getItem('loginData')).token.refreshToken}`}})
            .then((response) => {

                dispatch(getRecentRoundsSuccess(response.data));
            })
            .catch((err) => {
                dispatch(createRoundFail(err.response));
            });
    }
}

export  const closeRound = (id) => {
    return async (dispatch)=>{
        dispatch(roundStart());
        axios
            .patch(`/rounds/${id}/close`,{},{headers: { Authorization: `Bearer ${JSON.parse(await AsyncStorage.getItem('loginData')).token.refreshToken}`}})
            .then((response) => {
                dispatch(closeRoundSuccess(response.data));
            })
            .catch((err) => {
                dispatch(createRoundFail(err.response));
            });
    }
}







//ofers
export const sendOffer=({amount, valuation,round_id, offers})=>{
    return async (dispatch)=>{
        const offerData = {
            amount:parseInt(amount),
            valuation:parseInt(valuation),
            round_id
        }
        axios
            .post(`/offers`,offerData,{headers: { Authorization: `Bearer ${JSON.parse(await AsyncStorage.getItem('loginData')).token.refreshToken}`}})
            .then((response) => {

                const newOffers = [...offers,response.data];
                dispatch(getOfferSuccess(newOffers));
                dispatch(sendOfferSuccess(response.data));
            })
            .catch((err) => {
                dispatch(createRoundFail(err.response));
            });
    }
}


export const getOffers=(round_id)=>{
    return async (dispatch)=>{

        axios
            .get(`/offers/${round_id}`,{headers: { Authorization: `Bearer ${JSON.parse(await AsyncStorage.getItem('loginData')).token.refreshToken}`}})
            .then((response) => {
                dispatch(getOfferSuccess(response.data));
            })
            .catch((err) => {
                dispatch(createRoundFail(err.response));
            });
    }
}


export const acceptOffer=(round_id)=>{
    return async (dispatch)=>{

        axios
            .post(`/offers/accept`,{id:round_id},{headers: { Authorization: `Bearer ${JSON.parse(await AsyncStorage.getItem('loginData')).token.refreshToken}`}})
            .then((response) => {
                dispatch(closeRoundSuccess(response.data));
            })
            .catch((err) => {
                dispatch(createRoundFail(err.response));
            });
    }
}

export const rejectOffer=(round_id)=>{
    return async (dispatch)=>{
        axios
            .post(`/offers/reject`,{id:round_id},{headers: { Authorization: `Bearer ${JSON.parse(await AsyncStorage.getItem('loginData')).token.refreshToken}`}})
            .then((response) => {
                dispatch(closeRoundSuccess(response.data));
            })
            .catch((err) => {
                console.log(err);
                dispatch(createRoundFail(err.response));
            });
    }
}



export const makePayment=(offer_id)=>{
    return async (dispatch)=>{
        axios
            .post(`/offers/make-payment`,offer_id,{headers: { Authorization: `Bearer ${JSON.parse(await AsyncStorage.getItem('loginData')).token.refreshToken}`}})
            .then((response) => {
                dispatch(sendOfferSuccess(response.data));
            })
            .catch((err) => {
                console.log(err);
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

export const closeRoundSuccess = ()=>{
    return{
        type:actionTypes.CLOSE_ROUND_SUCCESS
    }
}

export const getRecentRoundsSuccess= (rounds) => {
    return {
        type: actionTypes.RECENT_ROUNDS_SUCCESS,
        recentRounds: rounds?rounds:null,
    }
}


export const sendOfferSuccess = () => {
    return {
        type: actionTypes.SEND_OFFER_SUCCESS,
    }
}

export const getOfferSuccess = (offers) => {
    return {
        type: actionTypes.GET_OFFER_SUCCESS,
        offers: offers?offers:null,
    }
}
