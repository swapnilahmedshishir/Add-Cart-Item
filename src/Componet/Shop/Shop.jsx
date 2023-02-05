import React from 'react';
import Product from '../Product/Product';
import {addToCart} from '../../Redux/Actions/cartAction';
import {connect} from 'react-redux';


const Shop = (props) => {
  console.log(props);
  const  {products,addToCart} = props;
    return (
        <div>
            <h1>This is shop componet </h1>
            {
                products.map(pd => <Product
                     key={pd.id}
                     products={pd}
                     addToCart={addToCart}
                     ></Product>)
            }
        </div>
    );
};


const mapStateToProps = state =>{
    return {
        cart :state.cart,
        products : state.products
    }
}
const mapDispatchToProps={
    addToCart :addToCart 
}

//const connectToStore = connect(mapStateToProps,mapDispatchToProps);
//connectToStore(Shop);
//connect(mapStateToProps,mapDispatchToProps)(Shop);

export default connect(mapStateToProps,mapDispatchToProps)(Shop);