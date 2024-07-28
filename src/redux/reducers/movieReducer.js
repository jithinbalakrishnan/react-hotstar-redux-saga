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

// How it works -   const actionRequestMovieList = createAction('MOVIE/REQUEST_MOVIE_LIST');

// createAction A helper function for defining a Redux action type and creator.

// let action = actionRequestMovieList()
// { type: 'MOVIE/REQUEST_MOVIE_LIST' }
// action = actionRequestMovieList({user: 'Jithin'})
// returns { type: 'MOVIE/REQUEST_MOVIE_LIST'', payload: {user: 'Jithin'} }


// createReducer - Action creators can be passed directly to addCase in a createReducer() build callback.


export default reducer
