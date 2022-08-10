import React from "react";
import "./MoviesCard.css";
export default function MoviesCard({ name, timing, poster, isSaved }) {
  const buttonClass =
    "button movies-card__save-button " +
    (isSaved==="true"
      ? "movies-card__save-button_mode_saved"
      : "movies-card__save-button_mode_unsaved");
  return (
    <article className="movies-card">
      <div className="movies-card__info">
        <h4 className="movies-card__name"> {name}</h4>
        <p className="movies-card__timing">{timing}</p>
      </div>
      <img className="movies-card__poster" src={poster}></img>
      <button className={buttonClass}> Сохранить</button>
    </article>
  );
}
