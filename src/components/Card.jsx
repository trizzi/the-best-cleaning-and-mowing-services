import React from 'react';

export function Card({ children, className, ...props }) {
	return (
		<div
			className={`bg-white rounded-2xl overflow-hidden ${className}`}
			{...props}>
			{children}
		</div>
	);
}

export function CardContent({ children, ...props }) {
	return (
		<div
			className='p-6'
			{...props}>
			{children}
		</div>
	);
}
