import React from 'react';
import { Button } from './Button';

export default function ContactPage() {
	return (
		<div className='bg-white text-gray-800 p-6 max-w-3xl mx-auto'>
			<header className='text-center mb-10'>
				<h1 className='text-4xl font-bold text-green-700'>Contact Us</h1>
				<p className='mt-4 text-lg'>
					Get in touch for a free quote or to book a service
				</p>
			</header>

			<form className='space-y-6'>
				<div>
					<label className='block mb-2 font-semibold'>Name</label>
					<input
						type='text'
						className='w-full border p-3 rounded-xl'
						placeholder='Your full name'
						required
					/>
				</div>

				<div>
					<label className='block mb-2 font-semibold'>Email</label>
					<input
						type='email'
						className='w-full border p-3 rounded-xl'
						placeholder='your@email.com'
						required
					/>
				</div>

				<div>
					<label className='block mb-2 font-semibold'>Phone Number</label>
					<input
						type='tel'
						className='w-full border p-3 rounded-xl'
						placeholder='Your phone number'
						required
					/>
				</div>

				<div>
					<label className='block mb-2 font-semibold'>Your Message</label>
					<textarea
						className='w-full border p-3 rounded-xl'
						rows='5'
						placeholder='Let us know what you need...'
						required></textarea>
				</div>

				<Button
					type='submit'
					className='text-lg p-4 bg-green-600 hover:bg-green-700 text-white w-full'>
					Send Message
				</Button>
			</form>

			<div className='mt-10 text-center'>
				<p className='text-lg font-semibold mb-2'>📞 020 1234 5678</p>
				<p className='mb-2'>📧 info@thebestcleaningmowing.co.uk</p>
				{/* <p>📍 Harrow, Greater London</p> */}
			</div>
		</div>
	);
}
