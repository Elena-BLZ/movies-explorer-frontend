import React from "react";
import "./MoviesCard.css";
export default function MoviesCard({
  id,
  name,
  timing,
  poster,
  trailerLink,
  isSaved,
  _id,
  onMovieSave
}) {
  const buttonClass =
    "app__button movies-card__save-button " +
    (isSaved 
      ? "movies-card__save-button_mode_saved"
      : "movies-card__save-button_mode_unsaved");
  function handleSaveClick() {
    onMovieSave(_id, id, isSaved);
  }

  return (
    <article className="movies-card">
      <div className="movies-card__info">
        <h4 className="movies-card__name">{name}</h4>
        <p className="movies-card__timing">{`${timing} минут`}</p>
      </div>
      <img
        className="movies-card__poster"
        src={poster}
        alt={`Постер фильма "${name}"`}
      ></img>
      <button className={buttonClass} type="button" onClick={handleSaveClick}>
        Сохранить
      </button>
    </article>
  );
}
