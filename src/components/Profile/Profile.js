import React, { useState } from "react";
import "./Profile.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleEditClick() {

  }
  return (
    <form className="profile-form" name="profile-form">
      <h2 className="profile-form__greeting">Привет, Виталий!</h2>
      <label className="app__button profile-form__input-label">
        Имя
        <input
          className="profile-form__input"
          type="text"
          placeholder="Имя"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
          disabled
        ></input>
      </label>
      <label className="app__button profile-form__input-label">
        E-mail
        <input
          type="email"
          className="profile-form__input"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
          disabled
        ></input>
      </label>
      <ErrorMessage text=" " />
      <button className="profile-form__edit-button app__button" type="button"
      onClick={handleEditClick}>
        Редактировать
      </button>
      <button className="profile-form__exit-button app__button" type="button">
        Выйти из аккаунта
      </button>
      <button
        className="profile-form__save-button profile-form__button_hide app__button"
        type="submit"
      >
        Сохранить
      </button>
    </form>
  );
}
