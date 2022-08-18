import React from "react";
import landingLogo from "../../images/landing-logo.svg";

import "./Promo.css";

export default function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img className="promo__landing-logo" src={landingLogo} alt="Логотип Яндекс Практикум"></img>
    </section>
  );
}
