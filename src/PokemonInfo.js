import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const PokemonInfo = ({ id }) => {
	const { name } = useParams();
	const [pokemonSpecies, setPokemonSpecies] = useState(null);
	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setPokemonSpecies(data);
			})
			.catch((err) => console.error(err));
	}, [id]);

	return (
		<div>
			<h1>Pokemon Info</h1>
			{pokemonSpecies && (
				<ul style={{ textAlign: 'left' }}>
					<li>Name: {pokemonSpecies.name}</li>
					<li>Color: {pokemonSpecies.color.name}</li>
					<li>Shape: {pokemonSpecies.shape.name}</li>
					<li>Happiness: {pokemonSpecies.base_happiness}</li>
					<li>Capture Rate: {pokemonSpecies.capture_rate}</li>
				</ul>
			)}
		</div>
	);
};

export default PokemonInfo;
