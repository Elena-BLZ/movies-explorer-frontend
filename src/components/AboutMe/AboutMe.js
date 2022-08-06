import React from "react";
import "./AboutMe.css";
import studentPhoto from "../../images/student-photo.jpg";

export default function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__section-title">Студент</h2>
      <div className="about-me__student-card">
        <div className="about-me__info-container">
          <h3 className="about-me__name">Елена Блаженских</h3>
          <p className="about-me__job">Веб-разработчик, 34 года</p>
          <p className="about-me__description">
            Я родилась в Тюмени, а живу в Санкт-Петербурге. Закончила с отличием
            ТюмГУ по специальности математик-программист. Люблю танцы, науки о
            мозге и сына. Сейчас решила вернуться в IT после долгого перерыва,
            заканчиваю курс по веб-разработке и ищу работу.
          </p>
          <ul className="about-me__links">
            <li>
              <a href="#" className="about-me__link">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="about-me__link">
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <img
          className="about-me__photo"
          src={studentPhoto}
          alt="Фото студента"
        ></img>
      </div>
    </section>
  );
}
