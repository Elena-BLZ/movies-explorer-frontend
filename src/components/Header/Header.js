import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import "../App/App.css"
/* import NavBar from "./NavBar"; */

export default function Header({theme, style}) {
    const headerClassName = "header app__header "+ "header_theme_"+theme +" header_style_"+style;
    const logoClassName = "header__logo header__logo_style_"+style; 
 
  return (
    <header className={headerClassName}>
      <img src={logo} alt="Логотип" className={logoClassName}></img>
    {/* <NavBar {...props}></NavBar>  */}
    </header>
  );
}