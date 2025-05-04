import useQuery from '../../hooks/useQuery';
import { getAllKeyboards } from '../../services/keyboard-services';
import KeyboardList from '../../components/KeyboardList/KeyboardList';
import styles from './ShopPage.module.scss';

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
				<h1>SHOP</h1>
			</div>
			{isLoading && <p>Loading...</p>}
			{isFail && <p>Error: {error.message}</p>}
			{isSuccess && <KeyboardList keyboardsData={keyboardsData} />}
		</div>
	);
};

export default ShopPage;
