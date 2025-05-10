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

	/* -------------------------------------------------------------------------- */

	const { addToCart } = useCart(); // Get the addToCart function from the CartContextProvider

	/* --------------------------- states for variants & quantity ----------------- */
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

			getKeyboardById(id) //Async fetch
				.then((data) => setProduct(data))
				.catch((error) => setError(error.message))
				.finally(() => setLoading(false));
		};

		fetchProduct(); // Call the fetchProduct function to fetch product data
	}, [id]); // The useEffect hook will re-run whenever the id changes

	/* -------------------------------------------------------------------------- */
	//NOTE - useEffect here to update the available stock when a color is selected
	useEffect(() => {
		if (!product || !selectedColor) {
			//if we don't have data yet, reset and exit early
			setStock(0);
			setDeterminedConnection(null);
			return; //stop here
		}

		//finding the variant that matches the selected color
		const variant = product.variants.find((v) => v.color === selectedColor);
		const newStock = variant ? variant.quantity : 0; //use variant quantity or 0
		const newConnection = variant ? variant.connection : null; // use variant connection or null

		setStock(newStock); //update available stock
		setDeterminedConnection(newConnection); //update connection display

		setitemQuantity((prevQty) => {
			if (prevQty < 1) return 1; //ensuring that quantity is atleast 1
			if (prevQty > newStock) return newStock; //stop the quantity at avail stock
			return prevQty;
		});
	}, [product, selectedColor]); //useEffect runs when the product load or color is picked

	/* ------------- states for button press without selection ------------- */

	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');

	/* ------------------------ add to cart functionality ----------------------- */
	const handleAddToCart = () => {
		setErrorMessage('');
		setSuccessMessage('');
		if (!selectedColor) {
			setErrorMessage('please select a color variation');
			return;
		}

		// const baseId = product.id;
		// const baseName = product.name;
		// const basePrice = product.price;
		// const baseImageUrl = product.imageUrl;
		// const baseDescription = product.description;

		//destructured only the needed fields from product
		const { id, name, price, imageUrl, description } = product;

		const variantId = id + '-' + selectedColor; //reason this is here is because to make the id unqique
		const variantName =
			name +
			' ( ' +
			selectedColor +
			', ' +
			'[' +
			determinedConnection +
			']' +
			' )'; // so everyone can see what's added clearly

		const cartItem = {
			id: variantId,
			name: variantName,
			price,
			imageUrl,
			description,
			selectedVariant: {
				color: selectedColor,
				connection: determinedConnection,
			},
		};

		addToCart(cartItem, itemQuantity); // Add the item to the cart using the addToCart function from CartContextProvider
		setStock((prevStock) => Math.max(0, prevStock - itemQuantity));

		setSuccessMessage(`Added ${itemQuantity} × ${cartItem.name} to cart!`); //success messaage
	};

	/* -------------------------------------------------------------------------- */
	if (loading) return <div className={styles.loading}>Loading...</div>;
	if (error) return <div className={styles.error}>Error: {error}</div>;
	if (!product) return <div className={styles.error}>Product not found</div>;
	/* -------------------------------------------------------------------------- */

	const uniqueColors = [...new Set(product.variants.map((v) => v.color))];
	// Determine which stock number to display
	const stockMessage = selectedColor
		? `(${stock} in stock${
				itemQuantity > 1 ? `, ${stock - itemQuantity} remaining` : ''
		  })`
		: 'Select a color variant to see available stock';

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
							{/* mapping the available colors to create buttons */}
							{uniqueColors.map((color) => (
								<button
									key={color}
									onClick={() => {
										setSelectedColor(color);
										setErrorMessage('');
									}}
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
							onChange={(e) => {
								const parsed = parseInt(e.target.value); //parse text input because they always strings
								console.log(parsed);
								let qty = isNaN(parsed) ? 1 : parsed; //if parsed is NaN then it will default to 1

								if (qty > stock) {
									// this stops the user from entering numbers more than stock
									qty = stock;
								}
								setitemQuantity(qty);
							}}
							min='1'
							max={stock}
							disabled={!selectedColor}
						/>
						<span>{stockMessage}</span>
					</div>

					{/* Error and success messages */}
					{errorMessage && (
						<p className={styles.errorMessage}>{errorMessage}</p>
					)}
					{successMessage && (
						<p className={styles.successMessage}>{successMessage}</p>
					)}
					{/* add to cart button */}
					<button
						className={styles.addToCartBtn}
						onClick={handleAddToCart}
						disabled={selectedColor && stock === 0}>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
