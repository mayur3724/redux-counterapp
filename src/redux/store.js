import { createStore, combineReducers} from "redux";
import counterReducer from "./reducers/counterReducer";
import songReducer from "./reducers/songReducer";

const rootReducer = combineReducers({
    counter:counterReducer,
    song:songReducer
})


const store = createStore(rootReducer);

export default store;

// counterReducer(undefined,undefined);