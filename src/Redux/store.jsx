
import { counterReducer } from './Counter/reducer';
// import {cartReducer} from "./reducer"
import  {legacy_createStore as createStore , combineReducers} from 'redux';
const rootReducer = combineReducers({
    counter : counterReducer,
    // cart : cartReducer
    
})

export const store=createStore(rootReducer)
console.log(store.getState())
