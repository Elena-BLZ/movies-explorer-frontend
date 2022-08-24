import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { CARDS_SHOW } from "../../utils/constants";

export default function MoviesCardList({
  cardsData,
  savedMoviesData,
  onMovieSave,
  isFold,
}) {

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
      setShowCount(undefined);
      return;
    }
    setWindowWidth(document.documentElement.clientWidth);
    setShowCount(
      windowWidth >= 1280
        ? CARDS_SHOW.w1280.start
        : windowWidth >= 768
        ? CARDS_SHOW.w768.start
        : CARDS_SHOW.w320.start
    );
    window.addEventListener("resize", handleResize);
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
      {cardsData.length === 0 && localStorage.getItem("searchLine") && (
        <p className="movies-card-list__nothing">Ничего не найдено</p>
      )}
      <div className="movies-card-list__container">
        {cardsData.slice(0, showCount).map((card) => {
          const cardId = card.id || card.movieId;
          const savedItem = savedMoviesData.find(
            (item) => item.movieId === cardId
          );
          const savedId = savedItem ? savedItem._id : undefined;
          card._id = savedId;
          return (
            <MoviesCard
              key={cardId}
              id={cardId}
              name={card.nameRU}
              timing={card.duration}
              poster={
                card.image.url
                  ? `https://api.nomoreparties.co/${card.image.url}`
                  : card.image
              }
              trailerLink={card.trailerLink}
              _id={card._id}
              onMovieSave={onMovieSave}
            />
          );
        })}
      </div>
      {showCount < cardsData.length && (
        <button
          className="app__button movies-card-list__more-button"
          type="button"
          onClick={addCardsToShow}
        >
          Ещё
        </button>
      )}
    </section>
  );
}
