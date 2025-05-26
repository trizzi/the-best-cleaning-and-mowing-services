import React from 'react';

const GetAQuotePage = () => {
	return (
		<div className='bg-green-700 text-center text-white p-16 flex flex-col items-center justify-center min-h-screen'>
			<div className='mb-8 animate-fadeIn'>
				<h1 className='text-4xl md:text-5xl font-bold mb-4 leading-snug'>
					Book a professional cleaning service in Harrow <br /> and enjoy a
					fresh and neat home!
				</h1>
				<p className='text-lg mt-2'>
					Fast, friendly, and reliable cleaning services near you.
				</p>
			</div>

			<div className='flex flex-wrap justify-center gap-6 animate-fadeIn delay-300'>
				<button className='bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out shadow-lg'>
					Book Now!
				</button>
				<button className='bg-white hover:bg-gray-100 text-green-700 py-3 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out shadow-lg'>
					Get a Quote
				</button>
			</div>
		</div>
	);
};

export default GetAQuotePage;
