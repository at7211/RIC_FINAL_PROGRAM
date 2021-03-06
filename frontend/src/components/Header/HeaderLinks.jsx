/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";
import history from '../../history.js';

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="關於學程"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <ListItem className={classes.listItem}>
              <CustomDropdown
                noLiPadding
                buttonText="學程簡介"
                insideDropdown
                right
                buttonProps={{
                  className: classes.navLink,
                  color: "transparent"
                }}
                dropdownList={[
                  <Link to="/login-page" className={classes.dropdownLink}>
                    學程簡介
                  </Link>,
                  <Link to="/login-page" className={classes.dropdownLink}>
                    創創11TH團隊
                  </Link>,
                ]}
              />
            </ListItem>,
            <Link to="/login-page" className={classes.dropdownLink}>
            創創11TH團隊
            </Link>,
            <Link to="/login-page" className={classes.dropdownLink}>
              創創Q&A
            </Link>,
          ]}
        />
      </ListItem>
      <Button color= "transparent" className= {classes.butt}>課程規劃</Button>
      <Button color= "transparent"  className= {classes.butt} onClick={() => history.push('/activities')}>學程活動</Button>
      <ListItem className={classes.listItem}>
        <CustomDropdown
            noLiPadding
            buttonText="學程相關表單"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            dropdownList={[
              <Link to="/form-page" className={classes.dropdownLink}>
                學程學分證明申請
              </Link>,
              <Link to="/form-page2" className={classes.dropdownLink}>
                核心課程延修申請表
              </Link>,
            ]}
          />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="新創交流吧"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              新創實習資訊
            </Link>,
             <Link to="/" className={classes.dropdownLink}>
             友站分享
           </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/NTUCEP/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on youtube"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.youtube.com/channel/UCLm4KqcjKxniQ7YTARXOBoQ"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-youtube"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
