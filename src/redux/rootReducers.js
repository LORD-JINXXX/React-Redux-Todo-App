//In this file we combine all types of reducers for different app like todoApp, bookListApp etc.

import { combineReducers } from "redux";
import { operationReducers} from "./todoApp/reducers/operations";

export const rootReducer = combineReducers({
    operationReducers: operationReducers,
    //more reducers can be added here
});