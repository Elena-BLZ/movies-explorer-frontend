import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Navigation from "../Navigation/Navigation";
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import * as auth from "../../utils/Auth.js";
import { useHistory, Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);

  const history = useHistory();

  function handleError(err) {
    console.log("error", err.message);
  }

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getProfile()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => handleError(err));
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getSavedMovies()
        .then((data) => {
          setSavedMovies(data);
          console.log("savedMovies", data);
        })
        .catch((err) => console.log("err", err));
    }
  }, [loggedIn]);

  useEffect(() => {
    handleTokenCheck();
  }, []);

  function getAllMovies() {
    return moviesApi
      .getData()
      .then((data) => {
        localStorage.setItem("allMovies", JSON.stringify(data));
        return data;
      })
      .catch((err) => console.log("err", err));
  }

  const handleRegister = ({ name, email, password }) => {
    return auth
      .signup(email, password, name)
      .then((res) => {
        console.log("register!", res);
        handleLogin({ email, password });
      })
      .catch((err) => {
        handleError(err);
      });
  };
  function handleLogin({ email, password }) {
    return auth
      .signin(email, password)
      .then((data) => {
        if (data) {
          console.log("login", data);
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => handleError(err));
  }

  function handleProfileEdit(email, name) {
    console.log("editProfile name", name);
    console.log("editProfile email", email);

    mainApi
      .editProfile(email, name)
      .then((res) => {
        setCurrentUser(res);
        console.log("res", res);
      })
      .catch((err) => handleError(err));
  }

  function handleMovieSave(movieData) {
    console.log (movieData);
    mainApi
      .addMovie(movieData)
      .then((newMovie) => {
        setSavedMovies([...savedMovies, newMovie]);
      })
      .catch((err) => handleError(err));
  }

  function handleMovieUnSave(id) {
    mainApi
      .deleteMovie(id)
      .then(() => {
        setSavedMovies((state) => state.filter((movie) => movie._id!==id));
      })
      .catch((err) => handleError(err));
  }

  function handleMovieSaveStatusChange (movieData, saved_id, isSaved) {
    if (isSaved) {
      handleMovieUnSave (saved_id);
      return;
    } 
    handleMovieSave (movieData);
  }

  const signOut = () => {
    return auth
      .logOut()
      .then(() => {
        setLoggedIn(false);
        history.push("/signup");
        localStorage.clear();
      })
      .catch((err) => console.log(`Ошибка.....: ${err.message}`));
  };

  const handleTokenCheck = () => {
    return auth
      .getContent()
      .then((res) => {
        if (res) {
          console.log("tokencheck", res);
          setLoggedIn(true);
          //history.push("/movies");
        }
      })
      .catch((err) => console.log(`Ошибка.....: ${err.message}`));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <div className="app__container">
          <Switch>
            <Route exact path="/">
              <Header theme="color" positionStyle="main" isLogged={loggedIn} />
              <Main />
              <Footer />
            </Route>
            <Route path="/movies">
              <Header theme="light" positionStyle="main" isLogged={loggedIn} />
              <Movies
                getAllMovies={getAllMovies}
                savedMovies={savedMovies}
                onMovieSave={handleMovieSaveStatusChange}
              />
              <Footer />
            </Route>
            <Route path="/saved-movies">
              <Header theme="light" positionStyle="main" isLogged={loggedIn} />
              <SavedMovies
                savedMovies={savedMovies}
                onMovieSave={handleMovieSaveStatusChange}
              />
              <Footer />
            </Route>
            <Route path="/profile">
              <Header theme="light" positionStyle="main" isLogged={loggedIn} />
              <Profile onSubmit={handleProfileEdit} onExit={signOut} />
            </Route>
            <Route path="/signin">
              <Header theme="light" positionStyle="auth" isLogged={loggedIn} />

              <Login handleLogin={handleLogin} />
            </Route>
            <Route path="/signup">
              <Header theme="light" positionStyle="auth" isLogged={loggedIn} />
              <Register handleRegister={handleRegister} error={errorMessage} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
