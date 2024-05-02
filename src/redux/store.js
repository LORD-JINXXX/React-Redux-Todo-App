//In this file we make the store for the root reducer

import { createStore } from "redux";
import { rootReducer } from "./rootReducers";

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)