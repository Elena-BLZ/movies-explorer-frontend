import React, { useState } from "react";
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

import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  function handleMoviesSearch(searchLine, isShort) {
    if (!localStorage.getItem("allMovies")) {
      getAllMovies();
    }

    const data = JSON.parse(localStorage.getItem("allMovies"));

    // search and return result
    return data;
  }
  function getAllMovies() {
    moviesApi
      .getData()
      .then((data) => {
        const strData = JSON.stringify(data);
        console.log("str", strData);
        localStorage.setItem("allMovies", strData);
      })

      .catch((err) => console.log("err", err));
  }

  return (
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
            <Movies handleSearch={handleMoviesSearch} />
            <Footer />
          </Route>
          <Route path="/saved-movies">
            <Header theme="light" positionStyle="main" isLogged={loggedIn} />
            <SavedMovies />
            <Footer />
          </Route>
          <Route path="/profile">
            <Header theme="light" positionStyle="main" isLogged={loggedIn} />
            <Profile />
          </Route>
          <Route path="/signin">
            <Header theme="light" positionStyle="auth" isLogged={loggedIn} />

            <Login />
          </Route>
          <Route path="/signup">
            <Header theme="light" positionStyle="auth" isLogged={loggedIn} />
            <Register />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
