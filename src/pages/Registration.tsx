import React from 'react'
import { Link } from 'react-router-dom'
import SmallContainer from '../components/SmallContainer'

const Registration = () => {
  return (
    <div className='registration'>
        <SmallContainer>
            <h2 className='text-center site-title'>Registration</h2>
            <form>
                <div className='input-item'>
                    <label htmlFor="email">Email*</label>
                    <input id='email' type="email" required placeholder='Enter your email...' />
                </div>
                <div className='input-item'>
                    <label htmlFor="password">Password*</label>
                    <input id='password' type="password" required placeholder='Enter your password...' />
                </div>
                <div className='input-item'>
                    <label htmlFor="confirmpassword">Confirm Password*</label>
                    <input id='confirmpassword' type="password" required placeholder='Enter your confirm password...' />
                </div>
                <button type='submit' disabled className='primary-large-btn'>Sign Up</button>
            </form>
            <p className="small-text">If you have account, please <Link to='/sign-in'>Log In</Link></p>
        </SmallContainer>
    </div>
  )
}

export default Registration