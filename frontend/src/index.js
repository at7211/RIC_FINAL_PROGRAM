import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import "assets/scss/material-kit-react.scss?v=1.7.0";

// pages for this product
import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import FormPage from './views/FormPage/FormPage.jsx';
import FormPage2 from './views/FormPage/FormPage2.jsx';
import Header from "components/Header/Header.jsx";
import HeaderLinks from './components/Header/HeaderLinks.jsx';


const client = new ApolloClient({ uri: "http://localhost:4000"});

const wrappedApp = (
    <ApolloProvider client={client}>
      <Router>
        <Header
            color="white"
            brand="NTU CEP"
            fixed
            changeColorOnScroll={{
              height: 400,
              color: "white"
            }}
            rightLinks={<HeaderLinks />}
          />
                {/* <Header
          absolute
          color="transparent"
          brand="NTU CEP"
          rightLinks={<HeaderLinks />}
          {...rest} */}
        <Switch>
          <Route path="/landing-page" component={LandingPage} />
          <Route path="/profile-page" component={ProfilePage} />
          <Route path="/login-page" component={LoginPage} />
          <Route path='/form-page' component={FormPage} />
          <Route path='/form-page2' component={FormPage2} />
          <Route path="/" component={Components} />
        </Switch>
      </Router>
    </ApolloProvider>
);

ReactDOM.render(
  wrappedApp, document.getElementById("root")
  );
