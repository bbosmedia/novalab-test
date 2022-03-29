import axios from "axios"
import { ERROR, LOAD, LOADDATA, LOADMOREDATA, RESTARTDATA, SUCCESS } from "../actionTypes"



export const loaddata = () => async (dispatch:any) => {
	try {
		dispatch({ type: LOAD })
		dispatch({ type: RESTARTDATA})

		const { data } = await axios.get('https://reqres.in/api/users?page=1')
		dispatch({type: SUCCESS, payload: data})
		dispatch({type: LOADDATA, payload: data})
	} catch (error) {
		dispatch({type: ERROR, payload: error})
	}
}

export const loadmore = (page:number) => async (dispatch:any) => {
	try {
		dispatch({ type: LOAD })

		const { data } = await axios.get(`https://reqres.in/api/users?page=${page}`)
		dispatch({type: SUCCESS, payload: data})
		dispatch({type: LOADMOREDATA, payload: data})
	} catch (error) {
		dispatch({type: ERROR, payload: error})
	}
}

