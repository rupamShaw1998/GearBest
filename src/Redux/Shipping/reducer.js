import { SAVE_SHIPPING_INFO } from "../Shipping/action"


const init ={shippingInfo:{}}
export const ShippingReducer = (
  // store = { cartItems: [], shippingInfo: {} },action
  store=init ,action
) => {
  console.log(action.type);
  switch (action.type) {
    case SAVE_SHIPPING_INFO:
      return {
        ...store,
        shippingInfo: action.payload,
      };
    default:
      return store;
  }
};
