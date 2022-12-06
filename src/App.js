import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Logo from './Logo';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';
import PokemonMovesSelector from './PokemonMovesSelector';
import PokemonCity from './PokemonCity';
import PokemonInfo from './PokemonInfo';
import './App.css';

const App = () => {
	const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
	const [id, setId] = useState(null);
	const [pokemonData, setPokemonData] = useState(null);
	return (
		<div className='app-wrapper'>
			<BrowserRouter>
				<div className='links'>
					<Link to='/best-pokemon' className='link'>
						Best Pokemon
					</Link>
					<Link to='/caught-pokemon' className='link'>
						Caught Pokemon
					</Link>
					<Link
						to={pokemonData ? '/pokemon/' + pokemonData.name : '/pokemon/:name'}
						className='link active'
					>
						Pokemon Info
					</Link>
				</div>
				<Logo appName='Pokedex' />
				<Routes>
					<Route
						path='/best-pokemon'
						element={<BestPokemon abilities={abilities} />}
					/>
					<Route path='/caught-pokemon' element={<CaughtPokemon />} />
					<Route path='/pokemon/:name' element={<PokemonInfo id={id} />} />
				</Routes>
				<PokemonMovesSelector
					id={id}
					setId={setId}
					pokemonData={pokemonData}
					setPokemonData={setPokemonData}
				/>
				<PokemonCity />
			</BrowserRouter>
		</div>
	);
};

export default App;
