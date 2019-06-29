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
import LOGO from '../../assets/img/NTUCEP_LOGO.svg';
import SectionCarousel from "./Sections/SectionCarousel.jsx";
import Collection from "./Sections/Collection.jsx";

const styles= {
  wrapper: {
    background: '#fff',
    height: '100%',
  },
  buttonWrapper: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent : 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    display: 'flex',
  },
  logo: {
    width: 100,
    height: 100,
    border: 0,
    position: 'relative',
    opacity: 0,
    right: -150,
  },
  titleWrapper: {
    position: 'relative',
    top: 6,
    left: -140,
    opacity: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 28,
    margin: '6px 0',
    fontWeight: 550,
  },
  show: {
    transitionProperty: 'opacity',
    transitionDuration: '1s',
    opacity: 1,
  },
  showTitleWrapper: {
    transitionProperty: 'opacity, left',
    transitionDuration: '0.8s',
    opacity: 1,
    left: 10
  },
  showLogo: {
    transitionProperty: 'opacity, right',
    transitionDuration: '0.8s',
    opacity: 1,
    right: 10
  },
  hide: {
    transitionProperty: 'opacity',
    transitionDuration: '1s',
    opacity: 0,
  },
}

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      open: false,
      opening: false,
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ opening: true })
    }, 2000);
    setTimeout(() => {
      this.setState({ open: true })
    }, 10000)
  }

  render() {
    const { classes } = this.props;
    const { open, opening } = this.state;

    return (
      <div style={styles.wrapper}>
        <div style={
          open ? {
          ...styles.buttonWrapper,
          display: 'none',
          } : {
          ...styles.buttonWrapper,
          ...styles.show
          }
        }>
          <button
            type="button"
            style={
              opening ? {
                ...styles.logo,
                ...styles.showLogo
              } : styles.logo}
            onClick={() => this.setState({open: true})}>
            <img src={LOGO}  alt="NTUCEP-logo"/>
          </button>
          <div style={
            opening ? {
              ...styles.titleWrapper,
              ...styles.showTitleWrapper
            } : styles.titleWrapper}>
            <span style={styles.title}>臺大</span>
            <span style={styles.title}>創創學程</span>
          </div>
        </div>
        <div style={open ? styles.show : {...styles.hide, height: 0} }>
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
      </div>
    );
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(LandingPage);
