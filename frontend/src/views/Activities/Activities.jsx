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
// corecomponents
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
      title: "2019創創週《創闖看!》系列活動",
      image: "https://i2.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/04/%E6%B4%BB%E5%8B%95%E9%80%9A%E8%AA%AA%E6%98%8E%E6%9C%83_gif.gif?zoom=2&fit=1080%2C540&ssl=1",
      date: "六月 18, 2019"
    }, {
      id: 1,
      title: "創創延修生復修公告",
      image: "https://i1.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/06/%E6%9C%AA%E5%91%BD%E5%90%8D-10_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F-1.png?w=2075&ssl=1",
      date: "六月 3, 2019"

    }, {
      id: 2,
      title: "創創第十二屆錄取公告",
      image: "https://i0.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/06/0603.png?w=2400&ssl=1",
      date: "五月 31, 2019"

    }]
    const fakedata2 = [{
      id: 3,
      title: "公告| 國際青年專案6/5教室變更",
      image: "https://i1.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/05/yef.png?w=498&ssl=1",
      date: "五月 31, 2019"

    }, {
      id: 4,
      title: "《譯作》藝術創作期末成果展",
      image: "https://i0.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/05/%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F-1-1.png?w=800&ssl=1",
      date: "四月 22, 2019"

    }, {
      id: 5,
      title: "申請創創12屆招生日程",
      image: "https://i1.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/04/-e1555911866562.png?w=2400&ssl=1",
      date: "四月 12, 2019"

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
          // className={classes.pageHeader}
          style={{
            // backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          {/* 第一個container */}
          <div className={classes.container3}>
            {fakedata1.map(post =>
              <div className={classes.marginstyle}>
                {/* < iframe width="300"
                  height="220"
                  src={image}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                  scrolling="no"
                  onClick={console.log("got")}
                  className={classes.test}
                >
                </iframe> */}
                <img src={post.image}
                  width="300"
                  height="220"
                  className={classes.rad}
                ></img>
                <div className={classes.smalltitle}>活動名稱：{post.title}</div>
                <div className={classes.smalltitle}>發佈時間：{post.date}</div>
                <div> <NavLink to={"/activities/" + String(post.id)} className={classes.font} id={post.id}>繼續閱讀</NavLink></div>


              </div>)}

          </div>

          {/* 第二個container 之後都使用地二個 三個三個一組map */}
          <div className={classes.container2}>


            {fakedata2.map(post =>
              <div className={classes.marginstyle}>
                {/* < iframe width="300"
                  height="220"
                  src={image}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                  scrolling="no"
                  className={classes.test}

                >
                </iframe> */}
                <img src={post.image}
                  width="300"
                  height="220"
                  className={classes.rad}

                ></img>
                <div className={classes.smalltitle}>活動名稱：{post.title}</div>
                <div className={classes.smalltitle}>發佈時間：{post.date}</div>
                <div><NavLink to={"/activities/" + String(post.id)} className={classes.font}>繼續閱讀</NavLink></div>


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
