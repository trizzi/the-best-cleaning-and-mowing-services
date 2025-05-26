import React from 'react';
import { Card, CardContent } from './Card';
import sample1 from '../assets/sample1.jpg';
import sample2 from '../assets/sample2.jpg';
import sample3 from '../assets/sample3.jpg';
import sample4 from '../assets/sample4.jpg';
import sample5 from '../assets/sample5 copy.jpg';
import sample6 from '../assets/sample6.jpg';

export default function ServicesPage() {
	const services = [
		{
			title: 'Domestic Cleaning',
			image: sample1,
			desc: 'Thorough house cleaning for kitchens, bedrooms, bathrooms and lounges.',
		},
		{
			title: 'Office & Commercial Cleaning',
			image: sample2,
			desc: 'Reliable cleaning services for office spaces and commercial premises.',
		},
		{
			title: 'End of Tenancy Cleaning',
			image: sample3,
			desc: 'Detailed move-in and move-out cleaning for landlords and tenants.',
		},
		{
			title: 'Lawn Mowing & Garden Care',
			image: sample6,
			desc: 'Professional grass cutting and garden maintenance services.',
		},
		{
			title: 'Pressure Washing',
			image: sample5,
			desc: 'Driveway, patio, and exterior cleaning using high-pressure washers.',
		},
		{
			title: 'Carpet & Upholstery Cleaning',
			image: sample4,
			desc: 'Deep cleaning of carpets, rugs, and upholstered furniture.',
		},
	];

	return (
		<div className='bg-white text-gray-800 p-6 max-w-7xl mx-auto'>
			<header className='text-center mb-10'>
				<h1 className='text-4xl font-bold text-green-700'>Our Services</h1>
				<p className='mt-4 text-lg'>
					Top-quality cleaning & mowing services in Harrow, London
				</p>
			</header>

			<section className='grid md:grid-cols-3 gap-6'>
				{services.map(({ title, image, desc }) => (
					<Card
						key={title}
						className='shadow-lg'>
						<CardContent>
							<img
								src={image}
								alt={title}
								className='rounded-xl mb-4'
							/>
							<h2 className='text-xl font-semibold'>{title}</h2>
							<p className='text-gray-600 mt-2'>{desc}</p>
						</CardContent>
					</Card>
				))}
			</section>
		</div>
	);
}
