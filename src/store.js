import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
export const store = createStoreWithMiddleware(reducers);