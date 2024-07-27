import { createAction, createReducer } from "@reduxjs/toolkit";

export const actionRequestMovieList = createAction('MOVIE/REQUEST_MOVIE_LIST');
export const actionSetMovieList = createAction('MOVIE/SET_MOVIE_LIST');
export const actionSetErrorMovieList = createAction('MOVIE/SET_ERROR_MOVIE_LIST');


const initialState = {
    movieList: [],
    requestMovieError: {}
}

const reducer = createReducer(
    initialState,
    (builder) => {
        builder.addCase(actionSetMovieList, (state,action) => {
            state.movieList = action.payload
            state.movieError = initialState.requestMovieError
        })
    }
);

export default reducer
