import React , {useState,useEffect} from 'react';
import './products.scss';
import Product from '../../components/product/product';
import { getAllProducts } from '../../api/products';
 const Products = () => {

const [products,setProduct] = useState([])

useEffect(() => {
    getProducts()
},[])

function getProducts(){
    getAllProducts().then((res) => {
           setProduct(res)
    })
    .catch((error) => {
        throw new Error(error.message)
    })
}




    return(
        <div className='Products'>
            <h1>Products</h1>
            <div className='row'>
                {products.map(product => 
                    <div className='col-md-3' key={product.id}>
                        <Product product={product} />
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default Products;