import createSagaMiddleware from '@redux-saga/core';
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

// import root reducer
import rootReducer from '../redux/ducks-reducer';

// import root saga 
import rootSaga from '../redux/saga';

const sagaMiddleware = createSagaMiddleware();

// apply middleware

let store;


if (__DEV__) {
    store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware, createLogger())
    )

} else {
    store = createStore(rootReducer,
        applyMiddleware(sagaMiddleware))
}

sagaMiddleware.run(rootSaga);

export { store };

