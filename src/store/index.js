import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
import watchNews from './sagas';
import rootReducer from './reducers';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
	process.env.NODE_ENV === 'development'
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: null || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(watchNews);

export const persistor = persistStore(store);

export default store;
