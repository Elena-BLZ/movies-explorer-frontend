import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__section-title">Портфолио</h4>
      <ul className="portfolio__items">
        <li className="portfolio__item">
          <a href="#" aria-label="" className="portfolio__item-name">
            Статичный сайт
          </a>
          <a href="#" aria-label="" className="portfolio__item-pic">
            ↗
          </a>
        </li>
        <li className="portfolio__item">
          <a href="#" aria-label="" className="portfolio__item-name">
            Адаптивный сайт
          </a>
          <a href="#" aria-label="" className="portfolio__item-pic">
            ↗
          </a>
        </li>
        <li className="portfolio__item">
          <a href="#" aria-label="" className="portfolio__item-name">
            Одностраничное приложение
          </a>
          <a href="#" aria-label="" className="portfolio__item-pic">
            ↗
          </a>
        </li>
      </ul>
    </section>
  );
}
