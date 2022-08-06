import React from "react";
import "./NavTab.css";

export default function NavTab() {
  return (
    <section className="nav-tab">
      <ul className="nav-tab__links">
        <li>
          <a className="nav-tab__link" href="#">
            О проекте
          </a>
        </li>
        <li>
          <a className="nav-tab__link" href="#">
            Технологии
          </a>
        </li>
        <li>
          <a className="nav-tab__link" href="#">
            Студент
          </a>
        </li>
      </ul>
    </section>
  );
}
