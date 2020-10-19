import Products from './products.json';

export  function getAllProducts(){
    return Promise.resolve(Products);
}


export  function getProductById(id){
    const product = Products.find(item => item.id === id)
    return Promise.resolve(product);
}


export default {
    getAllProducts,
    getProductById
} 