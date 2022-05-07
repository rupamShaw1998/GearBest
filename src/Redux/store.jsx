
import { counterReducer, } from './Counter/reducer';
import { cartReducer} from "./Cart/cartReducer"
import  {legacy_createStore as createStore,combineReducers} from 'redux';
import { ShippingReducer } from './Shipping/reducer';


const rootReducer = combineReducers({
   counter : counterReducer,
   cartItems : cartReducer,
   shippingInfo:ShippingReducer
  });

export const store=createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)








export default store;