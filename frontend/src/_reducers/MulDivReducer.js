import { initialState } from "../initialState";



export const MulDivReducer = (oldState = initialState,action)=>{
    let newState = oldState;

    switch(action.type){
        case 'MULBY2':
            return{
                ...newState,
                value:newState.value * action.payload
            }
            break;
            case 'MULBY5':
                return{
                    ...newState,
                    value:newState.value * action.payload
                }
                break;
        case 'DIVBY2':
            return{
                ...newState,
                value:newState.value / action.payload
            }
            break;
            case 'DIVBY5':
                return{
                    ...newState,
                    value:newState.value / action.payload
                }
                break;
        case 'RESET':
            return{
                ...newState,
                value: action.payload
            }
            break;
        default:    
    }


    return newState
}