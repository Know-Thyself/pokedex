const BestPokemon = ({ abilities }) => {
	return (
		<div>
			<p>My favorite Pokemon is Squirtle</p>
			<ul className='abilities'>
				{abilities.map((ability, idx) => (
					<li key={idx}>{ability}</li>
				))}
			</ul>
		</div>
	);
};

export default BestPokemon;
