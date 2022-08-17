import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__section-title">Портфолио</h4>
      <ul className="portfolio__items">
        <li className="portfolio__item app__button">
          <a
            href="https://github.com/Elena-BLZ/how-to-learn"
            target="_blank"
            aria-label="Статичный сайт"
            className="portfolio__item-name"
          >
            Статичный сайт
          </a>
          <a
            href="https://github.com/Elena-BLZ/how-to-learn"
            target="_blank"
            aria-label="Статичный сайт"
            className="portfolio__item-pic"
          >
            ↗
          </a>
        </li>
        <li className="portfolio__item app__button">
          <a
            href="https://github.com/Elena-BLZ/russian-travel"
            target="_blank"
            aria-label="Адаптивный сайт"
            className="portfolio__item-name"
          >
            Адаптивный сайт
          </a>
          <a
            href="https://github.com/Elena-BLZ/russian-travel"
            target="_blank"
            aria-label="Адаптивный сайт"
            className="portfolio__item-pic"
          >
            ↗
          </a>
        </li>
        <li className="portfolio__item app__button">
          <a
            href="https://github.com/Elena-BLZ/react-mesto-api-full"
            target="_blank"
            aria-label="Одностраничное приложение"
            className="portfolio__item-name"
          >
            Одностраничное приложение
          </a>
          <a
            href="https://github.com/Elena-BLZ/react-mesto-api-full"
            target="_blank"
            aria-label="Одностраничное приложение"
            className="portfolio__item-pic"
          >
            ↗
          </a>
        </li>
      </ul>
    </section>
  );
}
