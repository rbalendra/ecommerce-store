import useQuery from '../../hooks/useQuery';
import { getAllKeyboards } from '../../services/keyboard-services';
import KeyboardList from '../../components/KeyboardList/KeyboardList';
import styles from './ShopPage.module.scss';
import { TrophySpin } from 'react-loading-indicators';

const ShopPage = () => {
	const {
		data: keyboardsData,
		error,
		isFail,
		isLoading,
		isSuccess,
	} = useQuery({ fetchFn: getAllKeyboards });
	return (
		<div className={styles.shopContainer}>
			<div className={styles.header}>
				<h1>Shop</h1>
			</div>
			{isLoading && (
				<div className={styles.loadingContainer}>
					<TrophySpin
						color='#F45050'
						size='large'
						text='loading...'
						textColor='#F45050'
					/>
				</div>
			)}
			{isFail && <p>Error: {error.message}</p>}
			{isSuccess && <KeyboardList keyboardsData={keyboardsData} />}
			{/* // passing the data to the KeyboardList component */}
		</div>
	);
};

export default ShopPage;
