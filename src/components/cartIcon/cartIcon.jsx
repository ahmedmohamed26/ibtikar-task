import React from 'react';
import { Link } from 'react-router-dom';
import './cartIcon.scss';
import { connect } from 'react-redux';
const CartIcon = (props) => {
	return (
		<div className='cart-icon'>
			<Link to='/cart'>
				<i className='fa fa-shopping-cart'></i>
				<span className='badge badge-primary'>{props.totalQuantity}</span>
			</Link>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		totalQuantity: state.cart.reduce(
			(total, item) => total + parseInt(item.quantity),
			0
		),
	};
};

export default connect(mapStateToProps)(CartIcon);
