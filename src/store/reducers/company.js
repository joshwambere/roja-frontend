import { updateObject } from '../../shared/utility';
import * as actionsTypes from '../actions/actionTypes';

const initialReducer = {
    company: null,
    error: null,
    loading: false,
    companyInfo:{
        name: null,
        tin: null,
        location: null,
        shareholders: null,
        description: null,
        paymentAddress: null,
    }
};

const initCompany = (state, action) => {
    return updateObject(state, {
        company: null,
        error: null,
        loading: false,
        companyInfo:{
            name: null,
            tin: null,
            location: null,
            shareholders: null,
            description: null,
            paymentAddress: null,
        }
    });
}

const companyStart = (state, action) => {
    return updateObject(state, {
        loading: true,
    });
}

const getCompany = (state, action) => {
    return updateObject(state, {
        company: action.company,
    });
};

const addCompanyInfo = (state, action) => {
    return updateObject(state, {
        ...state,companyInfo: {...state.companyInfo,[action.name]: action.value}
    });
}

const createCompanySuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null,

    });
}



const reducer = (state = initialReducer, action) => {
    switch (action.type) {
        case actionsTypes.GET_USER_COMPANY_SUCCESS:
            return getCompany(state, action);
        case actionsTypes.CREATE_COMPANY_SUCCESS:
            return createCompanySuccess(state, action);
        case actionsTypes.COMPANY_START:
            return companyStart(state, action);
        case actionsTypes.COMPANY_INFO:
            return addCompanyInfo(state, action);
        case actionsTypes.INIT_COMPANY:
            return initCompany(state, action);

        default:
            return state;
    }
};

export default reducer;
