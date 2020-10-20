import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './product.scss';

const Product = (props) => {
	const { product } = props;
	useEffect(() => {
	}, [product]);

	return (
		<section className='product-item'>
			<Link to={'/products/' + product.id}>
			<div className='parent mt-3 mb-3'>
				<img src={product.image} alt={product.name} />
				<div className='product-description'>
					<h4>{product.name}</h4>
					<div className='d-flex justify-content-between align-items-center'>
						<Link to={'/products/' + product.id}>
							<img
								src='/images/4.png'
								className='card-img'
								alt={product.name}
							/>
						</Link>
						<h6 className='mb-0'>Price : {product.price}$</h6>
					</div>
				</div>
				</div>
				</Link>
		</section>
	);
};

export default Product;
