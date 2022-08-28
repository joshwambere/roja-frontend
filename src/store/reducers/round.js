import { updateObject } from '../../shared/utility';
import * as actionsTypes from '../actions/actionTypes';

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



const reducer = (state = initialReducer, action) => {
    switch (action.type) {
        case actionsTypes.CREATE_ROUND_SUCCESS:
            return createRoundSucess(state, action);
        case actionsTypes.AUTH_START:
            return roundStart(state, action);
        default:
            return state;
    }
};

export default reducer;
