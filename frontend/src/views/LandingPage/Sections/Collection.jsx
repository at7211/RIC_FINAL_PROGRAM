import React, { PureComponent, Fragment } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../Collection.css';

const styles = {
  wrapper:{
    position: 'relative',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding:' 200px 0 0 0',
  },
  h1:{
    animationDuration: '1s',
    animationFillMode: 'forwards',
  },
  backgroundVideo: {
    display: 'none',
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    top: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    opacity: 0.1,
    filter: 'grayscale(80%)',
  },
  timelineHeader: {
    display: 'flex',
    height: '100%',
    width: '100%',
    color:'black',
    flexDirection: 'column',
    justifyContent: 'initial',
    alignItems: 'center',
    margin: '0 0 80px 0',
  },
  timeline: {
    display: 'flex',
    margin: '0 auto',
    flexWrap: 'wrap',
    flexDirection: 'column',
    height: '100%',
    maxWidth: 700,
    position: 'relative',
  },
  line: {
    position: 'absolute',
    left: '50%',
    width: 2,
    height: '100%',
    marginLeft: -1,
    backgroundColor: 'black', //shouldchange
  },
  timelineItem: {
    padding: '40px 0',
    opacity: '.3',
    filter: 'blur(2px)',
    transition: '.5s',
    boxSizing: 'border-box',
    width: 'calc(50% - 36px)',
    display: 'flex',
    position: 'relative',
    transform: 'translateY(-80px)',

  },  timelineImg: {
    maxWidth: '100%',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.4)',
  },
  timelineTitle: {
    letterSpacing: 3,
    width: '100%',
    position: 'absolute',
    color: 'black', //should change rgba(255, 255, 255, 0.5)
    fontSize: 13,
    fontFamily: '"Pathway Gothic One", sans-serif',
    borderLeft: '2px solid rgba(255, 255, 255, 0.5)',
    top: '70%',
    margin: '-5px 0 0 0',
    padding: '0 0 0 15px',
    opacity: 0,
    right: 'calc(-100% - 56px)',
  },
  timelineTitle__active: {
    top: '50%',
    transition: '.3s all .2s',
    opacity: 1,
  },
  timelineContentTitle: {
    color:'black',
    fontSize: 66,
    margin: '-10px 0 0 0',
    transition: '.4s',
    padding: '0 10px',
    boxSizing: 'border-box',
    fontFamily: '"Pathway Gothic One", sans-serif',
  },
  timelineContentDesc: {
    color: 'black',
  },
  timelineItem__active: {
    opacity: 1,
    transform: 'translateY(0)',
    filter: 'blur(0px)',
  },
};

class Collection extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      items: [
          {
            id: 0,
            name: 'NTU COMPETITION',
            date: '2017.2 - 2017.5',
            // link: 'https://www.youtube.com/embed/kfzBM6ot9GI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&modestbranding=0',
            // link: 'https://www.youtube.com/embed/nTm2fBQ3W3w?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&modestbranding=0',
            link: 'https://www.youtube.com/embed/nTm2fBQ3W3w?controls=0&showinfo=0&rel=0&autoplay=1&loop=0&modestbranding=0&iv_load_policy=3',
            img: 'https://i.imgur.com/dnFtQI6.jpg',
            content: '全台公認最具指標性排舞競賽，被視為街舞年度盛會。將近2200名現場觀眾、直播線上人數可達一萬四千人。於2017年擔任總召，期間帶領50位團隊成員，策劃初賽＆決賽流程，並成功接洽Calvin',
        },{
          id: 1,
          name: 'TIMING',
          date: '2017.7 - 2019.1',
          link: 'https://www.youtube.com/embed/IadwyRFYnF8?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&modestbranding=0',
          img: 'https://i.imgur.com/RYLzJUV.jpg',
          content: 'Timing是一個致力於傳承受到街舞文化的街舞媒體。以易理解的原創性內容，受到廣大街舞圈的支持，也曾和台灣吧、hornet、台中歌劇院週刊等單位合作過，幫助更多一般大眾理解街舞文化。主要於團隊中擔當主理人，以及部分的影片剪輯與動畫後製',
        }
      ],
      show: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  compoenntWillMount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if(window.pageYOffset > 400){
      this.setState({ show: true })
    } else {
      this.setState({ show: false})
    }
  }

  render() {
    const { items, show } = this.state;

    return (
      <Fragment>
        <div style={styles.wrapper}>
            <iframe
              style={show ? {
                ...styles.backgroundVideo,
                display: 'block',
              }: styles.backgroundVideo}
              width="1120"
              height="630"
              src={items[0].link}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Youtube Player"
              unselectable="on" />
          <div style={styles.timelineHeader}>
            <h3 style={styles.h1} >從 2017 年起，紀錄一些我曾做過的事。</h3>
          </div>
          <div style={styles.timeline}>
            {items.map(item => {
              return (
                <div style={styles.timeline} key={item.id}>
                  <div style={styles.line} />
                  <div style={{
                    ...styles.timelineItem,
                    ...styles.timelineItem__active}}>
                    <div style={{
                      ...styles.timelineTitle,
                      ...styles.timelineTitle__active}}>{item.name}</div>
                    <div style={styles.timelineContent}>
                      <LazyLoadImage
                        style={styles.timelineImg}
                        alt={item.name}
                        src={item.img}
                        effect="blur" />
                      <h2 style={styles.timelineContentTitle}>{item.date}</h2>
                      <p style={styles.timelineContentDesc}>{item.content}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Collection;
