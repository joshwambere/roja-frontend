import auth from "./auth";
import company from "./company";
import round from "./round";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    auth,
    company,
    round
})

export default rootReducer
