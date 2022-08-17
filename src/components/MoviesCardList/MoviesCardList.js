import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import poster1 from "../../images/poster-1.jpg";
import poster2 from "../../images/poster-2.jpg";
import poster3 from "../../images/poster-3.jpg";
import poster4 from "../../images/poster-4.jpg";

export default function MoviesCardList() {
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        <MoviesCard
          name="В погоне за Бенкси"
          timing="27 минут"
          poster={poster1}
          isSaved="true"
        />
        <MoviesCard
          name="В погоне за Бенкси"
          timing="27 минут"
          poster={poster2}
          isSaved="false"
        />
        <MoviesCard
          name="В погоне за Бенкси"
          timing="27 минут"
          poster={poster3}
          isSaved="false"
        />
        <MoviesCard
          name="В погоне за Бенкси"
          timing="27 минут"
          poster={poster4}
          isSaved="true"
        />
        <MoviesCard
          name="В погоне за Бенкси"
          timing="27 минут"
          poster={poster1}
          isSaved="true"
        />
      </div>
      <button className="app__button movies-card-list__more-button" type="button">Ещё</button>
    </section>
  );
}
