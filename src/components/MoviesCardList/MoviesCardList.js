import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export default function MoviesCardList({ cardsData, savedMoviesData, onMovieSave, isFold }) {
  const CARDS_SHOW = {
    w1280: { start: 12, add: 3 },
    w768: { start: 8, add: 2 },
    w320: { start: 5, add: 2 },
  };
  const [windowWidth, setWindowWidth] = useState(
    document.documentElement.clientWidth
  );
  const [showCount, setShowCount] = useState(0);
  function handleResize() {
    setTimeout(() => {
      setWindowWidth(document.documentElement.clientWidth);
    }, 1000);
  }
  useEffect(() => {
    if (!isFold) {
      setShowCount (undefined);
      return;
    }
    setWindowWidth(document.documentElement.clientWidth);
    console.log("width", windowWidth);

    setShowCount(
      windowWidth >= 1280
        ? CARDS_SHOW.w1280.start
        : windowWidth >= 768
        ? CARDS_SHOW.w768.start
        : CARDS_SHOW.w320.start
    );
    window.addEventListener("resize", handleResize);
    console.log ("cardlist", cardsData);
    

    // return window.removeEventListener("resize", handleResize);
  }, []);
  function addCardsToShow() {
    const addCount =
      windowWidth >= 1280
        ? CARDS_SHOW.w1280.add
        : windowWidth >= 768
        ? CARDS_SHOW.w768.add
        : CARDS_SHOW.w320.add;
    setShowCount(showCount + addCount);
  }

  return (
    <section className="movies-card-list">
      { 
      (cardsData.length === 0 && localStorage.getItem("searchLine")) && (
        <p className="movies-card-list__nothing">Ничего не найдено</p>
      )}
      <div className="movies-card-list__container">
        {
        (cardsData.slice(0, showCount).map((card) => {
          const cardId = card.id || card.movieId;
          if (!card._id)
          {
            const savedItem = savedMoviesData.find ((item)=> item.movieId === cardId);
const savedId = savedItem ? savedItem._id : undefined;
card._id=savedId
          }
          
          const isSaved = card._id && true ;
          //console.log ("card", cardId, savedItem, savedId, isSaved);
          return (
            <MoviesCard
              key={cardId}
              id={cardId}
              
              name={card.nameRU}
              timing={card.duration}
              poster={card.image.url ? `https://api.nomoreparties.co/${card.image.url}` : card.image}
              trailerLink={card.trailerLink}
              isSaved={isSaved}
              _id = {card._id}
              onMovieSave={onMovieSave}
            />
          );
        }))}
      </div>
      {(showCount < cardsData.length && (
        <button
          className="app__button movies-card-list__more-button"
          type="button"
          onClick={addCardsToShow}
        >
          Ещё
        </button>
      ))}
    </section>
  );
}
