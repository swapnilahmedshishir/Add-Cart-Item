import React from "react";
import { removeFromCart } from "../../Redux/Actions/cartAction";
import { connect } from "react-redux";

const Cart = (props) => {
  const { cart, removeFromCart } = props;
  //console.log(props);
  return (
    <div>
      <h3>Cart Item </h3>
      <ul style={{ listStyle: "none" }}>
        {cart.map((pd) => (
          <li key={pd.cartId}>
            {pd.cartId} . {pd.name}
            <button onClick={() => removeFromCart(pd.cartId)}> X </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
