import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import './cartIcon.scss';
import { connect } from 'react-redux';
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';

const CartIcon = (props) => {
	const [dropdownCartOpen, setDropdownCartOpen] = useState(false);
	const toggleCartDropdown = () =>
		setDropdownCartOpen((prevState) => !prevState);
	return (
		<div className='cart-icon'>
			<Dropdown
				className='dropdown'
				isOpen={dropdownCartOpen}
				toggle={toggleCartDropdown}>
				<DropdownToggle tag='span'>
					<i className='fa fa-shopping-cart'></i>
					<span className='badge badge-primary'>{props.totalQuantity}</span>
				</DropdownToggle>
				{props.products}
				<DropdownMenu>
					{props.products.map((item,index) => (
						<DropdownItem key={index} className='d-flex align-items-center dropdown-item'>
							<h6 className='mb-0' >{item.quantity}</h6>
						</DropdownItem>
					))}
				</DropdownMenu>
			</Dropdown>
		</div>
	);
}; 

const mapStateToProps = (state) => {
	return {
		products: state.cart,
		totalQuantity: state.cart.reduce(
			(total, item) => total + parseInt(item.quantity),
			0
		),
	};
};

export default connect(mapStateToProps)(CartIcon);
