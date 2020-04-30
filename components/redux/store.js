import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import {pReducer} from './reducer';

export const store = createStore(pReducer, applyMiddleware(logger));
export const persistor = persistStore(store);
