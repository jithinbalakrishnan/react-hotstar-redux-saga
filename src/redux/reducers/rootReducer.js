import movieReducer from './movieReducer';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    movie: movieReducer,
});

export default rootReducer;