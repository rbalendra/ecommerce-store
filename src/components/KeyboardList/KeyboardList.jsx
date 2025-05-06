import styles from './KeyboardList.module.scss';
import { Link } from 'react-router';
import { useCart } from '../../context/CartContextProvider'; // Assuming you have a CartContextProvider that provides addToCart function

const KeyboardList = ({ keyboardsData }) => {
	const { addToCart } = useCart(); // Assuming you have a CartContextProvider that provides addToCart function

	return (
		<div className={styles.keyboardGrid}>
			{keyboardsData.map((keyboard) => (
				<div key={keyboard.id} className={styles.keyboardCard}>
					<Link to={`/product/${keyboard.id}`} className={styles.productLink}>
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
						<p className={styles.productDescription}>{keyboard.description}</p>
						<div className={styles.productFooter}>
							<p className={styles.productPrice}>${keyboard.price}</p>
							<button
								className={styles.addToCartBtn}
								onClick={() => addToCart(keyboard)}>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default KeyboardList;
