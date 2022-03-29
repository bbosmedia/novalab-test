import axios from "axios"
import { ERRORREGISTER, LOADREGISTER, SUCCESSREGISTER, USERLOADING, USERSUCCESS } from "../actionTypes"

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

export const logout = () => (dispatch: any) =>{
	dispatch({ type: LOADREGISTER })
	dispatch({ type: USERLOADING })
	localStorage.removeItem('novalabuser')
}