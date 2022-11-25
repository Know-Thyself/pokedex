const Logo = (props) => {
	const logWhenClicked = () => {
		console.log('You clicked the image pokemon');
	};
	return (
		<header className='header'>
			<h1>Welcome to {props.appName}</h1>
			<img
				onClick={logWhenClicked}
				src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png'
				alt='pokemon'
			/>
		</header>
	);
};

export default Logo;
