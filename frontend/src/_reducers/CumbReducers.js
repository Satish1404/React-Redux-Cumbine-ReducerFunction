import { combineReducers } from "redux";
import { AddSubReducer } from "./AddSubReducer";
import { MulDivReducer } from "./MulDivReducer";



export default combineReducers ({
    AddSubReducer:AddSubReducer,
    MulDivReducer:MulDivReducer
})