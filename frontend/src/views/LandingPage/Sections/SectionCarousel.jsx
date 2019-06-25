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
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

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

    const fakeData = [{
      id: 1,
      link: 'https://i0.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/06/創12審核正式-01.png?fit=1024%2C724&ssl=1',
      describe: '創12錄取名單',
    }, {
      id: 2,
      link: 'https://i2.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/04/活動通說明會_gif.gif?fit=1080%2C540&ssl=1',
      describe: '2019創創週《創闖看!》系列活動',
    }]

    
    const imgElements = fakeData.map((img) => (
      <div key={img.id}>
        <img
          src={img.link}
          alt="First slide"
          className="slick-image"
        />
        <div className="slick-caption" >
          <h4>
            <LocationOn className="slick-icons" />
            {img.describe}
          </h4>
        </div>
      </div>
      
    ));




    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  {imgElements}
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

SectionCarousel.propTypes = {
  classes: PropTypes.object
};

export default withStyles(carouselStyle)(SectionCarousel);
