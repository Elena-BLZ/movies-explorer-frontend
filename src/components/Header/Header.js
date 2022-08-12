import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import "../App/App.css"
import Navigation from "../Navigation/Navigation";

export default function Header({theme, positionStyle}) {
    const headerClassName = "header app__header "+ "header_theme_"+theme +" header_style_"+positionStyle;
    const logoClassName = "header__logo header__logo_style_"+positionStyle; 
 
  return (
    <header className={headerClassName}>
      <img src={logo} alt="Логотип" className={logoClassName}></img>
   <Navigation mode="header"/>
    </header>
  );
}