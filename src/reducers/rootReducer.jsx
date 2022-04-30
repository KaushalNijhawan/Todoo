import addReducers from "./addReducers";
import updateReducer from "./updateReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    addReducers,
    updateReducer
});

export default rootReducer;