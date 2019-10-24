import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./RootReducer";

const initialState = {};
const middleware = [thunk, logger];

const composedEnhancers = compose(applyMiddleware(...middleware));

export default createStore(rootReducer, initialState, composedEnhancers);
