import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import rooSaga from './sagas/rootSaga';


// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// mount it on the Store
const store = configureStore({
  reducer: rootReducer, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run saga middleware
sagaMiddleware.run(rooSaga);

export default store