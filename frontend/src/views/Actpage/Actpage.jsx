import React from "react";

// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
import Footer from '../LandingPage/Sections/Footer';

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

    }];

    const articles=[{
      id:0,
      titleimage:"https://i2.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/04/%E6%B4%BB%E5%8B%95%E9%80%9A%E8%AA%AA%E6%98%8E%E6%9C%83_gif.gif?zoom=2&fit=1080%2C540&ssl=1",
      title:"2019創創週《創闖看!》系列活動",
      tiltedate:"Amo四月 12, 2019活動",
      actimage:"https://i2.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/04/%E5%AE%98%E7%B6%B2_FB.png?w=2400&ssl=1",
      summary:" #創闖看!💥2019創創週快來一起創闖看💥2019.04.29(一) ~ 2019.05.03(五)給我一週，帶你認識創創學程到底在幹嘛?",
      formalart:<div>🎮創闖攻略🎮

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
},{
      id:1,
      titleimage:"https://i1.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/06/%E6%9C%AA%E5%91%BD%E5%90%8D-10_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F-1.png?w=2075&ssl=1",
      title:"創創延修生復修公告",
      tiltedate:"",
      actimage:"https://i2.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/06/0618_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F-1.png?w=2075&ssl=1",
      summary:"",
      formalart:""
},
{
  id:2,
  titleimage:"https://i0.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/06/0603.png?w=2400&ssl=1",
  title:"創創第十二屆錄取公告",
  tiltedate:"六月 3, 2019",
  actimage:"https://i0.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/06/%E5%89%B512%E5%AF%A9%E6%A0%B8%E6%AD%A3%E5%BC%8F-01.png?w=2400&ssl=1",
  summary:"",
  formalart:<div>創意創業學程第十二屆招生徵選的審核與評選作業已於日前完成，非常感謝各位申請同學的踴躍報名參與，經過學程多位教授審慎閱讀申請文件及深入討論評估後，共錄取60位同學
  進入第十二屆創意創業學程，名單如下。

      學程將於近日內寄出報到通知書及達人營調查表，請於規定期限6/24(一)前完成學程報到手續，再次恭喜各位！由於學程名額有限，對於未能錄取的同學，我們仍歡迎您參與創創未來各項公開活動，更希望您能再接再厲，申請第十三屆創創學程！

  本屆達人營時間為2019年08月23日(五)至2019年08月25日(日)，三天兩夜
  相關資訊亦隨報到通知書信件附上，近日請錄取同學密切注意信箱。

  無論是錄取與否，學程將會寄出申請結果通知書，寄送日期: 2019.06.04</div>
},{
  id:3,
  titleimage:"https://i1.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/05/yef.png?w=498&ssl=1",
  title:"公告| 國際青年專案6/5教室變更",
  tiltedate:"五月 31, 2019",
  actimage:"https://i1.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/05/yef.png?w=498&ssl=1",
  summary:"",
  formalart:""
},{
  id:4,
  titleimage:"https://i0.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/05/%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F-1-1.png?w=800&ssl=1",
  title:"《譯作》藝術創作期末成果展",
  tiltedate:"五月 31, 2019",
  actimage:"https://i1.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/05/%E8%97%9D%E8%A1%93%E5%89%B5%E4%BD%9C.jpg?w=1076&ssl=1",
  summary:<div>6/11(二)~6/14(五)
  博雅教學館中央區展牆

  創創選修課程《藝術與創作》期末成果展
  透過創作窺視同學們的內心世界

  歡迎大家來參觀😉</div>,
  formalart:""
},{
  id:5,
  titleimage:"https://i1.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/04/-e1555911866562.png?w=2400&ssl=1",
  title:"申請創創12屆招生日程",
  tiltedate:"四月 22, 2019",
  actimage:"https://i1.wp.com/cep.ntu.edu.tw/wp-content/uploads/2019/04/%E5%89%B5%E5%89%B5%E5%AD%B8%E7%A8%8B%E6%8B%9B%E7%94%9F%E4%B8%AD_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F-1.png?w=2400&ssl=1",
  summary:"我要報名!",
  formalart:""
}]

const id=document.URL.split("/",5)[4]

