import { createStore } from 'redux';
import rootReducer from './reducers/index';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfing = {
    key: 'adloversusers' ,
    storage,
}

const persistedReducer = persistReducer (persistConfing, rootReducer)

const store = createStore (persistedReducer);
const persistor = persistStore(store);

export {store, persistor};