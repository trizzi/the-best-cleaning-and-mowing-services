import React from 'react';
import { Card, CardContent } from './Card';
import sample1 from '../assets/sample1.jpg';
import sample2 from '../assets/sample2.jpg';
import sample3 from '../assets/sample3.jpg';
import sample4 from '../assets/KytNNnxDfnK-iqqXiX5qF 1.svg';
import sample5 from '../assets/_PHFrTNKOKIS34X7fw1Bj 1.svg';
import sample6 from '../assets/darek-baranowski-wDpTJjffxS8-unsplash.jpg';

// Replace these with your new images later
import sample7 from '../assets/cdc-VRpjDw3WqqI-unsplash.jpg';
import sample8 from '../assets/georgi-zvezdov-jswzv99_k4o-unsplash.jpg';
import sample9 from '../assets/sample3.jpg';
import sample10 from '../assets/alex-tyson-bagSOlTC01o-unsplash.jpg';
import sample11 from '../assets/pGosXGswbyJWuOo72ZgaA 1.svg';
import sample12 from '../assets/frames-for-your-heart-JDBVXignFdA-unsplash.jpg';
import sample13 from '../assets/CvMxMP_O1Q6mnF1epMm3l 1.svg';
import sample14 from '../assets/sample4.jpg';
import sample15 from '../assets/sample5 copy.jpg';
import ServiceEstimator from './ServiceEstimator';

export default function ServicesPage() {
	const services = [
		{
			title: 'Domestic Cleaning',
			image: sample1,
			desc: 'Thorough house cleaning for kitchens, bedrooms, bathrooms and lounges.',
		},
		{
			title: 'Office & Commercial Cleaning',
			image: sample9,
			desc: 'Reliable cleaning services for office spaces and commercial premises.',
		},
		{
			title: 'End of Tenancy Cleaning',
			image: sample15,
			desc: 'Detailed move-in and move-out cleaning for landlords and tenants.',
		},
		{
			title: 'Lawn Mowing & Garden Care',
			image: sample4,
			desc: 'Professional grass cutting and garden maintenance services.',
		},
		{
			title: 'Pressure Washing',
			image: sample5,
			desc: 'Driveway, patio, and exterior cleaning using high-pressure washers.',
		},
		{
			title: 'Carpet & Upholstery Cleaning',
			image: sample6,
			desc: 'Deep cleaning of carpets, rugs, and upholstered furniture.',
		},
		{
			title: 'Window Cleaning',
			image: sample7,
			desc: 'Streak-free window cleaning for homes and businesses.',
		},
		{
			title: 'Gutter Cleaning',
			image: sample8,
			desc: 'Clear blocked gutters and prevent damage with regular cleaning.',
		},
		{
			title: 'After-Builder Cleaning',
			image: sample9,
			desc: 'Remove dust, debris, and residue after renovation work.',
		},
		{
			title: 'Oven & Appliance Cleaning',
			image: sample10,
			desc: 'Restore kitchen appliances to sparkling condition.',
		},
		{
			title: 'Garden Waste Removal',
			image: sample11,
			desc: 'Quick and tidy removal of grass, branches, and garden waste.',
		},
		{
			title: 'Move-in/Move-out Cleaning',
			image: sample12,
			desc: 'Detailed cleaning service before or after your move.',
		},
		{
			title: 'Patio & Decking Care',
			image: sample13,
			desc: 'Maintain clean and safe outdoor spaces all year round.',
		},
		{
			title: 'Commercial Grounds Care',
			image: sample8,
			desc: 'Professional upkeep for your business premises exterior.',
		},
		{
			title: 'Deep Sanitisation Services',
			image: sample15,
			desc: 'Intensive sanitisation for residential and commercial properties.',
		},
	];
	const plans = [
		{
			title: 'Basic Plan',
			price: '£50/mo',
			benefits: ['2 Cleaning Sessions', 'Basic Garden Care'],
		},
		{
			title: 'Standard Plan',
			price: '£80/mo',
			benefits: ['4 Cleaning Sessions', 'Lawn Mowing', 'Priority Support'],
		},
		{
			title: 'Premium Plan',
			price: '£120/mo',
			benefits: ['Unlimited Cleaning', 'Full Garden Care', '24/7 Support'],
		},
	];

	return (
		<div className='bg-white text-gray-800 p-6 max-w-7xl mx-auto'>
			<header className='text-center mb-10'>
				<h1 className='text-4xl font-bold text-green-700'>Our Services</h1>
				<p className='mt-4 text-lg'>
					Top-quality cleaning & mowing services in London
				</p>
			</header>

			<section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{services.map(({ title, image, desc }) => (
					<Card
						key={title}
						className='shadow-lg hover:shadow-2xl hover:scale-[1.02] transition duration-300'>
						<CardContent>
							<img
								src={image}
								alt={title}
								className='rounded-xl mb-4 h-48 w-full object-cover'
							/>
							<h2 className='text-xl font-semibold mb-2'>{title}</h2>
							<p className='text-gray-600 text-sm mb-4'>{desc}</p>
							<button className='inline-block bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-lg text-sm transition'>
								Get a Quote
							</button>
						</CardContent>
					</Card>
				))}
			</section>

			<section className='max-w-5xl mx-auto p-6 bg-white rounded-xl shadow mt-10'>
				<h2 className='text-2xl font-bold mb-4 text-green-700 text-center'>
					Our Service Plans
				</h2>
				<div className='grid md:grid-cols-3 gap-6'>
					{plans.map((plan, i) => (
						<div
							key={i}
							className='border p-4 rounded-lg text-center'>
							<h3 className='text-xl font-semibold mb-2'>{plan.title}</h3>
							<p className='text-2xl font-bold mb-4'>{plan.price}</p>
							<ul className='text-left space-y-2 mb-4'>
								{plan.benefits.map((benefit, j) => (
									<li key={j}>✅ {benefit}</li>
								))}
							</ul>
							<button className='bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800'>
								Subscribe
							</button>
						</div>
					))}
				</div>
			</section>

			<ServiceEstimator />
		</div>
	);
}
