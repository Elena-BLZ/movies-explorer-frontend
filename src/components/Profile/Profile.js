import React, { useState } from "react";
import "./Profile.css"
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
  return (
    <form className='profile-form' name="profile-form">
      <h2 className='profile-form__greeting'>Привет, Виталий!</h2>
      <label className='profile-form__input-label'>
        Имя
        <input className='profile-form__input'
        type="text"
        placeholder='Имя'
        name="name"
        value={name}
        onChange={handleNameChange}
        required disabled>
          
        </input>
      </label>
      <label className="profile-form__input-label">
      E-mail
      <input
        type="email"
        className="profile-form__input"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        required disabled
      ></input>
            </label>
<ErrorMessage text=" "/>
            <button className="profile-form__redact-button ">Редактировать</button>
            <button className="profile-form__exit-button ">Выйти из аккаунта</button>
            <button className="profile-form__save-button profile-form__button_hide" type="submit">Сохранить</button>
      </form>
      
  )
}
