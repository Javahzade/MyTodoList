import {createStore} from 'redux';
import {persistStore} from 'redux-persist';
import {pReducer} from './reducer';

export const store = createStore(pReducer);
export const persistor = persistStore(store);
