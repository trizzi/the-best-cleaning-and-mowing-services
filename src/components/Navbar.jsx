import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggle }) => {
	return (
		<nav>
			<div className='bg-green-700 text-white flex justify-between items-center p-4'>
				<Link
					to='#'
					className='pl-2 shrink-0'>
					<h1 className='text-2xl font-bold'>The Best Cleaning & Mowing</h1>
				</Link>
				<div
					className='px-8 cursor-pointer md:hidden'
					onClick={toggle}>
					<i className='fas fa-bars'></i>
				</div>
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
			</div>
		</nav>
	);
};

export default Navbar;
