import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Footer from "./Sections/Footer";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
// import ProductSection from "./Sections/ProductSection.jsx";
// import TeamSection from "./Sections/TeamSection.jsx";
// import WorkSection from "./Sections/WorkSection.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";
import Collection from "./Sections/Collection.jsx";


class LandingPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <SectionCarousel />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            {/* <ProductSection />
            <TeamSection />
            <WorkSection /> */}
            <Collection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(LandingPage);
