import { type } from "@testing-library/user-event/dist/type";
import { INCREASE, DECREASE, RESET } from "./actionTypes";


//actions:
//in real use => actions are objects



//actionCreators:
export const incerase=()=>{
    return{
        type:INCREASE
}
}

export const decrease=()=>{
    return{
        type:DECREASE
}
}

export const reset=()=>{
    return{
        type:RESET
}
}
