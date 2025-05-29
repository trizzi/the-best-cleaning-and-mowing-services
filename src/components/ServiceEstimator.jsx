// components/ServiceEstimator.jsx
import { useState } from 'react';

export default function ServiceEstimator() {
	const [hours, setHours] = useState(1);
	const [service, setService] = useState('');
	const [price, setPrice] = useState(null);

	const prices = {
		'Domestic Cleaning': 20,
		'End of Tenancy': 30,
		'Garden Mowing': 15,
	};

	const estimate = () => setPrice(prices[service] * hours);

	return (
		<div className='max-w-lg mx-auto p-6 bg-white rounded-xl shadow mt-10'>
			<h2 className='text-2xl font-bold mb-4 text-green-700'>
				Estimate Your Service
			</h2>
			<select
				onChange={(e) => setService(e.target.value)}
				className='w-full p-3 border rounded mb-4'>
				<option value=''>Select Service</option>
				{Object.keys(prices).map((item) => (
					<option
						key={item}
						value={item}>
						{item}
					</option>
				))}
			</select>
			<input
				type='number'
				min='1'
				value={hours}
				onChange={(e) => setHours(e.target.value)}
				className='w-full p-3 border rounded mb-4'
			/>
			<button
				onClick={estimate}
				className='w-full p-3 bg-green-700 text-white rounded hover:bg-green-800'>
				Get Estimate
			</button>
			{price !== null && (
				<p className='mt-4 text-lg text-green-700 font-bold'>
					Estimated Price: £{price}
				</p>
			)}
		</div>
	);
}
