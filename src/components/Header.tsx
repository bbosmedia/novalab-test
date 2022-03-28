import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'

const Header = () => {
  return (
    <header>
        <Container>
            <nav className='nav-bar'>
                <Link className='logo' to='/'>NovaLab</Link>
                <ul className='nav-list'>
                  <li className='nav-item'>
                    <Link to='/sign-in' className='nav-link'>Log In</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/sign-up' className='nav-link'>Registration</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/profile' className='nav-link'>Profile</Link>
                  </li>
                  <li className='nav-item'>
                    <p className='nav-link'>Log Out</p>
                  </li>
                </ul>
            </nav>
        </Container>
    </header>
  )
}

export default Header