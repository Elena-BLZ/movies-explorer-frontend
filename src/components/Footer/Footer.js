import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__date">© 2022</p>
        <ul className="footer__links">
          <li className="footer__link-container">
            <a
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
              aria-label="Яндекс.Практикум"
              className="app__button footer__link"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__link-container">
            <a
              href="https://github.com/Elena-BLZ"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="footer__link app__button"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
