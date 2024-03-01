import { CLICKED_SONG } from "../actions/actionTypes";

const initalState = null;

const songReducer = (state=initalState,action )=>{
    if(action.type===CLICKED_SONG){
        return action.payload;
    }
    else{
        return state;
    }
}
export default songReducer;