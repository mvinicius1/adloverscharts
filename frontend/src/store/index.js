import { createStore } from 'redux';
import userReducer from './userReducer';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfing = {
    key: 'adloversusers' ,
    storage,
}

const persistedReducer = persistReducer (persistConfing, userReducer)

const store = createStore (persistedReducer);
const persistor = persistStore(store);

export {store, persistor};