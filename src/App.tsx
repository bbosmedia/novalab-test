import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Registration from './pages/Registration'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign-up" element={<Registration />} />
				<Route path="/sign-in" element={<Login />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</>
	)
}

export default App
