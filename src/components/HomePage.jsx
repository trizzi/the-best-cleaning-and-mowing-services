import React from 'react';
import { Card, CardContent } from './Card';

export default function HomePage() {
	const services = [
		{ title: 'Domestic Cleaning', image: '/images/domestic-cleaning.png' },
		{ title: 'End of Tenancy Cleaning', image: '/images/end-of-tenancy.png' },
		{ title: 'Garden Mowing & Care', image: '/images/lawn-mowing.png' },
	];

	return (
		<div className='bg-white text-gray-800 p-6 max-w-7xl mx-auto'>
			<header className='text-center mb-10'>
				<h1 className='text-4xl font-bold text-green-700'>
					The Best Cleaning & Mowing Services
				</h1>
				<p className='mt-4 text-lg'>
					Serving Harrow and the surrounding areas with top-tier cleaning and
					lawn care solutions.
				</p>
				<img
					src='/images/homepage-hero.png'
					alt='Cleaning and Mowing Services'
					className='rounded-xl mt-6 mx-auto'
				/>
			</header>

			<section className='grid md:grid-cols-3 gap-6'>
				{services.map(({ title, image }) => (
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
						</CardContent>
					</Card>
				))}
			</section>
		</div>
	);
}
