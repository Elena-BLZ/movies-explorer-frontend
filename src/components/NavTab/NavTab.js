import React from "react";
import "./NavTab.css";

export default function NavTab() {
  return (
    <section className="nav-tab">
      <ul className="nav-tab__links">
        <li>
          <a className="nav-tab__link app_button" href="#about-project">
            О проекте
          </a>
        </li>
        <li>
          <a className="nav-tab__link app_button" href="#techs">
            Технологии
          </a>
        </li>
        <li>
          <a className="nav-tab__link app_button" href="#about-me">
            Студент
          </a>
        </li>
      </ul>
    </section>
  );
}
