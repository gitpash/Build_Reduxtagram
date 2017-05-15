// let's go!
import React, { Component } from "react";
import { render } from "react-dom";
import css from "./styles/style.styl";
import App from "./components/App";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";
import PropTypes from "prop-types";
import createReactClass from 'create-react-class';
//react-router depend-s
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import { Provider } from "react-redux";
import store, { history } from "./store";

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById("root"));
