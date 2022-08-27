import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { filterMovies } from "../../utils/utils";

import "./SavedMovies.css";

export default function SavedMovies({ savedMovies, onMovieSave }) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(savedMovies || []);

  useEffect(() => {
    setSearchResult(savedMovies);
  }, [savedMovies]);

  function handleSearchSubmit(searchLine, isShort) {
    setIsLoading(true);
    setSearchResult(filterMovies(savedMovies, searchLine, isShort));
    setIsLoading(false);
  }

  function resetSearch() {
    return {
      searchLine: "",
      isShort: "",
    };
  }

  function handleMovieUnSave(savedId, id) {
    return onMovieSave(undefined, savedId);
  }

  return (
    <main className="saved-movies">
      <SearchForm onSearchSubmit={handleSearchSubmit} setSearch={resetSearch} />
      <Preloader isVisible={isLoading}/>
      <MoviesCardList
        cardsData={searchResult}
        savedMoviesData={savedMovies}
        onMovieSave={handleMovieUnSave}
        isFold={false}
      />
    </main>
  );
}
