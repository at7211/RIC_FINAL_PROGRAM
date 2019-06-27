import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import "assets/scss/material-kit-react.scss?v=1.7.0";

// pages for this product
import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import Activities from "views/Activities/Activities";
import Actpage from "views/Actpage/Actpage";



const client = new ApolloClient({ uri: "http://localhost:4001"});

let hist = createBrowserHistory();

const wrappedApp = (
  <ApolloProvider client={client}>
    <Router history={hist}>
      <Switch>
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/act" component={Activities} />
        <Route path="/act_1" component={Actpage} />
        <Route path="/" component={Components} />
      </Switch>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(wrappedApp, document.getElementById("root"));
