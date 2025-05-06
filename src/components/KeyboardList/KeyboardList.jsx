import styles from './KeyboardList.module.scss';

const KeyboardList = ({ keyboardsData }) => {
	return (
		<div className={styles.keyboardGrid}>
			{keyboardsData.map((keyboard) => (
				<div key={keyboard.id} className={styles.keyboardCard}>
					<div className={styles.imageContainer}>
						<img
							src={keyboard.imageUrl}
							alt={keyboard.name}
							className={styles.productImage}
						/>
					</div>
					<div className={styles.cardContent}>
						<h2 className={styles.productName}>{keyboard.name}</h2>
						<p className={styles.productDescription}>{keyboard.description}</p>
						<p>{keyboard.variants.color}</p>
						<p>{keyboard.variants.connection}</p>
						<div className={styles.productFooter}>
							<p className={styles.productPrice}>${keyboard.price}</p>
							<button className={styles.addToCartBtn}>Add to Cart</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default KeyboardList;
