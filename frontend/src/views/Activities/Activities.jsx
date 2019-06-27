import React from "react";
import { Router, Route, Switch, NavLink } from "react-router-dom";

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
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";

class Activities extends React.Component {
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
      function () {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
    const { classes, ...rest } = this.props;

    const fakedata1 = [{
      id: 0,
      title: "louis",
      image: ""
    }, {
      id: 1,
      title: "fuckboy",
      image: ""
    }, {
      id: 2,
      title: "pudding",
      image: ""
    }]
    const fakedata2 = [{
      id: 3,
      title: "jojo",
      image: ""
    }, {
      id: 4,
      title: "breakup",
      image: ""
    }, {
      id: 5,
      title: "1500",
      image: ""
    }]


    return (

      <div>

        <Header
          absolute
          color="transparent"
          brand="NTU CEP"
          rightLinks={<HeaderLinks />}
          {...rest}
        />

        <div
          className={classes.pageHeader}
          style={{
            // backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          {/* 第一個container */}
          <div className={classes.container}>
            {fakedata1.map(post =>
              <div className={classes.marginstyle}>
                < iframe width="300"
                  height="220"
                  src={image}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                  scrolling="no"
                >
                </iframe>
                <div><NavLink>{post.title}</NavLink></div>
                <div><NavLink>test</NavLink></div>

                <div><NavLink>test</NavLink></div>

              </div>)}

          </div>

          {/* 第二個container 之後都使用地二個 三個三個一組map */}
          <div className={classes.container2}>


            {fakedata2.map(post =>
              <div className={classes.marginstyle}>
                < iframe width="300"
                  height="220"
                  src={image}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                  scrolling="no"
                >
                </iframe>
                <div><NavLink>{post.title}</NavLink></div>
                <div><NavLink>test</NavLink></div>

                <div><NavLink>test</NavLink></div>

              </div>)}

          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

Activities.propTypes = {
  classes: PropTypes.object
};

export default withStyles(loginPageStyle)(Activities);
