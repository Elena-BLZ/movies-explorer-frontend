import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import "../App/App.css"
/* import NavBar from "./NavBar"; */

export default function Header(props) {
  return (
    <header className="header app__header">
      <img src={logo} alt="Логотип" className="header__logo"></img>
    {/* <NavBar {...props}></NavBar>  */}
    </header>
  );
}