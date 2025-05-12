import Slider from '../../components/Slider/Slider';
import classes from './HomePage.module.scss';

const HomePage = () => {
	return (
		<main className={classes.container}>
			<Slider />
			<h1>KEYD UP MECHANICAL KEYBOARDS</h1>
			<section className={classes.aboutSection}>
				<p>
					At Keyd Up, we're passionate about bringing you the finest mechanical
					keyboards on the market. Our carefully curated selection offers the
					perfect blend of performance, aesthetics, and durability.
				</p>

				<h3>Why Choose Mechanical Keyboards?</h3>
				<p>
					Mechanical keyboards provide a superior typing experience with tactile
					feedback, customisable switches, and longer lifespans than traditional
					membrane keyboards. Whether you're a professional writer, programmer,
					or gamer, our keyboards will enhance your productivity and enjoyment.
				</p>

				<h3>Our Commitment</h3>
				<p>
					We source our products from trusted manufacturers who share our
					dedication to quality. Each keyboard undergoes rigorous testing to
					ensure it meets our exacting standards before reaching your desk. From
					compact 60% layouts to full-size professional models, we have the
					perfect keyboard for everyone.
				</p>
			</section>
		</main>
	);
};

export default HomePage;
