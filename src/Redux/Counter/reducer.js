import {ADD_COUNT} from '../Counter/action'
const init= {counter : 1}

export const counterReducer=(store = init,{type,payload})=>{
    switch(type){
        case ADD_COUNT:
            return {...store,counter:store.counter+payload}
            
            default:
                return store
    }
}