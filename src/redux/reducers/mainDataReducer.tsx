import { LOADDATA, LOADMOREDATA, RESTARTDATA } from "../actionTypes"


type State = {
    data: any,
    current: number,
    total: number
}

type Action = {
    payload: null | any,
    type: string
}


const mainDataReducer = (state:State={data: [], current: 1, total: 1}, action: Action) =>{
    switch(action.type){
        case RESTARTDATA:
            return {data: [], current: 1, total: 1}
        case LOADDATA:
            return {data: action.payload.data, current: action.payload.page, total: action.payload.total_pages}
        case LOADMOREDATA:
            return {data: [...state.data, ...action.payload.data], current: action.payload.page, total: action.payload.total_pages}
        default:
            return state
    }
}

export default mainDataReducer