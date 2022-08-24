import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AuthForm.css";
import { useFormWithValidation } from "../Validator/Validator";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
export default function AuthForm({
  formName,
  title,
  buttonText,
  navText,
  navLinkTo,
  navLinkText,
  onSubmit,
  errorMessage,
}) {

  const { values, handleChange, errors, isValid } =
    useFormWithValidation();

  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  useEffect(() => {
    console.log(values);
  }, []);

  return (
    <form
      className="auth-form"
      name={formName}
      noValidate
      onSubmit={handleFormSubmit}
    >
      <h2 className="auth-form__title">{title}</h2>
      {formName !== "loginForm" && (
        <label className="app__button auth-form__input-label">
          Имя
          <input
            type="text"
            className="auth-form__input"
            placeholder="Имя"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          ></input>
          <span className="auth-form__error-message">{errors.name}</span>
        </label>
      )}
      <label className="app__button auth-form__input-label">
        E-mail
        <input
          type="email"
          className="auth-form__input"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        ></input>
        <span className="auth-form__error-message">{errors.email}</span>
      </label>
      <label className="app__button auth-form__input-label">
        Пароль
        <input
          type="password"
          className="auth-form__input"
          placeholder="Пароль"
          name="password"
          value={values.password}
          onChange={handleChange}
          required
        ></input>
        <span className="auth-form__error-message">{errors.password}</span>
      </label>
      <ErrorMessage text={errorMessage} />
      <button
        className="auth-form__button app__button"
        type="submit"
        disabled={!isValid}
      >
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
