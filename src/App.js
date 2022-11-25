import './App.css';
import Logo from './Logo';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';
import PokemonMovesSelector from './PokemonMovesSelector';
import PokemonCity from './PokemonCity';

const App = () => {
	const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
	return (
		<div className='app-wrapper'>
			<Logo appName='Pokedex' />
			<BestPokemon abilities={abilities} />
			<CaughtPokemon />
			<PokemonMovesSelector />
			<PokemonCity />
		</div>
	);
};

export default App;
