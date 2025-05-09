import styles from './KeyboardList.module.scss';
import { Link, useNavigate } from 'react-router';
import { useCart } from '../../context/CartContextProvider';

const KeyboardList = ({ keyboardsData }) => {
	const { addToCart } = useCart();
	//NOTE -  this is a custom hook that we created to access the cart context. It returns the addToCart function from the CartContextProvider
	const navigate = useNavigate(); //useNavigate is a hook that returns a function that lets you navigate programmatically
	//NOTE - this is used to navigate to a different route in the app. It is used in the addToCart function to navigate to the producty page

	/* ----------------- function to handle nav to product page ----------------- */
	const handleViewProduct = (keyboardId) => {
		navigate(`/product/${keyboardId}`);
	};

	/* ---- this function will process variant information for each keyboard ---- */
	const getVariantSummary = (keyboard) => {
		// Get unique colors and connections
		const colors = keyboard.variants.map((v) => v.color);
		const connections = [
			...new Set(keyboard.variants.map((v) => v.connection)),
		]; //Set only stores unique values because our data has duplicates
		// console.log(colors, connections);

		// Calculate total quantity across all variants
		const totalQuantity = keyboard.variants.reduce((sum, variant) => {
			return sum + (variant.quantity || 0);
		}, 0);

		return { totalQuantity, colors, connections };
	};
	/* -------------------------------------------------------------------------- */
	return (
		<div className={styles.keyboardGrid}>
			{keyboardsData.map((keyboard) => {
				// const variantSummary = getVariantSummary(keyboard);
				// const totalQuantity = variantSummary.totalQuantity;
				// const colors = variantSummary.colors;
				// const connections = variantSummary.connections;
				// console.log(variantSummary);

				const { totalQuantity, colors, connections } =
					getVariantSummary(keyboard);
				return (
					<div key={keyboard.id} className={styles.keyboardCard}>
						<Link to={`/product/${keyboard.id}`}>
							<div className={styles.imageContainer}>
								<img
									src={keyboard.imageUrl}
									alt={keyboard.name}
									className={styles.productImage}
								/>
							</div>
						</Link>

						<div className={styles.cardContent}>
							<Link to={`/product/${keyboard.id}`} className={styles.titleLink}>
								<h2 className={styles.productName}>{keyboard.name}</h2>
							</Link>
							<p className={styles.productDescription}>
								{keyboard.description}
							</p>
							{/* //NOTE - renders the available colors */}
							{colors.length > 0 && (
								<div className={styles.variantInfo}>
									<span className={styles.variantLabel}>
										Available colours:
									</span>
									<div className={styles.variantOptions}>
										{colors.map((color) => (
											<span key={color} className={styles.variantTag}>
												{color}
											</span>
										))}
									</div>
								</div>
							)}
							{/* //NOTE - renders the available connections */}
							{connections.length > 0 && (
								<div className={styles.variantInfo}>
									<span className={styles.variantLabel}>Connection type:</span>
									<div className={styles.variantOptions}>
										{connections.map((connection) => (
											<span key={connection} className={styles.variantTag}>
												{connection}
											</span>
										))}
									</div>
								</div>
							)}
							{/* //NOTE - renders the total quantity */}
							<p className={styles.stockInfo}>{totalQuantity} in stock</p>
							<div className={styles.productFooter}>
								<p className={styles.productPrice}>${keyboard.price}</p>
								<button
									className={styles.addToCartBtn}
									onClick={() => handleViewProduct(keyboard.id)}>
									View Product
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default KeyboardList;
