import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.content}>
				<p className={styles.copyright}>© 2025 KeydUp. All rights reserved.</p>
				<p className={styles.tagline}>
					Premium mechanical keyboards for typing enthusiasts
				</p>
			</div>
		</footer>
	);
};

export default Footer;
