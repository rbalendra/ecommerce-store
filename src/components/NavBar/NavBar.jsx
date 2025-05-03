import React from 'react';
import { NavLink } from 'react-router';
import classes from './NavBar.module.scss';

const NavBar = () => {
	return (
		<nav className={classes.nav}>
			<div className={classes.nav_group}>
				<NavLink to='/' className={classes.nav_link}>
					Home
				</NavLink>
			</div>
			<div className={classes.nav_group}>
				<NavLink to='/shop' className={classes.nav_link}>
					Shop
				</NavLink>
			</div>
			<div className={classes.nav_group}>
				<NavLink to='/about' className={classes.nav_link}>
					About
				</NavLink>
			</div>
			<div className={classes.nav_group}>
				<NavLink to='/cart' className={classes.nav_link}>
					Cart
				</NavLink>
			</div>
		</nav>
	);
};

export default NavBar;
