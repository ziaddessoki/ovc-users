import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root-reducer'

const middlewares = [logger, thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store