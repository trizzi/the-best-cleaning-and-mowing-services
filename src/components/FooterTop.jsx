import {
	Facebook,
	Twitter,
	Instagram,
	Phone,
	Mail,
	MapPin,
} from 'lucide-react';

export default function Footer() {
	return (
		<footer className='bg-green-700 text-white py-8 mt-16'>
			<div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8'>
				{/* About / Branding */}
				<div>
					<h2 className='text-xl font-bold mb-4'>
						The Best Cleaning & Mowing Services
					</h2>
					<p>
						Delivering top-quality cleaning and mowing services to homes and
						businesses in London.
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h2 className='text-lg font-semibold mb-4'>Quick Links</h2>
					<ul className='space-y-2'>
						<li>
							<a
								href='/'
								className='hover:underline'>
								Home
							</a>
						</li>

						<li>
							<a
								href='/services'
								className='hover:underline'>
								Our Services
							</a>
						</li>
						<li>
							<a
								href='/contact'
								className='hover:underline'>
								Contact Us
							</a>
						</li>
					</ul>
				</div>

				{/* Contact + Socials */}
				<div>
					<h2 className='text-lg font-semibold mb-4'>Contact Us</h2>
					<ul className='space-y-3 text-sm'>
						<li className='flex items-center gap-2'>
							<Phone size={18} /> <span>+44 7700 900123</span>
						</li>
						<li className='flex items-center gap-2'>
							<Mail size={18} /> <span>info@bestcleaningmowing.co.uk</span>
						</li>
						{/* <li className='flex items-center gap-2'>
							<MapPin size={18} /> <span>123 Harrow Road, London, UK</span>
						</li> */}
					</ul>

					<div className='flex gap-4 mt-4'>
						<a
							href='#'
							aria-label='Facebook'
							className='hover:text-gray-200'>
							<Facebook size={22} />
						</a>
						<a
							href='#'
							aria-label='Twitter'
							className='hover:text-gray-200'>
							<Twitter size={22} />
						</a>
						<a
							href='#'
							aria-label='Instagram'
							className='hover:text-gray-200'>
							<Instagram size={22} />
						</a>
					</div>
				</div>
			</div>

			<div className='border-t border-green-600 mt-8 pt-4 text-center text-sm'>
				<p>
					&copy; {new Date().getFullYear()} The Best Cleaning and Mowing
					Services. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
