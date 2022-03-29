import { combineReducers } from "redux";
import mainDataReducer from "./mainDataReducer";
import smallDataReducer from "./smallDataReducer";
import userRegister from "./useRegister";
import userLogin from "./userLogin";
import userReducer from "./userReducer";



const reducer = combineReducers({
    user: userReducer,
    smallData: smallDataReducer,
    mainData: mainDataReducer,
    userRegister: userRegister,
    userLogin: userLogin,
})

export type RootState = ReturnType<typeof reducer>

export default reducer

