import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../Services/action/counteraction'

const Counter = () => {

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();


   const handleIncrement = () => {
    dispatch(incrementCounter())
   }

   const handleDecrement = () => {
    dispatch(decrementCounter())
   }

   const handleReset = () => {
    dispatch(resetCounter())
   }
  return (
    <div>
        <h1>Welcome to the React-Redux</h1>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter;