import {ADD_COUNT} from './action'


const init= {counter : 0}

export const counterReducer=(store = init,{type,payload})=>{
    switch(type){
        case ADD_COUNT:
            return {...store,counter:store.counter+payload}
            
            default:
                return store
    }
}