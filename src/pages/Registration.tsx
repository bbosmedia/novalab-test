import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import SmallContainer from '../components/SmallContainer'
import { validateEmail } from '../extrafunctions/validations'
import { register } from '../redux/actions/userReducer'
import { RootState } from '../redux/reducers'

interface Input {
	email: string
	password: string
	confirmpassword: string
}



const Registration = () => {
	const navigate = useNavigate()
	const [input, setInput] = useState<Input>({
		email: '',
		password: '',
		confirmpassword: '',
	})

	const dispatch = useDispatch()
	const data = useSelector((state:RootState)=>state.userRegister)
	const user = useSelector((state:RootState)=>state.user)
    const [emv, setEmv] = useState<boolean>(false)
    const [pv, setPv] = useState<boolean>(false)
    const [cpv, setCpv] = useState<boolean>(false)
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput({ ...input, [e.target.name]: e.target.value })
        if(e.target.name === 'email'){
            setEmv(false)
        }

        if(e.target.name === 'password'){
            setPv(false)
        }

        if(e.target.name === 'confirmpassword'){
            setCpv(false)
        }
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

        if (validateEmail(input.email)) {
            setEmv(false)
        } else {
            setEmv(true);
        }

        if (input.password.length > 5) {
            setPv(false)
        } else {
            setPv(true);
        }

        if (input.password === input.confirmpassword) {
            setCpv(false)
        } else {
            setCpv(true);
        }

		if(validateEmail(input.email) && input.password === input.confirmpassword && input.password.length > 5){
			dispatch(register(input.email,input.password))
		}
	}

	useEffect(()=>{
		if(user.data){
			navigate('/')
		}
	}, [user])
	return (
		<div className="registration">
			<SmallContainer>
				<h2 className="text-center site-title">Registration</h2>
				<form onSubmit={handleSubmit}>
					<div className="input-item">
						<label htmlFor="email">Email*</label>
						<input id="email" name="email" type="email" value={input.email} onChange={handleChange} required placeholder="Enter your email..." />
						{emv && <p className="error-text">Not valid email...</p>}
					</div>
					<div className="input-item">
						<label htmlFor="password">Password*</label>
						<input id="password" name="password" type="password" value={input.password} onChange={handleChange} required placeholder="Enter your password..." />
						{pv && <p className="error-text">Password must be more than 6 characters.</p>}
					</div>
					<div className="input-item">
						<label htmlFor="confirmpassword">Confirm Password*</label>
						<input id="confirmpassword" name="confirmpassword" type="password" value={input.confirmpassword} onChange={handleChange} required placeholder="Enter your confirm password..." />
						{cpv && <p className="error-text">The password confirmation does not match.</p>}
					</div>
					{data.error && <p className='error-text'>{data.data}</p>}
					<button type="submit" className="primary-large-btn">
						Sign Up
					</button>
				</form>
				<p className="small-text">
					If you have account, please <Link to="/sign-in">Log In</Link>
				</p>
			</SmallContainer>
		</div>
	)
}

export default Registration
