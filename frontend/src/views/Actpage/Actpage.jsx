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
      cardAnimaton: "cardHidden",
      views: 30,
      search: "search"
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
    const recentarcticles = [{
      id: 0,
      title: "我也想去羅東夜市",
      url: "",
      dash: "_____________________________"
    }, {
      id: 1,
      title: "羊肉湯",
      url: "",
      dash: "_____________________________"

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

        {/* <div
          className={classes.pageHeader}
          style={{
            // backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
 > */}
        <div className={classes.con3}>

          < iframe width="770"
            height="350"
            src={image}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
            scrolling="no"

          >
          </iframe><br></br>
          <h1>2019創創週《創闖看!》系列活動</h1>
          <h6>_______________________________________________________________________________________________________________________________________________</h6>
          <h6>Amo四月 12, 2019活動</h6>
          < iframe width="770"
            height="350"
            src={image}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
            scrolling="no"

          ></iframe>
          <div className={classes.actnews}>#創闖看!
💥2019創創週快來一起創闖看💥
2019.04.29(一) ~ 2019.05.03(五)
給我一週，帶你認識創創學程到底在幹嘛?</div>
          <div className={classes.actarticles}>🎮創闖攻略🎮

創創學程招生說明除了仔細講解創創學程可以學到什麼? 學程有哪些活動之外，<br></br>
            由創創前輩分享創創學程專案執行甘苦談，更邀請到知名講者分享新媒體浪潮下<br></br>
            利用創新元素經營社群、品牌過程中面對問題解決問題經驗。<br></br><br></br>
            報名網址: http://bit.ly/我要報名創闖攻略<br></br><br></br>
            #創創浪潮|| 04/29 (一) 18:30~20:30 博雅102<br></br><br></br>
            講者: 志祺七七 X圖文不符 張志祺<br></br><br></br>
            #社群衝浪|| 04/30 (二) 18:30~20:30 博雅102<br></br><br></br>
            講者: 最強小編，奧美Conten Table 總監 蔣依潔<br></br><br></br>
            #創闖LOOP || 05/03 (五) 18:00~20:00 博雅圓桌區<br></br><br></br>
            講者: Meowshroom 循環貓砂 & 瓦特先生<br></br></div>
          <div className={classes.actarticles}>🎮創闖攻略🎮

創創學程招生說明除了仔細講解創創學程可以學到什麼? 學程有哪些活動之外，<br></br>
            由創創前輩分享創創學程專案執行甘苦談，更邀請到知名講者分享新媒體浪潮下<br></br>
            利用創新元素經營社群、品牌過程中面對問題解決問題經驗。<br></br><br></br>
            報名網址: http://bit.ly/我要報名創闖攻略<br></br><br></br>
            #創創浪潮|| 04/29 (一) 18:30~20:30 博雅102<br></br><br></br>
            講者: 志祺七七 X圖文不符 張志祺<br></br><br></br>
            #社群衝浪|| 04/30 (二) 18:30~20:30 博雅102<br></br><br></br>
            講者: 最強小編，奧美Conten Table 總監 蔣依潔<br></br><br></br>
            #創闖LOOP || 05/03 (五) 18:00~20:00 博雅圓桌區<br></br><br></br>
            講者: Meowshroom 循環貓砂 & 瓦特先生<br></br></div>

          <div>views {this.state.views}</div>
          <h6>_______________________________________________________________________________________________________________________________________________</h6>
          <h4> > YOU MIGHT ALSO LIKE</h4>

          <div className={classes.container3}>
            <div className={classes.alsolike}>
              < iframe width="220"
                height="200"
                src={image}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                scrolling="no"
              >
              </iframe>
              <div><NavLink>test</NavLink></div>
              <div><NavLink>test</NavLink></div>
            </div>

            <div className={classes.alsolike}>
              < iframe width="220"
                height="200"
                src={image}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                scrolling="no"
              >
              </iframe>
              <div><NavLink>test</NavLink></div>
              <div><NavLink>test</NavLink></div></div>
            <div className={classes.alsolike}>
              < iframe width="220"
                height="200"
                src={image}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                scrolling="no"
              >
              </iframe>
              <div><NavLink>test</NavLink></div>
              <div><NavLink>test</NavLink></div></div>

          </div></div>

        <div className={classes.con4}>
          <input placeholder={this.state.search}></input> <br></br>

          <div>
            <div className={classes.arctitle}><h2>近期文章</h2></div>

            <div>
              {recentarcticles.map(art => <div><a herf={art.url}></a>{art.title}<br></br>{art.dash}</div>)}



            </div>





          </div>


        </div>








        {/* <Footer whiteFont /> */}
        {/* </div> */}
      </div>
    );
  }
}

Activities.propTypes = {
  classes: PropTypes.object
};

export default withStyles(loginPageStyle)(Activities);
