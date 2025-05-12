import { useNavigate } from 'react-router';
import { useCart } from '../../context/CartContextProvider';
import styles from './PaymentPage.module.scss';

const PaymentPage = () => {
	const navigate = useNavigate();
	const { cartItems } = useCart();

	let totalPrice = 0;
	cartItems.forEach(({ price, quantity }) => (totalPrice += price * quantity));

	return (
		<div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
			<h1>Checkout</h1>
			<p>
				<strong>Total:</strong> ${totalPrice.toFixed(2)}
			</p>

			<div
				style={{ display: 'flex', justifyContent: 'space-between', gap: 20 }}>
				<button
					className={styles.submitButton}
					type='button'
					onClick={() => navigate('/cart')}>
					Back to Cart
				</button>
				<button
					className={styles.payButton}
					type='submit'
					disabled={!cartItems.length === 0}
					onClick={() => navigate('/success')}>
					Pay ${totalPrice.toFixed(2)}
				</button>
			</div>
		</div>
	);
};

export default PaymentPage;

//TODO - IMPLEMENT STRIPE CHECKOUT
