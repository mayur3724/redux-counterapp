import React from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { incerase, decrease, reset } from "../redux/actions/counterActions";


const CounterApp=()=>{
    //useSelector is used to access the value from store
    const count = useSelector(state=>state.Counter)//helping us to get the current value from store

    const dispath = useDispatch();

    function handleIncrease(){
        dispath(incerase());
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrease}>Increase</button>

        </div>
    )
}
export default CounterApp;