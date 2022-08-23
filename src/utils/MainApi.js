import { checkResponse } from "./utils";
export const BASE_URL = `${window.location.protocol}${
  process.env.REACT_APP_API_URL || "//localhost:3001"
}`;

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: "include",
      headers: this._headers,
    }).then(checkResponse);
  }

  editProfile( email, name) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        name: name,
        
      }),
    }).then(checkResponse);
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      credentials: "include",
      headers: this._headers,
    }).then(checkResponse);
  }

  addMovie(
   { id, 
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    }
  ) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        country: country || " ",
        director: director || " ",
        duration: duration || 0,
        year: year || " ",
        description: description || " ",
        image: `https://api.nomoreparties.co/${image.url}` || " ",
        trailerLink: trailerLink,
        nameRU: nameRU || " ",
        nameEN: nameEN || " ",
        thumbnail: `https://api.nomoreparties.co/${image.formats.thumbnail.url}` || " ",
        movieId: id,
      }),
    }).then(checkResponse);
  }
  deleteMovie(_id) {
    return fetch(`${this._baseUrl}/movies/${_id}`, {
      method: "DELETE",
      credentials: "include",
      headers: this._headers,
    }).then(checkResponse);
  }
}

export const mainApi = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
