import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { filterMovies } from "../../utils/utils";

import "./Movies.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function Movies({ getAllMovies }) {
  const [searchResult, setSearchResult] = useState(
    JSON.parse(localStorage.getItem("searchResult")) || []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  function handleSearchSubmit(searchLine, isShort) {
    setIsLoading(true);
    setErrorMessage("");
    handleMoviesSearch(searchLine, isShort);

    setIsLoading(false);
  }

  function handleMoviesSearch(searchLine, isShort) {
    if (!localStorage.getItem("allMovies")) {
      getAllMovies()
        .then((data) => {
          const res = processMoviesSearch(data, searchLine, isShort);
          setSearchResult(res);
        })
        .catch((err) => setErrorMessage("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"));
    } else {
      const data = JSON.parse(localStorage.getItem("allMovies"));
      const res = processMoviesSearch(data, searchLine, isShort);
      setSearchResult(res);
    }
  }

  function processMoviesSearch(data, searchLine, isShort) {
    const res = filterMovies(data, searchLine, isShort);
    storageSearch(res, searchLine, isShort);
    return res;
  }
  function storageSearch(data, searchLine, isShort) {
    localStorage.setItem("searchResult", JSON.stringify(data));
    localStorage.setItem("searchLine", searchLine);
    localStorage.setItem("isShort", isShort);
  }

  return (
    <main className="movies">
      <SearchForm onSearchSubmit={handleSearchSubmit} />
      <Preloader isVisible={isLoading} />
      <ErrorMessage text={errorMessage}/>
      <MoviesCardList cardsData={searchResult} />
    </main>
  );
}
