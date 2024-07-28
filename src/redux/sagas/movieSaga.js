import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  actionRequestMovieList,
  actionSetMovieList,
  actionSetErrorMovieList,
} from "../reducers/movieReducer";
import { MOVIE_LIST_URL } from "../../constants/constant";


// ---------------- WORKER SAGA ----------------  //

export function* workerRequestMovieList() {
  try {
    // Both call() and put() are effect creator functions.
    // call() is a blocking effect, which means that the saga will wait for promise resolving before moving on to the next step.
    const response = yield call(fetch, MOVIE_LIST_URL);
    const data = yield response.json();
     // Dispatch an action to the store using put()
    yield put(actionSetMovieList(data.results));
  } catch (error) {
    yield put(actionSetErrorMovieList(error));
  } finally {
    // Loader state
  }
}
// ---------------- WATCHER SAGA ----------------  //

function* watcherRequestMovieList() {
  yield takeLatest(actionRequestMovieList.type, workerRequestMovieList);
}

// takeEvery - enables the use of several fetchData objects at the same time. 
// At a given moment, we can start a new fetchData task while there are still one or more previous fetchData tasks 
// which have not yet terminated.

// takeLatest - Only one fetchData task can be active at any given moment. 
// It will also be the work that was started most recently. If a new fetchData job is started while a previous task is still running, 
// the previous work will be terminated immediately.

export default function* allSagas() {
  yield all([watcherRequestMovieList()]);
}

// all() is an effect creator, which tells the saga to run all sagas passed to it concurrently and to wait for them all to complete. 
// We pass an array of sagas that encapsulates our domain logic.
