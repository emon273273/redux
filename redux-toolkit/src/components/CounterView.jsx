import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/features/counter/counterSlice";


function CounterView() {

    const count=useSelector(state=>state.counter.count)

    const dispatch=useDispatch()
  return (
    <>
      <div>CounterView</div>

      <h1>Count : {count}</h1>

      <button onClick={()=>dispatch(increment())} >Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </>
  );
}

export default CounterView;
