import React from "react";
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



import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Switch>
          <Route exact path="/">
            <Header theme="color"/>
            <Main />
            <Footer />
          </Route>
          <Route  path="/movies">
            <Header theme="light"/>
            <Movies />
            <Footer />
          </Route>
          <Route path="/saved-movies">
          <Header />
            <SavedMovies />
            <Footer />
          </Route>
          <Route path="/profile">
          <Header />
            <Profile />
            <Footer />
          </Route>
          <Route path="/signin">
          <Login />

          </Route>
          <Route path="/signup">
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
