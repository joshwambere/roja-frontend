import { updateObject } from '../../shared/utility';
import * as actionsTypes from '../actions/actionTypes';
import * as actionTypes from "../actions/actionTypes";

const initialReducer = {
    rounds: null,
    loading: false,
    error: null,
    offers:null

};

const initRound = (state, action) => {
    return updateObject(state, {
        round: null,
        loading: false,
        error: null,
        offers:null
    });
}

const roundStart = (state, action) => {
    return updateObject(state, {
        round: null,
        loading: true,
        error: null,
        offers:null
    });
};



const createRoundSucess =(state, action)=>{
    return updateObject(state, {
        loading: false,
        error: null,

    })
}

export const getOffersSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,
        offers: action.offers,

    })
}

const getRoundsSuccess =(state, action)=> {
    return updateObject(state, {
        loading: false,
        error: null,
        rounds: action.rounds,

    })
}

const sendOfferSuccess =(state, action)=> {
    return updateObject(state, {
        loading: false,
        error: null,

    })
}



const reducer = (state = initialReducer, action) => {
    switch (action.type) {
        case actionsTypes.CREATE_ROUND_SUCCESS:
            return createRoundSucess(state, action);
        case actionsTypes.GET_ROUNDS_SUCCESS:
            return getRoundsSuccess(state, action);
        case actionsTypes.SEND_OFFER_SUCCESS:
            return sendOfferSuccess(state, action);
        case actionsTypes.GET_OFFER_SUCCESS:
            return getOffersSuccess(state, action);
        case actionsTypes.INIT_ROUND:
            return initRound(state, action);
        default:
            return state;
    }
};

export default reducer;
