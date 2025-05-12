import { useParams } from 'react-router';
import { Link } from 'react-router';
import styles from './NotFound.module.scss';

const NotFound = () => {
	const { '*': splat } = useParams();

	return (
		<>
			<div className={styles.notFoundContainer}>
				<div className={styles.errorCode}>404</div>
				<h1 className={styles.title}>Page Not Found</h1>
				<p className={styles.message}>
					We couldn't find the page "/{splat || ''}" you're looking for. The
					page might have been moved or doesn't exist.
				</p>
				<div className={styles.actions}>
					<Link to='/' className={styles.returnButton}>
						Return to Home
					</Link>
					<Link
						to='/shopPage'
						className={styles.returnButton}
						style={{ marginLeft: '1rem' }}>
						Browse Our Shop
					</Link>
				</div>
			</div>
		</>
	);
};

export default NotFound;
