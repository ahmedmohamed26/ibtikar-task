import React , {useState} from 'react';
import './cart.scss';
import CartProduct from '../../components/cart-product/cartProduct';
import { connect } from 'react-redux';
import FormModal from '../../components/form-modal/formModal';


const Cart = (props) => {

	const [showForm,setShowForm] = useState(false)
	const checkOut = () => {
		setShowForm(true)
	}

	const hideForm = () => {
		setShowForm(false)
	}

	return (
		<div className='cart'>
			<h1>cart</h1>
		
			<div className='row'>
				{props.cartProducts.map((item,index) => (
					<div className='col-md-3' key={index}>
						<CartProduct item={item} index={index} />
					</div>
				))}
			</div>
			{props.totalPrice !== 0 ? (<div>
				<h4 className='mt-3'>Total : {props.totalPrice}</h4>
			<button className='btn btn-primary btn-block mt-3' onClick={checkOut}>Pay</button>
			</div>) : (<h2 className='text-center text-capitalize text-secondary'>Your shopping cart has no products</h2>)}
			<FormModal showForm={showForm} hideForm={hideForm} />
		</div>
	); 
};

const mapStateToProps = (state) => {
	return {
		cartProducts: state.cart,
		totalPrice: state.cart.reduce(
			(total, item) => total + item.quantity * item.product.price,
			0
		),
	};
};

export default connect(mapStateToProps)(Cart);
