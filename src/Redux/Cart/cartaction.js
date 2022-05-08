
import axios from "axios";
    export const ADD_TO_CART = " ADD_TO_CART"
    export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM"

 
  
  
  // Add to Cart
  export const addItemsToCart = (data)=>{
     return{
         type : ADD_TO_CART,
         payload:data
     }
  }
  
    
 
  
  // REMOVE FROM CART
  export const removeItemsFromCart = (id) => {
     return {
         type : REMOVE_CART_ITEM,
         payload:id
     }
  };
  
  