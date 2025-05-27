export default function AreasCovered() {
	const areas = [
		'Barnet',
		'Bexley',
		'Brent',
		'Bromley',
		'Camden',
		'Croydon',
		'Ealing',
		'Enfield',
		'Greenwich',
		'Hackney',
		'Hammersmith and Fulham',
		'Haringey',
		'Harrow',
		'Havering',
		'Hillingdon',
		'Hounslow',
		'Islington',
		'Kensington and Chelsea',
		'Kingston upon Thames',
		'Lambeth',
		'Lewisham',
		'Merton',
		'Newham',
		'Redbridge',
		'Richmond upon Thames',
		'Southwark',
		'Sutton',
		'Tower Hamlets',
		'Waltham Forest',
		'Wandsworth',
		'Westminster',
		'City of London',
	];

	return (
		<section className='py-12 bg-gray-50 text-green-800'>
			<div className='max-w-6xl mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-8'>
					Areas We Cover in London
				</h2>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-lg'>
					{areas.map((area, index) => (
						<div
							key={index}
							className='p-3 border border-green-300 rounded-md bg-white shadow-sm hover:bg-green-50 transition'>
							{area}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
