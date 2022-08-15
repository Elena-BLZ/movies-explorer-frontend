import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AuthForm.css";

export default function AuthForm({
  formName,
  title,
  buttonText,
  navText,
  navLinkTo,
  navLinkText,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  const nameLabelClass =
    "app__button auth-form__input-label " +
    (formName === "loginForm" && "auth-form__input-label_hide");

  return (
    <form className="auth-form" name={formName}>
      <h2 className="auth-form__title">{title}</h2>
      <label className={nameLabelClass}>
        Имя{" "}
        <input
          type="text"
          className="auth-form__input"
          placeholder="Имя"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        ></input>
      </label>
      <label className="app__button auth-form__input-label">
        E-mail
        <input
          type="email"
          className="auth-form__input"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        ></input>
      </label>
      <label className="app__button auth-form__input-label">
        Пароль
        <input
          type="password"
          className="auth-form__input"
          placeholder="Пароль"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        ></input>
      </label>

      <button className="auth-form__button app__button" type="submit">
        {buttonText}
      </button>
      <span className="auth-form__nav-span">
        {navText}
        <Link to={navLinkTo} className="app__button auth-form__nav-span-link">
          {navLinkText}
        </Link>
      </span>
    </form>
  );
}
