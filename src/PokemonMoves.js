import React, { useEffect } from 'react';

function PokemonMoves({ pokemonId, pokemonData, setPokemonData }) {
	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
			.then((res) => res.json())
			.then((data) => {
				setPokemonData(data);
			})
			.catch((err) => console.error(err));
	}, [pokemonId]);
	if (pokemonData) {
		return (
			<>
				<p>{pokemonData.name}'s moves:</p>
				<ul className='pokemon-moves'>
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
