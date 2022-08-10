import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import icon from "../../images/search-icon.svg";

export default function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__container">
        <fieldset className="search-form__film-search">
          <img className="search-form__icon" src={icon}></img>

          <input
            type="search"
            placeholder="Фильм"
            className="search-form__query"
          ></input>
          <button className="button search-form__find-button">Найти</button>
        </fieldset>
        <FilterCheckbox text="Короткометражки" />
      </div>
    </form>
  );
}
