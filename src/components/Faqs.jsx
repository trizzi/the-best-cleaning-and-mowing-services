// components/FaqAccordion.jsx
import { useState } from 'react';

export default function FaqAccordion() {
	const [openIndex, setOpenIndex] = useState(null);

	const faqs = [
		{
			q: 'Do you bring your own cleaning equipment?',
			a: 'Yes, our team arrives fully equipped.',
		},
		{ q: 'Can I book for weekends?', a: 'Absolutely — we work 7 days a week!' },
		{
			q: 'Is your service insured?',
			a: 'Yes, we are fully insured for peace of mind.',
		},
	];

	return (
		<div className='max-w-xl mx-auto p-6 bg-white rounded-xl shadow mt-10'>
			<h2 className='text-2xl font-bold mb-4 text-green-700'>FAQs</h2>
			{faqs.map((item, i) => (
				<div
					key={i}
					className='border-b'>
					<button
						onClick={() => setOpenIndex(openIndex === i ? null : i)}
						className='flex justify-between items-center w-full py-3 text-left'>
						<span>{item.q}</span>
						<span>{openIndex === i ? '-' : '+'}</span>
					</button>
					{openIndex === i && <p className='pb-3 text-gray-700'>{item.a}</p>}
				</div>
			))}
		</div>
	);
}
