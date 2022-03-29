import axios from "axios"
import { ERRORLOGIN, ERRORREGISTER, LOADLOGIN, LOADREGISTER, SUCCESSLOGIN, SUCCESSREGISTER, USERLOADING, USERSUCCESS } from "../actionTypes"

export const register = (email: string, password: string) => async (dispatch:any) => {
	try {
		dispatch({ type: LOADREGISTER })
        const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}
		const { data } = await axios.post('https://reqres.in/api/register', {email, password}, config)
        localStorage.setItem('novalabuser', data.token)
		dispatch({type: SUCCESSREGISTER, payload: data})
		dispatch({type: USERSUCCESS, payload: data.token})
	} catch (error: any) {
        {error.response.data.error && dispatch({type: ERRORREGISTER, payload: error.response && error.response.data.error
            ? error.response.data.error
            : error.message})}
	}
}

export const login = (email: string, password: string) => async (dispatch:any) => {
	try {
		dispatch({ type: LOADLOGIN })
        const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}
		const { data } = await axios.post('https://reqres.in/api/login', {email, password}, config)
        localStorage.setItem('novalabuser', data.token)
		dispatch({type: SUCCESSLOGIN, payload: data})
		dispatch({type: USERSUCCESS, payload: data.token})
	} catch (error: any) {
        {error.response.data.error && dispatch({type: ERRORLOGIN, payload: error.response && error.response.data.error
            ? error.response.data.error
            : error.message})}
	}
}

export const logout = () => (dispatch: any) =>{
	dispatch({ type: LOADREGISTER })
	dispatch({ type: LOADLOGIN })
	dispatch({ type: USERLOADING })
	localStorage.removeItem('novalabuser')
}