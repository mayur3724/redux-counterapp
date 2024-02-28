import { INCREASE, DECREASE, RESET } from "../actions/actionTypes";

const initialState=0;

const counterReducer=(state, action)=>{
    switch(action.type){
        case INCREASE:
            return state+1

            case DECREASEE:
            return state-1

            case RESET:
            return 0

            default:
                return state;
    }
}
export default counterReducer;