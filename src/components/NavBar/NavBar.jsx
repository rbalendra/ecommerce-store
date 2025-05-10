import React from 'react';
import { NavLink } from 'react-router';
import classes from './NavBar.module.scss';
import logo from '../../assets/images/keyduplogo.svg';
import { BsCart4 } from 'react-icons/bs';
import { useCart } from '../../context/CartContextProvider';

const NavBar = () => {
	const { cartQuantity } = useCart();
	return (
		<div className={classes.navWrapper}>
			<nav className={classes.nav}>
				<div className={classes.nav_logo}>
					<NavLink to='/'>
						<img src={logo} alt='KeydUp Logo' className={classes.logo} />
					</NavLink>
				</div>

				<div className={classes.nav_links}>
					<NavLink to='/' className={classes.nav_link}>
						Home
					</NavLink>
					<NavLink to='/shopPage' className={classes.nav_link}>
						Shop
					</NavLink>
					<NavLink to='/aboutpage' className={classes.nav_link}>
						About
					</NavLink>
				</div>
				<div className={classes.nav_cart}>
					<NavLink to='/cart' className={classes.cart_link}>
						<div className={classes.cart_container}>
							<BsCart4 className={classes.cart_icon} />
							{cartQuantity > 0 && (
								<span className={classes.cart_count}>{cartQuantity}</span>
							)}
						</div>
					</NavLink>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
