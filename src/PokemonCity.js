import React, { useState } from 'react';

function PokemonCity() {
	const [city, setCity] = useState('');
	const updateCity = (e) => {
		setCity(e.target.value);
	};
	return (
		<div>
			<input
				type='text'
				value={city}
				placeholder='City name'
				onChange={updateCity}
			/>
			<p>Welcome to the city of {city}</p>
		</div>
	);
}

export default PokemonCity;
