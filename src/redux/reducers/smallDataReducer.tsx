import { ERROR, LOAD, SUCCESS } from "../actionTypes"

type Action = {
    type: string,
    payload: null | any
}

type State = {
    loading: boolean,
    data?: any,
    error: boolean
}

const smallDataReducer = (state:State={loading: false, data: null, error: false}, action:Action)=>{
    switch(action.type){
        case LOAD:
            return {loading: true, data: null, error: false}
        case SUCCESS:
            return {loading: false, data: action.payload, error: false }
        case ERROR:
            return {loading: false, data: action.payload, error: true }
        default:
            return state
    }
}

export default smallDataReducer