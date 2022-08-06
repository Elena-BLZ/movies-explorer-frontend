import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__container">
      <Header />
      <Main />
      <Footer />

        {/* <Switch>
          <Route exact path="/">
            <Header />

            <Main />
          </Route>
        </Switch> */}
      </div>
    </div>
  );
}

export default App;
