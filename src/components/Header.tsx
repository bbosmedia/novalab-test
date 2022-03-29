import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/actions/userReducer'
import { RootState } from '../redux/reducers'
import Container from './Container'

const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
	return (
		<header>
			<Container>
				<nav className="nav-bar">
					<Link className="logo" to="/">
						NovaLab
					</Link>
					<ul className="nav-list">
						{user.data === null && (
							<li className="nav-item">
								<Link to="/sign-in" className="nav-link">
									Log In
								</Link>
							</li>
						)}
						{user.data === null && (
							<li className="nav-item">
								<Link to="/sign-up" className="nav-link">
									Registration
								</Link>
							</li>
						)}

						{user.data !== null && (
							<>
								<li className="nav-item">
									<Link to="/profile" className="nav-link">
										Profile
									</Link>
								</li>
								<li className="nav-item">
									<p onClick={()=>dispatch(logout())} className="nav-link">Log Out</p>
								</li>
							</>
						)}
					</ul>
				</nav>
			</Container>
		</header>
	)
}

export default Header
