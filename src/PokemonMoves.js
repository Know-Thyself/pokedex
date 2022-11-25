import React, { useState, useEffect } from 'react';

function PokemonMoves({ pokemonId }) {
	const [pokemonData, setPokemonData] = useState(null);
	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
			.then((res) => res.json())
			.then((data) => setPokemonData(data))
			.catch((err) => console.error(err));
	}, [pokemonId]);
	if (pokemonData) {
		return (
			<>
				<p>{pokemonData.name}'s moves:</p>
				<ul>
					{pokemonData.moves.map((move, index) => {
						return <li key={index}>{move.move.name}</li>;
					})}
				</ul>
			</>
		);
	} else {
		return null;
	}
}

export default PokemonMoves;
