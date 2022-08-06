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
          <li>
            <a href="#" aria-label="" className="footer__link">
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a href="#" aria-label="" className="footer__link">
              GitHub
            </a>
          </li>
          <li>
            <a href="#" aria-label="" className="footer__link">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
