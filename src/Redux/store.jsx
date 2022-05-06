
import { counterReducer } from './Counter/reducer';
import  {legacy_createStore as createStore} from 'redux';

export const store=createStore(counterReducer)