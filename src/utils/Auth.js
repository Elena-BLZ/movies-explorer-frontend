import { checkResponse } from "./utils";

export const BASE_URL = `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`;


<<<<<<< HEAD
export const signup = (email, password) => {
=======
export const signup = (email, password, name) => {
>>>>>>> level-2
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      email: email,
<<<<<<< HEAD
=======
      name: name,
>>>>>>> level-2
    }),
  }).then(checkResponse);
};
export const signin = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: 'include',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  }).then(checkResponse);
};
export const getContent = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};

export const logOut = () => {
<<<<<<< HEAD
  return fetch(`${BASE_URL}/logout`, {
=======
  return fetch(`${BASE_URL}/signout`, {
>>>>>>> level-2
    method: "GET",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};
