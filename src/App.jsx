import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import './App.css';

function App() {
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<Router>
			<div className='bg-gray-50 min-h-screen'>
				{/* <nav className='bg-green-700 text-white p-4 flex justify-between items-center'>
					<h1 className='text-2xl font-bold'>The Best Cleaning & Mowing</h1>
					<div className='space-x-6'>
						<Link
							to='/'
							className='hover:underline'>
							Home
						</Link>
						<Link
							to='/services'
							className='hover:underline'>
							Services
						</Link>
						<Link
							to='/contact'
							className='hover:underline'>
							Contact
						</Link>
					</div>
				</nav> */}
				<Navbar toggle={toggle} />
				<Routes>
					<Route
						path='/'
						element={<HomePage />}
					/>
					<Route
						path='/services'
						element={<ServicesPage />}
					/>
					<Route
						path='/contact'
						element={<ContactPage />}
					/>
				</Routes>

				<footer className='bg-green-700 text-white p-6 text-center mt-10'>
					&copy; 2025 The Best Cleaning and Mowing Services — Harrow, London.
				</footer>
			</div>
		</Router>
	);
}

export default App;
