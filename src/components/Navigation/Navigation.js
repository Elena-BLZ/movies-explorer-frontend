import React from "react";
import icon from "../../images/profile-icon.svg";
import { useHistory, Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation({ isLogged, isClosed, onNavOpen, onNavClose }) {
  const history = useHistory();
  const current = history.location.pathname;

  const generateClassName = (path) => {
    return `navigation__link ${
      path === current ? `navigation__link_current` : ""
    }`;
  };
  const containerClassName = `navigation__container ${
    isLogged && "navigation__container_logged"
  }`;
  return (
    <div className={`navigation ${isClosed && 'navigation_closed'}`}>
        <button className="navigation__toggle"type="button"
          aria-label="Навигация"
          onClick={onNavOpen}>
            <hr className="navigation__toggle-line"></hr>
            <hr className="navigation__toggle-line"></hr>
            <hr className="navigation__toggle-line"></hr>
        </button>
      <div className={containerClassName}>
        <button className="button navigation__close-button" type="button"
          aria-label="Закрыть"
          onClick={onNavClose}>
            <hr className="navigation__close-button-line"></hr>
            <hr className="navigation__close-button-line"></hr>
          </button>
        {isLogged && (
          <ul className="navigation__links">
            <li className="navigation__link-container navigation__link-container_main">
                <Link to="/" className={generateClassName("/")}>
                    Главная
                </Link>
            </li>
            <li className="navigation__link-container">
              <Link to="/movies" className={generateClassName("/movies")}>
                Фильмы
              </Link>
            </li>
            <li className="navigation__link-container">
              <Link
                to="/saved-movies"
                className={generateClassName("/saved-movies")}
              >
                Сохраненные фильмы
              </Link>
            </li>
          </ul>
        )}

        {isLogged ? (
          <button
            className="navigation__profile-button"
            onClick={() => {
              history.push("/profile");
            }}
          >
            Аккаунт
            <img
              className="navigation__profile-button-icon"
              alt="Иконка человечка"
              src={icon}
            />
          </button>
        ) : (
          <div className="navigation__auth-container">
            <Link to="/signup" className="navigation__link">
              Регистрация
            </Link>
            <button
              className="navigation__login-button"
              onClick={() => {
                history.push("/signin");
              }}
            >
              Войти
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
