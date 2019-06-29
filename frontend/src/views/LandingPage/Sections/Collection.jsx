import React, { PureComponent, Fragment } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const styles = {
  show: {
    transitionProperty: 'opacity top',
    transitionDuration: '1s',
    opacity: 1,
    top: 0,
  },
  hide: {
    transitionProperty: 'opacity top',
    transitionDuration: '1s',
    opacity: 0,
    top: 16,
  },
  wrapper:{
    position: 'relative',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding:' 200px 0 0 0',
  },
  h1:{
    position: 'relative',
    opacity: 0,
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
    opacity: 0.05,
    filter: 'grayscale(40%)',
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
  },
  timelineImg: {
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
    position: 'relative',
    opacity: 0,
    color:'black',
    fontSize: 66,
    margin: '-10px 0 0 0',
    transition: '.4s',
    padding: '0 10px',
    boxSizing: 'border-box',
    fontFamily: '"Pathway Gothic One", sans-serif',
  },
  timelineContentDesc: {
    position: 'relative',
    color: 'black',
    opacity: 0,
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
          name: 'NTU CEP ',
          link: 'https://www.youtube.com/embed/nTm2fBQ3W3w?controls=0&showinfo=0&rel=0&autoplay=1&loop=0&modestbranding=0&iv_load_policy=3',
          img: '',
          content: 'Background video',
        },{
          id: 1,
          name: 'Final Pitch',
          link: 'https://cep.ntu.edu.tw/wp-content/uploads/2019/05/final-pitc_工作區域-1.jpg',
          img: 'https://cep.ntu.edu.tw/wp-content/uploads/2019/05/final-pitc_工作區域-1.jpg',
          content: '',
        },{
          id: 2,
          name: '餓趴了',
          link: 'https://cep.ntu.edu.tw/wp-content/uploads/2019/05/528.png',
          img: 'https://cep.ntu.edu.tw/wp-content/uploads/2019/05/528.png',
          content: '',
        },{
          id: 1,
          name: '實衷之旅',
          link: 'https://cep.ntu.edu.tw/wp-content/uploads/2019/05/時鐘_528.png',
          img: 'https://cep.ntu.edu.tw/wp-content/uploads/2019/05/時鐘_528.png',
          content: '',
        
        },{
          id: 1,
          name: 'Re-life',
          link: 'https://cep.ntu.edu.tw/wp-content/uploads/2019/05/re-life_528_528.png',
          img: 'https://cep.ntu.edu.tw/wp-content/uploads/2019/05/re-life_528_528.png',
          content: '',
        
        },{
          id: 1,
          name: 'Pumbula',
          link: 'https://cep.ntu.edu.tw/wp-content/uploads/2019/05/PUMBULA_528.png',
          img: 'https://cep.ntu.edu.tw/wp-content/uploads/2019/05/PUMBULA_528.png',
          content: '',
        }
      ],
      showVideo: false,
      showTitle: false,
      showDesc: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  compoenntWillMount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if(window.pageYOffset > 200) this.setState({ showTitle: true })
    if (window.pageYOffset > 400) this.setState({ showVideo: true })
    if (window.pageYOffset > 600) this.setState({ showDesc: true })
  }

  render() {
    const { items, showVideo, showTitle, showDesc } = this.state;
    return (
      <Fragment>
        <div style={styles.wrapper}>
            <iframe
              style={showVideo ? {
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
            <h3 style={showTitle ?{
              ...styles.h1,
              ...styles.show
            }: {
              ...styles.h1,
              ...styles.hide}}>
              創11團隊回顧
            </h3>
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
                      {/* <h2 style={showDesc ? {
                        ...styles.timelineContentTitle,
                        ...styles.show
                      } : {
                        ...styles.timelineContentTitle,
                        ...styles.hide
                      }}>{item.date}</h2> */}
                      <p style={showDesc? {
                        ...styles.timelineContentDesc,
                        ...styles.show
                      }: {
                        ...styles.timelineContentDesc,
                        ...styles.hide}}>{item.content}</p>
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