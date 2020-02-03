import React from 'react'; //deleted useContext
import { NavLink } from 'react-router-dom';

//Context
import {CartContext} from '../contexts/CartContext';

const Navigation = props => {
	// const cart = useContext(CartContext)
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{props.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
