import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './Card';
import Reviews from './Reviews';
import GetAQuotePage from './GetAQuotePage';
import showcaseImg from '../assets/showcase-img copy 1.png';
import AreasCovered from './AreasCovered';
import FaqAccordion from './Faqs';
import sample1 from '../assets/sample1.jpg';
import sample2 from '../assets/sample2.jpg';
import sample3 from '../assets/sample5 copy.jpg';

export default function HomePage() {
	const services = [
		{
			title: 'Domestic Cleaning',
			image: sample1,
		},
		{
			title: 'End of Tenancy Cleaning',
			image: sample3,
		},
		{
			title: 'Garden Mowing & Care',
			image: sample2,
		},
	];

	return (
		<>
			<div>
				<div className='bg-white top-0 left-3/4 ml-20 lg:ml-52 rounded-full z-10'></div>

				<div className='relative'>
					<div className='absolute top-0 left-3/4 ml-20 lg:ml-52 rounded-full z-10'></div>

					<div className='container z-20 relative p-4 mx-auto md:px-20 md:flex md:justify-around md:items-center font-mulish'>
						<div className='relative flex flex-col w-full md:w-1/2 px-10 sm:px-1 md:pr-20 pt-20'>
							<h1 className='text-3xl md:text-3xl xl:text-5xl font-bold w-full lg:w-4/5 py-5 md:py-1 text-blue-600'>
								<div>The Best Cleaning & Mowing Services</div>
							</h1>
							<div className='relative md:text-xl pt-3 py-10 bg-white'>
								professional cleaning and lawn care services in Harrow, London
							</div>
							<p>
								<Link to='#'>
									<button className='bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out'>
										Get a Quote
									</button>
								</Link>
							</p>
						</div>

						<div
							axis='x'
							className='w-full max-w-sm h-auto mx-auto rounded-xl shadow-md'>
							<img
								src={showcaseImg}
								alt='Showcase-img'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-white text-gray-800 p-6 max-w-7xl mx-auto'>
				<header className='text-center mb-10'>
					<h1 className='text-4xl font-bold text-blue-600'>
						The Best Cleaning & Mowing Services
					</h1>
				</header>

				<section className='grid md:grid-cols-3 gap-6'>
					{services.map(({ title, image }) => (
						<Card
							key={title}
							className='rounded-lg overflow-hidden shadow-lg bg-white'>
							<CardContent>
								<img
									src={image}
									alt={title}
									className='rounded-xl h-64 w-full object-cover mb-4'
								/>
								<h2 className='text-xl font-semibold'>{title}</h2>
							</CardContent>
						</Card>
					))}
				</section>
			</div>
			<GetAQuotePage />
			<Reviews />
			<AreasCovered />
			<FaqAccordion />
		</>
	);
}
