import { ERRORREGISTER, LOADREGISTER, SUCCESSREGISTER } from "../actionTypes";
import initialState from "../initialState";


type State ={
    loading: boolean;
    data?: any,
    success: boolean,
    error: boolean;
}

type Action = {
    type: string,
    payload: any
}



const userRegister = (state: State=initialState.userRegister, action: Action) =>{
    switch(action.type){
        case LOADREGISTER:
            return {loading: true, data: null, success: false, error: false}
        case SUCCESSREGISTER:
            return {loading: true, data: action.payload, success: true, error: false}
        case ERRORREGISTER:
            return {loading: true, data: null, success: false, error: false}
        default:
            return state
    }
}

export default userRegister