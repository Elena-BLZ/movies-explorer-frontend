import { checkResponse } from "./utils";

class MoviesApi {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }



getDava() {
    return fetch(`${this._baseUrl}`, {
      credentials: 'include',
      headers: this._headers,
    }).then(checkResponse);
  }

}

export const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
      "Content-Type": "application/json",
    },
  });