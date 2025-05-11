import { useState, useEffect } from 'react';
import styles from './Slider.module.scss';
import { getFeaturedKeyboards } from '../../services/keyboard-services';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router';

const Slider = () => {
	const [featuredProducts, setFeaturedProducts] = useState([]); // Initialize with an empty array for featured products
	const [loading, setLoading] = useState(true); // Loading state to show a loading message or spinner
	const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide index
	const Navigate = useNavigate(); // Hook to programmatically navigate to different routes

	const handleShopNow = () => {
		Navigate('/ShopPage'); // Navigate to the cart page after adding the product
	};

	// Load featured products
	useEffect(() => {
		const loadFeaturedProducts = async () => {
			try {
				const data = await getFeaturedKeyboards(); // Fetch featured products from the API through project-services.js
				setFeaturedProducts(data); // Set the fetched data to state
				setLoading(false); // Set loading to false after data is fetched
			} catch (error) {
				console.error('Error loading featured products:', error);
				setLoading(false);
			}
		};

		loadFeaturedProducts(); // Call the function to load featured products
	}, []);

	/* ---------- Auto slide every 5 seconds if there are more than > 2 --------- */

	// if (0+1) % 3 = 1 ---> sets the slide to [1] (second slide)
	// if (1+1) % 3 = 2 ---> sets the slide to [2] (third slide)
	// if (2+1) % 3 = 0 ---> sets the slide to [0] (first slide)

	useEffect(() => {
		if (featuredProducts.length < 2) return; // stops if less than 2 slides

		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
		}, 5000);

		return () => clearInterval(interval); //clear the interval on component unmount or when featuredProducts changes
	}, [featuredProducts.length]); // re-run useEffect only when featuredProducts.length changes

	/* ------------------------------ to the right ------------------------------ */
	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
	};
	/* ------------------------------- to the left ------------------------------ */
	const prevSlide = () => {
		setCurrentSlide(
			(prev) => (prev === 0 ? featuredProducts.length - 1 : prev - 1) // if prev is 0, go to last slide in array, else go to previous slide
		);
	};
	/* ----------------------------- some safeguards ---------------------------- */
	if (loading) {
		return <div className={styles.loading}>Loading...</div>;
	}

	if (featuredProducts.length === 0) {
		return (
			<div className={styles.noFeatured}>No featured products available</div>
		);
	}
	/* -------------------------------------------------------------------------- */
	return (
		<div className={styles.slider}>
			{/* rendering all slides */}
			<div className={styles.slides}>
				{featuredProducts.map((product, index) => (
					<div
						key={product.id}
						className={`${styles.slide} ${
							index === currentSlide ? styles.active : ''
						}`}>
						<div className={styles.imageContainer}>
							{/* Try both imageUrl and featureUrl fields incase one is not working*/}
							<Link to={`/product/${product.id}`}>
								<img
									src={product.featureUrl || product.imageUrl}
									alt={product.name}
									className={styles.image}
								/>
							</Link>
						</div>

						<div className={styles.content}>
							<h2 className={styles.title}>{product.name}</h2>
							<p className={styles.description}>
								{product.description || 'Premium mechanical keyboard'}
							</p>
							<div className={styles.priceTag}>${product.price}</div>
							<button
								className={styles.shopButton}
								onClick={() => handleShopNow()}>
								Shop Now
							</button>
						</div>
					</div>
				))}
			</div>
			{/* only show arrows if more than one slide */}
			{featuredProducts.length > 1 && (
				<>
					<button className={styles.arrowLeft} onClick={prevSlide}>
						<BsChevronLeft />
					</button>

					<button className={styles.arrowRight} onClick={nextSlide}>
						<BsChevronRight />
					</button>
					{/* slide indicator buttons */}
					<div className={styles.indicators}>
						{featuredProducts.map((product, index) => (
							<button
								key={product.id}
								className={`${styles.indicator} ${
									index === currentSlide ? styles.active : ''
								}`}
								onClick={() => setCurrentSlide(index)}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Slider;