class Activities extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      views: 30,
      search: "search",
      renderpost: [],
    };
  }
  componentDidMount() {
    this.setState({renderpost: articles.filter(post=>post.id==id)})
  }

  render() {
    const { classes, } = this.props;
    const { renderpost } = this.state;


console.log('renderPost', renderpost)
// const actimage1=renderpost.filter(act=>act.actimage==="")
// const actimage2=renderpost.filter(act=>act.actimage!=="")


// console.log(actimage1)
// console.log(actimage2)

// console.log(renderpost)
// console.log(renderpost[0].titleimage)
 const recent=Math.floor(Math.random()*(3-0+1))+0;
    return (

      <div>
        {/* <div
          className={classes.pageHeader}
          style={{
            // backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}> */}
        <div className={classes.con3}>
          <div className={classes.testpic}>
          {/* < iframe
                      position="realative"
                      width="770"
            height="350"
            src="https://cep.ntu.edu.tw/wp-content/uploads/2019/06/%E6%9C%AA%E5%91%BD%E5%90%8D-10_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F-1.png"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            scrolling="auto"

          >
          </iframe> */}
          <img src={renderpost[0].titleimage}
           width="770"
           height="450"></img>


          </div><br></br>
          <h1 className={classes.bold}>{renderpost[0].title}</h1>
          <h6>_______________________________________________________________________________________________________________________________________________</h6>
          <h6>{renderpost[0].tiltedate}</h6>
          {/* < iframe width="770"
            height="350"
            src={image}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
            scrolling="no"

          ></iframe> */}
           <img src={renderpost[0].actimage}
           width="770"
           height="650"></img>
          <div className={classes.actnews}>{renderpost[0].summary}</div>
          <div className={classes.actarticles}>{renderpost[0].formalart}</div>
          {/* <div className={classes.actarticles}>🎮創闖攻略🎮

            創創學程招生說明除了仔細講解創創學程可以學到什麼? 學程有哪些活動之外，<br></br>
            由創創前輩分享創創學程專案執行甘苦談，更邀請到知名講者分享新媒體浪潮下<br></br>
            利用創新元素經營社群、品牌過程中面對問題解決問題經驗。<br></br><br></br>
            報名網址: http://bit.ly/我要報名創闖攻略<br></br><br></br>
            #創創浪潮|| 04/29 (一) 18:30~20:30 博雅102<br></br><br></br>
            講者: 志祺七七 X圖文不符 張志祺<br></br><br></br>
            #社群衝浪|| 04/30 (二) 18:30~20:30 博雅102<br></br><br></br>
            講者: 最強小編，奧美Conten Table 總監 蔣依潔<br></br><br></br>
            #創闖LOOP || 05/03 (五) 18:00~20:00 博雅圓桌區<br></br><br></br>
            講者: Meowshroom 循環貓砂 & 瓦特先生<br></br></div> */}

          <div>views {this.state.views}</div>
          <h6>_______________________________________________________________________________________________________________________________________________</h6>
          <h4> > YOU MIGHT ALSO LIKE</h4>

          <div className={classes.container3}>

            <div className={classes.alsolike}>
              {/* < iframe width="220"
                height="200"
                src={image}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                scrolling="no"
              >
              </iframe> */}
              <img src={articles[recent].titleimage}
               width="220"
               height="200"></img>

              <div className={classes.smalltitle}>{articles[recent].title}</div>
            </div>

            <div className={classes.alsolike}>
            <img src={articles[recent+1].titleimage}
               width="220"
               height="200"></img>
              <div className={classes.smalltitle}>{articles[recent].title}</div>
            </div>
            <div className={classes.alsolike}>
            <img src={articles[recent+2].titleimage}
               width="220"
               height="200"></img>
             <div className={classes.smalltitle}>{articles[recent].title}</div>
            </div>
          </div></div>

        <div className={classes.con4}>
          <input placeholder={this.state.search}></input><br></br>

          <div>
            <div className={classes.arctitle}><h2>近期文章</h2></div>

            <div>
              {recentarcticles.map(art => <div><a herf={art.url}></a>{art.title}<br></br>{art.dash}</div>)}
            </div>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    );
  }
}

Activities.propTypes = {
  classes: PropTypes.object
};

export default withStyles(loginPageStyle)(Activities);
