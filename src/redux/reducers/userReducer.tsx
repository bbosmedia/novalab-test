import { USERERROR, USERLOADING, USERSUCCESS } from "../actionTypes";
import initialState from "../initialState";


type State ={
    loading: boolean;
    data?: any
    error: boolean;
}

type Action = {
    type: string,
    payload: any
}



const userReducer = (state: State = initialState.user, action: Action) =>{
    switch(action.type){
        case USERLOADING:
            return {loading: true, data: null, error: false}
        case USERSUCCESS:
            return {loading: false, data: action.payload, error: false}
        case USERERROR:
            return {loading: false, data: action.payload, error: true}
        default:
            return state
    }
}

export default userReducer