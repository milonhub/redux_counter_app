import { DECREMENT, INCREMENT, RESET, initialCount } from "./constants/index";
 


// // counterReducer.js
// import { INCREMENT, DECREMENT, RESET } from './action';

 function counterReducer  (state = initialCount, action){

    switch (action.type) {
        case INCREMENT:
            
           return {
            ...state,
            count:state.count + 1
           }
    
        case DECREMENT:
            
           return {
            ...state,
            count:state.count - 1
    
           }

        case RESET:
            
           return {
            ...state,
            count: 0
    
           }   
           default:
            return state
    }

}

export default counterReducer
