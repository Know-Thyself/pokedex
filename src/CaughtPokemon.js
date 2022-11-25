import React, { useState } from 'react';

const CaughtPokemon = () => {
	const [caught, setCaught] = useState([]);
	const [pokemonNameInput, setPokemonNameInput] = useState('');
	const date = new Date().toLocaleDateString();
	const pokemonNames = ['Aerodactyl', 'Aggron', 'Aipom', 'Alakazam'];
	const catchPokemon = () => {
		let randomPokemon =
			pokemonNames[Math.floor(Math.random() * pokemonNames.length)];
		if (pokemonNameInput) {
			setCaught(caught.concat(pokemonNameInput));
			setPokemonNameInput('');
		}
	};
	const handleInputChange = (e) => {
		setPokemonNameInput(e.target.value);
	};
	return (
		<>
			<p>
				Caught {caught.length} Pokemon on: {date}
			</p>
			<input
				type='text'
				value={pokemonNameInput}
				onChange={handleInputChange}
			/>
			<button onClick={catchPokemon} >Catch Pokemon</button>
			<ul>
				{caught.map((pokemon, index) => (
					<li key={index}>{pokemon}</li>
				))}
			</ul>
		</>
	);
};

export default CaughtPokemon;
