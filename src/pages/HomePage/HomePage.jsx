import Slider from '../../components/Slider/Slider';
import classes from './HomePage.module.scss';

const HomePage = () => {
	return (
		<main className={classes.container}>
			<Slider />
			<h1>KEYD UP MECHANICAL KEYBOARDS</h1>
			<h2>Fictional Store with fake money</h2>
		</main>
	);
};

export default HomePage;
