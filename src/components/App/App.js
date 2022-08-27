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
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import * as auth from "../../utils/Auth.js";
import { useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [infoToolTip, setInfoToolTip] = useState({});

  const history = useHistory();

  function handleError(err, show) {
    if (!show)
    {
      console.log ("Error: ", err.message);
      return;
    }
    setErrorPopup( err.message);
  }

  function setErrorPopup(message) {
    const infoPopUp = 
     { isOpen: true,
          text: message ? message : "Что-то пошло не так! Попробуйте ещё раз.",
          onClose: () => setInfoToolTip({ ...infoToolTip, isOpen: false }),
        };
    setInfoToolTip(infoPopUp);
  }

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getProfile()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => handleError(err, true));
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getSavedMovies()
        .then((data) => {
          setSavedMovies(data);
        })
        .catch((err) => handleError(err, true));
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
      .catch((err) => handleError(err));
    }

  const handleRegister = ({ name, email, password }) => {
    return auth
      .signup(email, password, name)
      .then((res) => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        handleError(err, true);
      });
  };
  function handleLogin({ email, password }) {
    return auth
      .signin(email, password)
      .then((data) => {
        if (data) {
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => handleError(err, true));
  }

  function handleProfileEdit(email, name) {
    return mainApi
      .editProfile(email, name)
      .then((res) => {
        setCurrentUser(res);
        setErrorPopup("Данные сохранены!");
        return res;
        
      })
      .catch((err) => handleError(err, true));
  }

  function handleMovieSave(movieData) {
    return mainApi
      .addMovie(movieData)
      .then((newMovie) => {
        setSavedMovies([...savedMovies, newMovie]);
        return true;
      })
      .catch((err) => handleError(err, true));
  }

  function handleMovieUnSave(id) {
    return mainApi
      .deleteMovie(id)
      .then(() => {
        setSavedMovies((state) => state.filter((movie) => movie._id !== id));
        return true;
      })
      .catch((err) => handleError(err, true));
  }

  function handleMovieSaveStatusChange(movieData, saved_id) {
    if (saved_id) {
      return handleMovieUnSave(saved_id);
      ;
    }
    return handleMovieSave(movieData);
  }

  const signOut = () => {
    return auth
      .logOut()
      .then(() => {
        setLoggedIn(false);
        history.push("/");
        localStorage.clear();
      })
      .catch((err) => handleError(err, true));
    };

  const handleTokenCheck = () => {
    return auth
      .getContent()
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => handleError(err, false));
    };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <div className="app__container">
          <Switch>
            <Route path="/signin">
              <Header theme="light" positionStyle="auth" isLogged={loggedIn} />
              <Login handleLogin={handleLogin} />
            </Route>
            <Route path="/signup">
              <Header theme="light" positionStyle="auth" isLogged={loggedIn} />
              <Register handleRegister={handleRegister} />
            </Route>

            <Route exact path="/">
              <Header theme="color" positionStyle="main" isLogged={loggedIn} />
              <Main />
              <Footer />
            </Route>
            <ProtectedRoute path="/movies" loggedIn={loggedIn}>
              <Header theme="light" positionStyle="main" isLogged={loggedIn} />
              <Movies
                getAllMovies={getAllMovies}
                savedMovies={savedMovies}
                onMovieSave={handleMovieSaveStatusChange}
              />
              <Footer />
            </ProtectedRoute>
            <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
              <Header theme="light" positionStyle="main" isLogged={loggedIn} />
              <SavedMovies
                savedMovies={savedMovies}
                onMovieSave={handleMovieSaveStatusChange}
              />
              <Footer />
            </ProtectedRoute>
            <ProtectedRoute path="/profile" loggedIn={loggedIn}>
              <Header theme="light" positionStyle="main" isLogged={loggedIn} />
              <Profile onSubmit={handleProfileEdit} onExit={signOut} />
            </ProtectedRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <InfoTooltip
          isOpen={infoToolTip.isOpen}
          text={infoToolTip.text}
          onClose={infoToolTip.onClose}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
