import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getKeyboardById } from '../../services/keyboard-services';
import { useCart } from '../../context/CartContextProvider';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
	const { id } = useParams(); // Get the product ID from the URL parameters
	const [product, setProduct] = useState(null); // State to hold the product data
	const [loading, setLoading] = useState(true); // State to manage loading state
	const [error, setError] = useState(null); // State to manage error state
	const { addToCart } = useCart(); // Get the addToCart function from the CartContextProvider

	//NOTE - useEffect to fetch product data when the component mounts or when the ID changes
	// It fetches the product data from the API and updates the state accordingly and handles errors
	// The loading state is set to false once the data is fetched or an error occurs
	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const data = await getKeyboardById(id);
				setProduct(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchProduct(); // Call the fetchProduct function to fetch product data
	}, [id]); // The useEffect hook will re-run whenever the id changes

	if (loading) return <div className={styles.loading}>Loading...</div>;
	if (error) return <div className={styles.error}>Error: {error}</div>;
	if (!product) return <div className={styles.error}>Product not found</div>;

	return (
		<div className={styles.productPage}>
			<h1>{product.name}</h1>
			<div className={styles.productContent}>
				<div className={styles.productImage}>
					<img src={product.imageUrl} alt={product.name} />
				</div>
				<div className={styles.productDetails}>
					<p className={styles.description}>{product.description}</p>
					<p className={styles.price}>${product.price}</p>
					<button
						className={styles.addToCartBtn}
						onClick={() => addToCart(product)}>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
