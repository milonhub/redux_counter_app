import { RESET } from "../constants/index"
import { DECREMENT } from "../constants/index"
import { INCREMENT } from "../constants"


export const incrementCounter = () =>{
    return {
        type: INCREMENT
    }
}

export const decrementCounter = () => {
    return {
        type:DECREMENT
    }
}

export const resetCounter = () => {
    return {
        type:RESET
    }
}