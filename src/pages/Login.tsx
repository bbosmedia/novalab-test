import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import SmallContainer from '../components/SmallContainer'
import { validateEmail } from '../extrafunctions/validations'
import { RootState } from '../redux/reducers'

interface Input {
	email: string
	password: string
}

const Login = () => {
	const navigate = useNavigate()
	const user = useSelector((state:RootState)=>state.user)
	const [input, setInput] = useState<Input>({
		email: '',
		password: '',
	})
	const [emv, setEmv] = useState<boolean>(false)
	const [pv, setPv] = useState<boolean>(false)
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput({ ...input, [e.target.name]: e.target.value })
		if (e.target.name === 'email') {
			setEmv(false)
		}
		if (e.target.name === 'password') {
			setPv(false)
		}
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (validateEmail(input.email)) {
			setEmv(false)
		} else {
			setEmv(true)
		}

		if (input.password.length > 5) {
			setPv(false)
		} else {
			setPv(true)
		}
	}

	useEffect(()=>{
		if(user.data){
			navigate('/')
		}
	}, [user])
	return (
		<div className="login">
			<SmallContainer>
				<h2 className="text-center site-title">Log In</h2>
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
					<button type="submit" className="primary-large-btn">
						Sign Up
					</button>
				</form>
				<p className="small-text">
					If you have not account, please <Link to="/sign-up">Register</Link>
				</p>
			</SmallContainer>
		</div>
	)
}

export default Login
