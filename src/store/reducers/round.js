import { updateObject } from '../../shared/utility';
import * as actionsTypes from '../actions/actionTypes';
import {getRounds} from "../actions/round";

const initialReducer = {
    round: null,
    loading: false,
    error: null,

};

const roundStart = (state, action) => {
    return updateObject(state, {
        round: null,
        loading: true,
        error: null,
    });
};

const createRound = (state, action) => {
    return updateObject(state, {
        round: action.round,
    });
};


const createRoundSucess =(state, action)=>{
    return updateObject(state, {
        loading: false,
        error: null,

    })
}

const getRoundsSuccess =(state, action)=> {
return updateObject(state, {
    rounds: action.rounds,
    loading: false,
    error: null,
})
}



const reducer = (state = initialReducer, action) => {
    switch (action.type) {
        case actionsTypes.CREATE_ROUND_SUCCESS:
            return createRoundSucess(state, action);
        case actionsTypes.AUTH_START:
            return roundStart(state, action);
        case actionsTypes.GET_ROUNDS_SUCCESS:
            return getRoundsSuccess(state, action);
        default:
            return state;
    }
};

export default reducer;
