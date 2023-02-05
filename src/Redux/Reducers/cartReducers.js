import { AD_TO_CART, REMOVE_FROM_CART } from "../Actions/cartAction";

const initalState = {
    cart :[],
    products:[{name:"HP",id:1},
    {name:"Dell",id:2},
    {name:"Afsoss",id:3},
    {name:"Levano",id:4},
    {name:"Applo",id:5},
    {name:"Mac",id:6}]
  
};

const cartReducers = (state = initalState , action) => {
   switch (action.type) {
    case AD_TO_CART:
        const cartItem = {
            productId : action.id,
            name : action.name,
            cartId : state.cart.length + 1

        }
        const newCart = [...state.cart , cartItem];
        return {...state, cart:newCart};

    case REMOVE_FROM_CART:
        const Id = action.cartId ;
        const remaingCart = state.cart.filter(item => item.cartId !== Id );
        return {...state, cart: remaingCart}             
   
    default:
        return state;
   }
};

export default cartReducers;