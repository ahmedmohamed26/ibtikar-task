import React, { useEffect, useState } from 'react';
import { getProductById } from '../../api/products';
import { addToCart } from '../../store/actions/actions';
import { connect } from 'react-redux';

import './product-details.scss';
const ProductDetails = (props) => {
	const { id } = props.match.params;
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);

	useEffect(() => {
		getproductDetails();
	});

	function getproductDetails() {
		getProductById(parseInt(id))
			.then((res) => {
				setProduct(res);
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	}

	const addProduct = () => {
		setQuantity(quantity + 1);
	};
	const removeProduct = () => {
		if (quantity <= 1) return;
		setQuantity(quantity - 1);
	};
	// const addProduct = () => {
	// 	const value = event.target.value;
	// 	if (value < 1) return;
	// 	setQuantity(value);
	// };

	const addProductToCart = (product) => {
		props.addToCart(product, quantity);
	};

	return (
		<section className='product'>
			<div className='row'>
				<div className='col-md-6'>
					<div className='product-img'>
						<img
							src={product.image}
							alt={product.name}
							width={'100%'}
							height={'350px'}
						/>
					</div>
				</div>
				<div className='col-md-6'>
					<div className='product-title'>
						<h1>{product.name}</h1>
						<h6>Price : {product.price}$</h6>
						<div className='btn-group' role='group' aria-label='Basic example'>
						<button type='button' className='btn btn-outline-secondary btn-sm' onClick={removeProduct}>
								-
							</button>
							<span className='btn btn-outline-secondary btn-sm'>
							{quantity}
							</span>
							<button type='button' className='btn btn-outline-secondary btn-sm' onClick={addProduct}>
							+
							</button>
							
						</div>
						<h6 className='mt-2'>Total Price : {quantity * product.price}$</h6>
						<button
							className='btn btn-primary'
							onClick={() => addProductToCart(product)}>
							Add To Cart
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (productsInfo, quantity) =>
			dispatch(addToCart(productsInfo, quantity)),
	};
};

const mapStateToProps = (state) => {
	return {
		cart: state.cart,
		totalQuantity: state.cart.reduce(
			(total, item) => total + item.quantity,
			0
		),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
