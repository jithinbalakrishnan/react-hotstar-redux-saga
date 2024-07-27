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
    const response = yield call(fetch, MOVIE_LIST_URL);
    const data = yield response.json();
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

export default function* allSagas() {
  yield all([watcherRequestMovieList()]);
}
