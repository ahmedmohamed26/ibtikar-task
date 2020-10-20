import React from 'react';
import './cartProduct.scss';
import { connect } from 'react-redux';
import {removeFromCart} from '../../store/actions/actions';
const CartProduct = (props) => {
	const { item , index} = props;
	const { product } = item;
	console.log(props)
	return (
		<section className='cart-product'>
			<div className='parent mt-3 mb-3'>
				<img src={product.image} alt={product.name} />
				<div className='product-description'>
					<h4>{product.name}</h4>
					<h6 className='mb-2'>Price : {product.price}$</h6>
					<h6 className='mb-2'>Quantity : {item.quantity}</h6>
					<div className='d-flex justify-content-between align-items-center'>
						<h6 className='mb-0'>Total : {item.quantity * product.price}$</h6>
						<button className='btn fa fa-trash p-0' onClick={() => props.removeFromCart(index)}></button>
					</div>
				</div>
			</div>
		</section> 
	);
};


const mapDispatchToProps = (dispatch) => {
	return {
		removeFromCart: (index) => dispatch(removeFromCart(index))
	}
}

export default connect(null,mapDispatchToProps)(CartProduct) ;
