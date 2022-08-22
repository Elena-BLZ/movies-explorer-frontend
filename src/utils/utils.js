import {SHORT_FILM_DURATION} from "./constants";

export const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((data) => {
      const errMessage = data.statusCode === 400 ? `Данные введены неверно. (${data.validation.body.message})` : data.message;
      throw new Error(errMessage);
    })
  };

  export const filterMovies = (data, searchLine, isShort ) => {
    function isRelevant (item){
      if (item.nameRU.toLowerCase().includes (searchLine.toLowerCase ()) &&( (isShort &&
      item.duration<= SHORT_FILM_DURATION) || !isShort)) {
        return true;
      }
      return false;
    }
    const res = data.filter (isRelevant);
    return res;
  }

