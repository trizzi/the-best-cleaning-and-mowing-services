import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // install with: npm install lucide-react

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<nav className='bg-green-700 text-white'>
			<div className='flex justify-between items-center p-4 max-w-7xl mx-auto'>
				<Link
					to='/'
					className='text-2xl font-bold'>
					The Best Cleaning & Mowing
				</Link>

				{/* Hamburger */}
				<div
					className='md:hidden cursor-pointer'
					onClick={() => setNavOpen(!navOpen)}>
					{navOpen ? <X size={28} /> : <Menu size={28} />}
				</div>

				{/* Desktop Menu */}
				<div className='hidden md:flex space-x-6 font-semibold'>
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
			</div>

			{/* Mobile Menu */}
			{navOpen && (
				<div className='md:hidden flex flex-col items-center space-y-4 py-4 text-lg font-medium bg-green-800'>
					<Link
						to='/'
						onClick={() => setNavOpen(false)}>
						Home
					</Link>
					<Link
						to='/services'
						onClick={() => setNavOpen(false)}>
						Services
					</Link>
					<Link
						to='/contact'
						onClick={() => setNavOpen(false)}>
						Contact
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
