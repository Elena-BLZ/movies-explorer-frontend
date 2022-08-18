import React, { useState} from 'react'
import SearchForm from "../SearchForm/SearchForm"
import Preloader from "../Preloader/Preloader"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import "./Movies.css"

export default function Movies({handleSearch}) {
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSearchSubmit (searchLine, isShort) {
    setIsLoading (true);
    setSearchResult( handleSearch(searchLine, isShort));
    setIsLoading (false);
    console.log("res", searchResult);
  }
  return (
    <main className='movies'>
        <SearchForm onSearchSubmit={handleSearchSubmit}/>
        <Preloader isVisible = {isLoading}/>

        <MoviesCardList cardsData={searchResult}/>
    </main>
  )
}
