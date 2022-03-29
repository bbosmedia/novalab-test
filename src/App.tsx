import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign-up" element={<Registration />} />
				<Route path="/sign-in" element={<Login />} />
			</Routes>
		</>
	)
}

export default App
