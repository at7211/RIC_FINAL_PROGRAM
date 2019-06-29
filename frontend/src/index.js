import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import history from './history';

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
import Admin from './views/AdminPage/AdminPage.jsx';
// import SimpleEditor from './views/FormPage/SimpleEditor.jsx';
import Activities from "views/Activities/Activities";
import Actpage from "views/Actpage/Actpage";
import Contactus from "views/Contactus/Contactus";




const client = new ApolloClient({ uri: "http://localhost:4000"});

const wrappedApp = (
    <ApolloProvider client={client}>
      <Router history={history}>
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
        <Switch>
          <Route path="/landing-page" component={LandingPage} />
          <Route path="/profile-page" component={ProfilePage} />
          <Route path="/login-page" component={LoginPage} />
          <Route path='/form-page' component={FormPage} />
          <Route path='/form-page2' component={FormPage2} />
          <Route path="/activities/:id" component={Actpage} />
          <Route path="/activities" component={Activities} />
          <Route path="/contactus" component={Contactus} />

          <Route path='/admin' component={Admin} />
          <Route path="/" component={Components} />
        </Switch>
      </Router>
    </ApolloProvider>
);

ReactDOM.render(
  wrappedApp, document.getElementById("root")
  );
