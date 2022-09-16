import axios from '../../../axios-base';
import * as actionTypes from './actionTypes';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const companyStart = () => {
    return {
        type: actionTypes.COMPANY_START,
    };
}
export const clearCompany = () => {
    return {
        type: actionTypes.INIT_COMPANY,
    };
};

export const getUserCompany = (token) => {
    return async (dispatch)=>{
    axios
        .get(`/companies/founder/company`,{headers: { Authorization: `Bearer ${token}`}})
        .then((response) => {
            dispatch(getUserCompanySuccess(response.data));
        })
        .catch((err) => {
            dispatch(getUserCompanyFail(err.response.data));
        });
    }
}

export const createCompany = ({name,tin,location,shareholders, description,paymentAddress,image}) => {
    return async (dispatch)=>{
        dispatch(companyStart());
        const companyData = {
            name,
            tin,
            location,
            shareholders: parseInt(shareholders),
            description,
            paymentAddress,
            image
        }
        axios
            .post(`/companies`,companyData,{headers: { Authorization: `Bearer ${JSON.parse(await AsyncStorage.getItem('loginData')).token.refreshToken}`}})
            .then((response) => {
                dispatch(getUserCompanySuccess(response.data));
            })
            .catch(async(err) => {
                dispatch(getUserCompanyFail(err.response.data));
            });
    }
}


export const addCompanyInfo = (name,value) => {
    return{
        type: actionTypes.COMPANY_INFO,
        name,
        value
    }
}

export const createCompanySuccess = () => {
    return {
        type: actionTypes.CREATE_COMPANY_SUCCESS,
    }
}

export const getUserCompanySuccess = (company) => {
    return {
        type: actionTypes.GET_USER_COMPANY_SUCCESS,
        company: company?company:null,
        companyInfo: null
    }
}
export const getUserCompanyFail = (error) => {
    return {
        type: actionTypes.GET_USER_COMPANY_FAIL,
        error
    }
}
