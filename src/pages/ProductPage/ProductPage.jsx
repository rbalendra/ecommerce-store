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

	/* --------------------------- states for variants -------------------------- */
	const [selectedColor, setSelectedColor] = useState(null);
	const [determinedConnection, setDeterminedConnection] = useState(null);
	const [itemQuantity, setitemQuantity] = useState(1);
	const [stock, setStock] = useState(0);

	/* -------------------------------------------------------------------------- */
	//NOTE - useEffect to fetch product data when the component mounts or when the ID changes
	// It fetches the product data from the API and updates the state accordingly and handles errors
	// The loading state is set to false once the data is fetched or an error occurs
	useEffect(() => {
		const fetchProduct = async () => {
			setLoading(true); //lets load
			setSelectedColor(null); //reset selection when product changes
			setDeterminedConnection(null); //reset connection
			setitemQuantity(1); //reset qty
			setStock(0); //reset stock
			try {
				const data = await getKeyboardById(id);
				setProduct(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false); //stop loading
			}
		};

		fetchProduct(); // Call the fetchProduct function to fetch product data
	}, [id]); // The useEffect hook will re-run whenever the id changes

	/* -------------------------------------------------------------------------- */
	//NOTE - useEffect here to update the available stock when a color or connection is selected
	useEffect(() => {
		if (!product || !selectedColor) {
			//if we don't have data yet, reset and exit early
			setStock(0);
			setDeterminedConnection(null);
			return; //stop here
		}

		//finding the variant that matches the selected color
		const variant = product.variants.find((v) => v.color === selectedColor);

		const newStock = variant ? variant.quantity : 0;
		//validating if there is a valid variant and use its quantity
		const newConnection = variant ? variant.connection : null;

		setStock(newStock);
		setDeterminedConnection(newConnection);

		setitemQuantity((prevQty) => {
			if (prevQty < 1) return 1;
			if (prevQty > newStock) return newStock;
			return prevQty;
		});
	}, [product, selectedColor]);

	/* ------------------------ add to cart functionality ----------------------- */
	const handleAddToCart = () => {
		if (!selectedColor) {
			alert('please select a color');
			return;
		}

		if (itemQuantity < 1 || itemQuantity > stock) {
			alert(`quantity must be between 1 and ${stock}`);
			return;
		}

		const cartItem = {
			...product,
			id: `${product.id}-${selectedColor}`, // unique key
			name: `${product.name} (${selectedColor}, ${determinedConnection})`,
			price: product.price, // or variant.price if you have it
			selectedVariant: {
				color: selectedColor,
				connection: determinedConnection,
			},
		};

		addToCart(cartItem, itemQuantity);
		alert(`Added ${itemQuantity} × ${cartItem.name} to cart!`);
	};

	/* -------------------------------------------------------------------------- */
	if (loading) return <div className={styles.loading}>Loading...</div>;
	if (error) return <div className={styles.error}>Error: {error}</div>;
	if (!product) return <div className={styles.error}>Product not found</div>;

	const uniqueColors = [...new Set(product.variants.map((v) => v.color))];

	return (
		<div className={styles.productPage}>
			<h1>{product.name}</h1>

			<div className={styles.productContent}>
				{/* product image */}
				<div className={styles.productImage}>
					<img src={product.imageUrl} alt={product.name} />
				</div>

				{/* product details */}
				<div className={styles.productDetails}>
					<p className={styles.description}>{product.description}</p>
					<p className={styles.price}>${product.price}</p>

					{/* color selector */}
					<div className={styles.variantSection}>
						<label>Color:</label>
						<div className={styles.variantOptions}>
							{uniqueColors.map((color) => (
								<button
									key={color}
									onClick={() => setSelectedColor(color)}
									className={selectedColor === color ? styles.selected : ''}>
									{color}
								</button>
							))}
						</div>
					</div>

					{/* show connection when available */}
					{determinedConnection && (
						<p>
							Connection: <strong>{determinedConnection}</strong>
						</p>
					)}

					{/* quantity input */}
					<div className={styles.quantitySection}>
						<label htmlFor='qty'>Qty:</label>
						<input
							id='qty'
							type='number'
							value={itemQuantity}
							onChange={(e) =>
								setitemQuantity(
									Math.min(Math.max(1, parseInt(e.target.value) || 1), stock)
								)
							}
							min='1'
							max={stock}
						/>
						<span>
							({stock} in stock
							{itemQuantity > 1 ? `, ${stock - itemQuantity} remaining` : ''})
						</span>
					</div>

					{/* add to cart */}
					<button
						className={styles.addToCartBtn}
						onClick={handleAddToCart}
						disabled={!selectedColor || stock === 0}>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
