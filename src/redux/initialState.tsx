import userRegister from "./reducers/useRegister"

interface User{
    loading: boolean
    data?: any,
    error: boolean
}

interface MainData{
    data: any
    current: number
    total: number
}

interface SmallData{
    loading: boolean
    data?:any
    error: boolean
}

interface UserRegister{
    loading: boolean;
    data?: any,
    success: boolean,
    error: boolean;
}

interface InitialState{
    user: User,
    mainData: MainData,
    smallData: SmallData,
    userRegister: UserRegister,
    userLogin: UserRegister
}



const initialState: InitialState = {
    user: {loading: false, data: localStorage.getItem('novalabuser') ? JSON.stringify(localStorage.getItem('novalabuser')) : null, error: false},
    mainData: {data: [], current: 1, total: 1},
    smallData: {loading: false, data: null, error: false},
    userRegister: {loading: false, data: null, success: false, error: false},
    userLogin: {loading: false, data: null, success: false, error: false}
}

export default initialState