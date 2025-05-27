import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import Footer from './components/FooterTop';
import './App.css';

function App() {
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<Router>
			<div className='bg-gray-50 min-h-screen'>
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
				<Footer />
			</div>
		</Router>
	);
}

export default App;
