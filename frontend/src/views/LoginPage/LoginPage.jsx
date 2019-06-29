import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { Link, hashHistory } from "react-router";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";

import { Form, Field } from 'react-final-form';
import { Input, TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import history from '../../history.js';

const LOGIN = gql`
  mutation login(
    $account: String!
    $password: String!
  ){
    login(
      account: $account
      password: $password
    ) {
      token
    }
  }
`
      // account: "andre"
      // password: "Cep10andre"
const styles= {
  input: {
    margin: '0 0 17px 0',
    padding: '27px 0 0 0',
    width: '100%',
  }
}

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  onSubmit = (data, update) => {
    console.log('loginData', data)
    update({
      variables: {
        account: data.account,
        password: data.password,
      }
    }).then(() => history.push('./admin'))
  }

  validate = values => {
    const errors ={}
    if (!values.account) {
      errors.username = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <Mutation mutation={LOGIN}>
                    {update => (
                      <Form
                        onSubmit={data => this.onSubmit(data, update)}
                        validate={this.validate}
                        initialValues={({account: ''})}
                        render={({ handleSubmit, form, submitting, pristine, values}) => (
                          <form className={classes.form} onSubmit={handleSubmit}>
                            <CardHeader color="primary" className={classes.cardHeader}>
                              <h4>Login</h4>
                            </CardHeader>
                            <p className={classes.divider}>STAFF ID</p>
                            <CardBody>
                              <Field
                                name="account"
                                component={Input}
                                type="text"
                                endAdornment={
                                  <InputAdornment position="end">
                                    <People className={classes.inputIconsColor} />
                                  </InputAdornment>
                                }
                                style={styles.input}
                                placeholder="Account..."
                              />
                              <Field
                                name="password"
                                component={Input}
                                type="password"
                                endAdornment={
                                  <InputAdornment position="end">
                                    <Icon className={classes.inputIconsColor}>
                                      lock_outline
                                    </Icon>
                                  </InputAdornment>
                                }
                                style={styles.input}
                                placeholder="password"
                              />
                              {/* <Field
                                name="passowrd"
                                labelText="Password"
                                id="pass"
                                formControlProps={{
                                  fullWidth: true
                                }}
                                inputProps={{
                                  type: "password",
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <Icon className={classes.inputIconsColor}>
                                        lock_outline
                                      </Icon>
                                    </InputAdornment>
                                  ),
                                  autoComplete: "off"
                                }}
                                component={CustomInput}
                              /> */}
                            </CardBody>
                            <CardFooter className={classes.cardFooter}>
                              <Button simple color="primary" size="lg" type="submit">
                                LOGIN
                              </Button>
                            </CardFooter>
                          </form>
                        )}
                      />
                    )}
                  </Mutation>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(loginPageStyle)(LoginPage);
