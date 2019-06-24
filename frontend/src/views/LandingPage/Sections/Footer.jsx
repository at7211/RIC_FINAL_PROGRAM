/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";
// import footerStyle from ".../";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  return (
    <footer className={footerClasses}>

      <div className={classes.container}>
        <div className={classes.left}>
          <img width="300" height="190" 
          src="https://i0.wp.com/cep.ntu.edu.tw/wp-content/uploads/2017/09/Screen-Shot-2017-09-26-at-11.37.38-AM.png?fit=300%2C190&amp;ssl=1" 
          sizes="(max-width: 300px) 100vw, 300px"/>
        </div>
      
        <div className={classes.right}>

          <h4 class="widget-title">台大創意創業學程</h4>			
          <div class="textwidget">
            <p>National Taiwan University Creativity and Entrepreneurship Program<br/>
            TEL: 3366-1869 #55386<br/>
            FAX: 3366-1462<br/>
            MAIL: <a href="mailto: jmh0502@ntu.edu.tw">ntucep@ntu.edu.tw</a><br/>
            Address: 台北市中正區思源街18號(台大水源校區卓越研究大樓 409室)<br/>
            &copy; {1900 + new Date().getYear()} - All Right Reserved - NTUCEP

            </p>
          </div>    
        </div>
      </div>
    </footer>
   

  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
