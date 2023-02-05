import React from 'react';

const Product = (props) => {
    const {products , addToCart } = props;
    return (
        <div className='App-header'>
            <h3>{products.name}</h3>
            <button onClick={() => addToCart(products.id , products.name)}>Add to cart </button>
        </div>
    );
};

export default Product;