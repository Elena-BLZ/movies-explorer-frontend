import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { filterMovies } from "../../utils/utils";
import "./Movies.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { MOVIES_SEARCH_ERROR } from "../../utils/constants";

export default function Movies({ getAllMovies, savedMovies, onMovieSave }) {
  const [searchResult, setSearchResult] = useState(
    JSON.parse(localStorage.getItem("searchResult")) || []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setSearchResult(searchResult);
  }, [savedMovies]);

  function handleSearchSubmit(searchLine, isShort) {
    setIsLoading(true);
    setErrorMessage("");
    handleMoviesSearch(searchLine, isShort);
  }

  function handleMoviesSearch(searchLine, isShort) {
    const defaultData = localStorage.getItem("allMovies");
    if (defaultData) {
      const data = JSON.parse(defaultData);
      setSearchResult(processMoviesSearch(data, searchLine, isShort));
      return;
    }
    getAllMovies()
      .then((data) => {
        setSearchResult(processMoviesSearch(data, searchLine, isShort));
        setIsLoading(false);
      })
      .catch(() => setErrorMessage(MOVIES_SEARCH_ERROR));
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

  function setSearch() {
    return {
      searchLine: localStorage.getItem("searchLine") || "",
      isShort: localStorage.getItem("isShort") === "true" || false,
    };
  }

  function handleMovieSave(savedId, id) {
    const movieData = savedId
      ? undefined
      : searchResult.find((item) => item.id === id);
   return onMovieSave(movieData, savedId);
  }

  return (
    <main className="movies">
      <SearchForm onSearchSubmit={handleSearchSubmit} setSearch={setSearch} />
      <Preloader isVisible={isLoading} />
      <ErrorMessage text={errorMessage} />
      <MoviesCardList
        cardsData={searchResult}
        savedMoviesData={savedMovies}
        onMovieSave={handleMovieSave}
        isFold={true}
      />
    </main>
  );
}
