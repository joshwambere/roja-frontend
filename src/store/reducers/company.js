import { updateObject } from '../../shared/utility';
import * as actionsTypes from '../actions/actionTypes';

const initialReducer = {
    company: null,

};

const getCompany = (state, action) => {
    return updateObject(state, {
        company: action.company,
    });
};



const reducer = (state = initialReducer, action) => {
    switch (action.type) {
        case actionsTypes.GET_USER_COMPANY_SUCCESS:
            return getCompany(state, action);
        default:
            return state;
    }
};

export default reducer;
