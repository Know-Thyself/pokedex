import PokemonMoves from './PokemonMoves';

function PokemonMovesSelector({ id, setId, pokemonData, setPokemonData }) {
	function handleBulbasaurClick() {
		setId(1);
	}
	function handleCharmanderClick() {
		setId(4);
	}

	return (
		<div className='moves-selector'>
			<button onClick={handleBulbasaurClick}>Fetch Bulbasaur</button>
			<button onClick={handleCharmanderClick}>Fetch Charmander</button>
			{id ? <PokemonMoves pokemonId={id} pokemonData={pokemonData} setPokemonData={setPokemonData} /> : null}
		</div>
	);
}

export default PokemonMovesSelector;
