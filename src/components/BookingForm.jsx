import { useState } from 'react';

export default function BookingForm({ handleClose }) {
	const [form, setForm] = useState({
		name: '',
		email: '',
		service: '',
		date: '',
	});

	const handleChange = (e) =>
		setForm({ ...form, [e.target.name]: e.target.value });
	const handleSubmit = (e) => {
		e.preventDefault();
		alert('Booking submitted! 📦');
	};

	return (
		<div className='max-w-lg mx-auto p-6 bg-white rounded-xl shadow mt-10 relative'>
			{/* Close button */}
			<button
				onClick={handleClose}
				className='absolute top-3 right-3 text-green-700 text-2xl font-bold hover:text-red-500'
				aria-label='Close'>
				&times;
			</button>

			<h2 className='text-2xl font-bold mb-4 text-green-700'>Book a Service</h2>
			<form
				onSubmit={handleSubmit}
				className='space-y-4'>
				<input
					type='text'
					name='name'
					placeholder='Name'
					required
					onChange={handleChange}
					className='w-full p-3 text-green-700  border border-green-700 rounded'
				/>
				<input
					type='email'
					name='email'
					placeholder='Email'
					required
					onChange={handleChange}
					className='w-full p-3 text-green-700 border border-green-700 rounded'
				/>
				<select
					name='service'
					onChange={handleChange}
					required
					className='w-full p-3 text-green-700 border  border-green-700 rounded'>
					<option value=''>Select Service</option>
					<option value='Domestic Cleaning'>Domestic Cleaning</option>
					<option value='End of Tenancy'>End of Tenancy Cleaning</option>
					<option value='Garden Mowing'>Garden Mowing</option>
				</select>
				<input
					type='date'
					name='date'
					required
					onChange={handleChange}
					className='w-full p-3 text-green-700 border border-green-700 rounded'
				/>
				<button
					type='submit'
					className='w-full p-3 bg-green-700 text-white rounded hover:bg-green-800'>
					Book Now
				</button>
			</form>
		</div>
	);
}
