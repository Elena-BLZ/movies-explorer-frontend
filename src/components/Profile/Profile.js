import React, { useState, useContext, useEffect } from "react";
import "./Profile.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../Validator/Validator";

export default function Profile({ onSubmit, onExit }) {
  const currentUser = useContext(CurrentUserContext);
  const [isDisabled, setIsDisabled] = useState(false);


  const { values, handleChange, errors, isValid , setValues } =
    useFormWithValidation();

  const [error, setError] = useState("");

  const [inEditMode, setInEditMode] = useState(false);
  useEffect(() => {
    if (currentUser) {
      setValues({...values, "name": currentUser.name, "email": currentUser.email})
    }
  }, [currentUser]);

  useEffect(() => {
    
    setError (inEditMode ? `${errors.email ? errors.email : ""} ${errors.name ? errors.name : ""}`: "");

  },[errors])

  function handleEditClick() {
    setInEditMode(true);
  }
  function handleProfileSubmit(e) {
    e.preventDefault();

    if ((values.email!== currentUser.email)||(values.name!== currentUser.name)) {
      setIsDisabled (true);

      onSubmit(values.email, values.name)
      .then(()=>setIsDisabled (false))
      .catch(()=>setIsDisabled (false));
       return;
    }
    setError ("Данные не изменились");
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
          value={values.name}
          onChange={handleChange}
          required
          disabled={!inEditMode && isDisabled}
        ></input>
      </label>
      <label className="app__button profile-form__input-label">
        E-mail
        <input
          type="email"
          className="profile-form__input"
          placeholder="Email"
          name="email"
          pattern="\S+@\S+\.\S+"
          title="Например: test@test.ru"
          value={values.email}
          onChange={handleChange}
          required
          disabled={!inEditMode && isDisabled}
        ></input>
      </label>
      <ErrorMessage text={error} />
      {inEditMode ? (
        <button
          className="profile-form__save-button app__button"
          type="submit"
          disabled={!isValid && isDisabled}
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
