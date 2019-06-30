import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";

import { Query, Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      textcolor:"black",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };

    const ACTIVITIES = gql`
      query {
        activities {
          id
          link
          title
          content
          date
        }
      }
    `

    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <Query query={ACTIVITIES}>
            {({ loading, error, data }) => {
              if (loading) return <p>loading....</p>;
              if (error) return <p>error:(</p>;

              const imgElements = data.activities.map((img) => (
                <div key={img.id}>
                  <img
                    src={img.link}
                    alt="First slide"
                    className="slick-image"
                    style ={{height : 360 }}
                  />
                  <div className="slick-caption" >
                    <h4>
                      <LocationOn className="slick-icons" style ={{color : "black"}}/>
                      {img.describe}1234567
                    </h4>
                  </div>
                </div>
              ));

              return(
                <GridContainer>
                  <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
                    <Card carousel>
                      <Carousel {...settings}>
                        {imgElements}
                      </Carousel>
                    </Card>
                  </GridItem>
                </GridContainer>
              )
            }}
          </Query>
        </div>
      </div>
    );
  }
}

SectionCarousel.propTypes = {
  classes: PropTypes.object
};

export default withStyles(carouselStyle)(SectionCarousel);
