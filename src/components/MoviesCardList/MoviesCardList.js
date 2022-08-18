import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export default function MoviesCardList({ cardsData }) {
  const CARDS_SHOW = {
    w1280: { start: 12, add: 3 },
    w768: { start: 8, add: 2 },
    w320: { start: 5, add: 2 },
  };
  const [windowWidth, setWindowWidth] = useState(0);
  const [showCount, setShowCount] = useState(0);
  function handleResize() {
    setTimeout(() => {
      setWindowWidth(document.documentElement.clientWidth);
    }, 1000);
  }
  useEffect(() => {
    setWindowWidth(document.documentElement.clientWidth);
    console.log("width", windowWidth);
    
    setShowCount(
      windowWidth >= 1280
        ? CARDS_SHOW.w1280.start
        : (windowWidth >= 768
        ? CARDS_SHOW.w768.start
        : CARDS_SHOW.w320.start)
    );
    window.addEventListener("resize", handleResize);
  },[]);
  function addCardsToShow() {
    const addCount =  windowWidth >= 1280
    ? CARDS_SHOW.w1280.add
    : (windowWidth >= 768
    ? CARDS_SHOW.w768.add
    : CARDS_SHOW.w320.add);
    setShowCount(showCount + addCount);
  }

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        {cardsData.slice(0, showCount).map((card) => {
          const cardId = card.id;
          return (
            <MoviesCard
              key={cardId}
              name={card.nameRU}
              timing={card.duration}
              poster={card.image.url}
              trailerLink={card.trailerLink}
              isSaved="false"
            />
          );
        })}
      </div>
      {showCount <= cardsData.length && (
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
