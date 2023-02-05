export const AD_TO_CART ="AD_TO_CART";
export const REMOVE_FROM_CART="REMOVE_FROM_CART";
 
export  const addToCart = (id , name) =>{
        return {type : "AD_TO_CART", id , name}
    }

export const removeFromCart = cartId =>{
        return {type : "REMOVE_FROM_CART" ,  cartId}
    }