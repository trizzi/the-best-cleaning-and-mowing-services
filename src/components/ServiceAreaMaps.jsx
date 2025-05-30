import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken =
	'pk.eyJ1IjoicGowMSIsImEiOiJjbWJhbGY2NjMwNzgzMmtzYXpkcTF3c3cxIn0.kCyBWpGEaTJsLnVWsO_PNg';

export default function ServiceAreaMap() {
	const mapContainer = useRef(null);
	const map = useRef(null);

	const areas = [
		{ name: 'Barnet', coords: [-0.2002, 51.6175] },
		{ name: 'Bexley', coords: [0.1467, 51.4565] },
		{ name: 'Brent', coords: [-0.2899, 51.5588] },
		{ name: 'Bromley', coords: [0.033, 51.4057] },
		{ name: 'Camden', coords: [-0.133, 51.545] },
		{ name: 'Croydon', coords: [-0.1004, 51.3762] },
		{ name: 'Ealing', coords: [-0.3065, 51.5142] },
		{ name: 'Enfield', coords: [-0.0745, 51.6521] },
		{ name: 'Greenwich', coords: [0.0005, 51.4821] },
		{ name: 'Hackney', coords: [-0.0657, 51.545] },
		{ name: 'Hammersmith and Fulham', coords: [-0.2299, 51.4927] },
		{ name: 'Haringey', coords: [-0.1125, 51.5906] },
		{ name: 'Harrow', coords: [-0.3367, 51.578] },
		{ name: 'Havering', coords: [0.1839, 51.5779] },
		{ name: 'Hillingdon', coords: [-0.4575, 51.5441] },
		{ name: 'Hounslow', coords: [-0.357, 51.4671] },
		{ name: 'Islington', coords: [-0.1031, 51.538] },
		{ name: 'Kensington and Chelsea', coords: [-0.1933, 51.4975] },
		{ name: 'Kingston upon Thames', coords: [-0.3004, 51.4123] },
		{ name: 'Lambeth', coords: [-0.1189, 51.4601] },
		{ name: 'Lewisham', coords: [-0.0107, 51.4452] },
		{ name: 'Merton', coords: [-0.1944, 51.409] },
		{ name: 'Newham', coords: [0.0263, 51.525] },
		{ name: 'Redbridge', coords: [0.045, 51.5761] },
		{ name: 'Richmond upon Thames', coords: [-0.297, 51.4519] },
		{ name: 'Southwark', coords: [-0.0918, 51.5035] },
		{ name: 'Sutton', coords: [-0.1943, 51.3618] },
		{ name: 'Tower Hamlets', coords: [-0.0333, 51.5155] },
		{ name: 'Waltham Forest', coords: [-0.0177, 51.588] },
		{ name: 'Wandsworth', coords: [-0.1926, 51.4566] },
		{ name: 'Westminster', coords: [-0.1439, 51.4941] },
		{ name: 'City of London', coords: [-0.0931, 51.5155] },
	];

	useEffect(() => {
		if (map.current) return;

		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [-0.118092, 51.509865], // Central London
			zoom: 9.3,
		});

		map.current.addControl(new mapboxgl.NavigationControl());

		areas.forEach((area) => {
			new mapboxgl.Marker({ color: '#047857' })
				.setLngLat(area.coords)
				.setPopup(new mapboxgl.Popup().setHTML(`<strong>${area.name}</strong>`))
				.addTo(map.current);
		});

		map.current.on('load', () => {
			map.current.resize();
		});
	}, []);

	return (
		<div className='max-w-5xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow'>
			<h2 className='text-3xl font-bold mb-4 text-green-700 text-center'>
				Our Service Areas
			</h2>
			<div
				ref={mapContainer}
				className='w-full h-[500px] rounded-xl border overflow-hidden'
			/>
		</div>
	);
}
