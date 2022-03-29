import { ERRORLOGIN, LOADLOGIN, SUCCESSLOGIN } from "../actionTypes";
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



const userLogin = (state: State=initialState.userLogin, action: Action) =>{
    switch(action.type){
        case LOADLOGIN:
            return {loading: true, data: null, success: false, error: false}
        case SUCCESSLOGIN:
            return {loading: false, data: action.payload, success: true, error: false}
        case ERRORLOGIN:
            return {loading: false, data: action.payload, success: false, error: true}
        default:
            return state
    }
}

export default userLogin