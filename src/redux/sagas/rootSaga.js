import { all } from "redux-saga/effects";

// IMPORT CUSTOM SAGAS

import movieSaga from './movieSaga';


export default function* rootSaga() {
 yield all([movieSaga()]);
}