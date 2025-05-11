import styles from './CartPage.module.scss';
import { Link } from 'react-router';
import { useCart } from '../../context/CartContextProvider';

const CartPage = () => {
	const { cartItems, updateQuantity, clearCart } = useCart();

	/* -------------------------- calculate total price ------------------------- */

	let totalPrice = 0;
	cartItems.forEach((item) => {
		(totalPrice += item.price * item.quantity), 0;
	});
	// console.log(totalPrice);

	/* ----------------------------- empty cart page ---------------------------- */
	if (cartItems.length === 0) {
		return (
			<div className={styles.cartPage}>
				<h1>Your Cart</h1>
				<div className={styles.emptyCart}>
					<p>Your cart is currently empty.</p>
					<Link to='/shopPage' className={styles.shopButton}>
						Continue Shopping
					</Link>
				</div>
			</div>
		);
	}
	/* -------------------------------------------------------------------------- */
	return (
		<div className={styles.cartPage}>
			<h1>Your Cart</h1>

			<div className={styles.cartItems}>
				{cartItems.map((item) => (
					<div key={item.id} className={styles.cartItem}>
						<div className={styles.itemImage}>
							<img src={item.imageUrl} alt={item.name} />
						</div>
						{/* ----------------------- item name & price per item -----------------------  */}
						<div className={styles.itemDetails}>
							<h3>{item.name}</h3>

							<p className={styles.itemPrice}>${item.price.toFixed(2)}</p>

							{/*------------------------------ variant info ------------------------------ */}
							{item.selectedVariant && (
								<p className={styles.itemVariant}>
									<span>
										Color:{' '}
										<span style={{ fontWeight: '600' }}>
											{item.selectedVariant.color}
										</span>
									</span>
									{item.selectedVariant.connection && (
										<span>
											, Connection:{' '}
											<span style={{ fontWeight: '600' }}>
												{item.selectedVariant.connection}
											</span>
										</span>
									)}
								</p>
							)}
						</div>
						{/* --------------------- quantity controls + & - buttons --------------------  */}
						<div className={styles.itemControls}>
							<div className={styles.quantityControl}>
								{/* ---------------------------- decrement button ---------------------------- */}

								<button
									className={styles.quantityButton}
									onClick={() =>
										updateQuantity(
											item.id,
											item.quantity > 1 ? item.quantity - 1 : 1
										)
									}
									disabled={item.quantity <= 1}>
									-
								</button>
								<span className={styles.quantityValue}>{item.quantity}</span>
								{/* ---------------------------- increment button ---------------------------- */}
								<button
									className={styles.quantityButton}
									onClick={() => updateQuantity(item.id, item.quantity + 1)}
									disabled={item.quantity >= item.stock}>
									+
								</button>
							</div>
						</div>
						{/* --------------------------- item total display --------------------------- */}
						<div className={styles.itemTotal}>
							subtotal: ${(item.price * item.quantity).toFixed(2)}{' '}
						</div>
					</div>
				))}
			</div>

			<div className={styles.cartSummary}>
				<div className={`${styles.summaryRow} ${styles.totalRow}`}>
					<span>Total:</span>
					<span className={styles.totalPrice}>
						<span>AUD </span>${totalPrice.toFixed(2)}
					</span>
				</div>
				{/*--------------------------- clear items in cart --------------------------*/}
				<div className={styles.cartActions}>
					<button className={styles.clearCartButton} onClick={clearCart}>
						Clear Cart
					</button>
					{/*--------------------------- checkout to payments page --------------------------*/}
					<button className={styles.checkoutButton}>Proceed to Checkout</button>
				</div>
			</div>

			<div className={styles.continueShopping}>
				<Link to='/shopPage'>Continue Shopping</Link>
			</div>
		</div>
	);
};

export default CartPage;
