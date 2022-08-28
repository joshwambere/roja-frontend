import axios from '../../../axios-base';
import * as actionTypes from './actionTypes';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserCompany = () => {
    return async (dispatch)=>{
    axios
        .get(`/companies/founder/company`,{headers: { Authorization: `Bearer ${JSON.parse(await AsyncStorage.getItem('loginData')).token.refreshToken}`}})
        .then((response) => {
            dispatch(getUserCompanySuccess(response.data));
        })
        .catch(async(err) => {
            console.log('**********')
            console.log(err);
            dispatch(getUserCompanyFail(err.response.data));
        });
    }
}

export const getUserCompanySuccess = (company) => {
    return {
        type: actionTypes.GET_USER_COMPANY_SUCCESS,
        company: company?company:null,
    }
}
export const getUserCompanyFail = (error) => {
    return {
        type: actionTypes.GET_USER_COMPANY_FAIL,
        error
    }
}
