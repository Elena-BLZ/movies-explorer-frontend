import React, { useState, useContext, useEffect } from "react";
import "./Profile.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Profile({ onSubmit, onExit }) {

  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [inEditMode, setInEditMode] = useState(false);
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleEditClick() {
    setInEditMode(true);
  }
  function handleProfileSubmit(e) {
    e.preventDefault();
    if (!email || !name) {
      setError("Имя и email не могут быть пустыми");
      return;
    }
    onSubmit(email, name);
  }
  return (
    <form
      className="profile-form"
      name="profile-form"
      noValidate
      onSubmit={handleProfileSubmit}
    >
      <h2 className="profile-form__greeting">{`Привет, ${
        currentUser && currentUser.name
      }!`}</h2>
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
          disabled={!inEditMode}
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
          disabled={!inEditMode}
        ></input>
      </label>
      <ErrorMessage text={error} />
      {inEditMode ? (
        <button
          className="profile-form__save-button app__button"
          type="submit"
          disabled={error !== ""}
        >
          Сохранить
        </button>
      ) : (
        <>
          <button
            className="profile-form__edit-button app__button"
            type="button"
            onClick={handleEditClick}
          >
            Редактировать
          </button>
          <button
            className="profile-form__exit-button app__button"
            type="button"
            onClick={onExit}
          >
            Выйти из аккаунта
          </button>
        </>
      )}
    </form>
  );
}
