import React, { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import icon from "../../images/search-icon.svg";

export default function SearchForm({onSearchSubmit}) {
  const [searchLine, setSearchLine] = useState(localStorage.getItem("searchLine") || "");
  const [isShort, setIsShort] = useState((localStorage.getItem("isShort")==="true") || false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSearchChange(e) {
    setSearchLine(e.target.value);
  }
  function handleIsShortChange(e) {
    setIsShort(e.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchLine) {
      setErrorMessage("Нужно ввести ключевое слово")
      return;
    }
    onSearchSubmit (searchLine, isShort);
    setErrorMessage("");

  }

  return (
    <form className="search-form" noValidate onSubmit={handleSubmit}>
      <div className="search-form__container">
        <fieldset className="search-form__film-search">
          <img
            className="search-form__icon"
            src={icon}
            alt="Иконка поиска"
          ></img>
          <input
            type="search"
            placeholder="Фильм"
            className="search-form__query"
            required
            value={searchLine}
            onChange={handleSearchChange}
          ></input>
          <button
            className="app__button search-form__find-button"
            type="submit"
          >
            Найти
          </button>
        </fieldset>
        <FilterCheckbox text="Короткометражки" checked={isShort} onChange={handleIsShortChange}/>
      </div>
      <span className="search-form__error-message">{errorMessage}</span>
    </form>
  );
}
