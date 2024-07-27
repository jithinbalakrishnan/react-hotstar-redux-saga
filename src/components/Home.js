import React, { useCallback, useEffect, useState } from "react";
import { MOVIE_LIST_URL, MOVIE_SEARCH_URL } from "../constants/constant";
import Cards from "./Cards/Cards";
import useDebounce from "../utils/CustomHooks/useDebounce";

import { actionRequestMovieList } from "../redux/reducers/movieReducer";
import { useDispatch, useSelector } from "react-redux";
import { selectMovieList } from "../redux/selectors";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [movieList, setMovieList] = useState([]);

  const dispatch = useDispatch();

  const movieData = useSelector(selectMovieList);

  const debouncedInputValue = useDebounce(searchText, 1000);

  useEffect(() => {
    if (debouncedInputValue) {
      getSearchResults(debouncedInputValue);
    }
    {
      dispatch(actionRequestMovieList());
    }
  }, [debouncedInputValue]);

  useEffect(() => {
    if (movieData) {
      setMovieList(movieData);
    }
  }, [movieData]);

  const getSearchResults = (value) => {
    try {
      fetch(MOVIE_SEARCH_URL + value)
        .then((res) => res.json())
        .then((data) => {
          setMovieList(data?.results);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    let value = e.target.value;
    setSearchText(value);
  };

  return (
    <div>
      <p>HotStar</p>
      <input onChange={handleInputChange}></input>
      <p>Trending Movies</p>
      <Cards list={movieList} />
    </div>
  );
};
export default Home;
