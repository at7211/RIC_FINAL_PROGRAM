import { container } from "assets/jss/material-kit-react.jsx";

const signupPageStyle = {
  container: {
    ...container,
    zIndex: "2",
    // maxWidth:"100%",
    position: "relative",
    //  paddingTop: "80px",
    paddingTop: "150px",

    color: "#FFFFFF",
    paddingBottom: "0px",
    // display:"flex",

  },
  container3: {
    ...container,
    zIndex: "2",
    maxWidth: "100%",
    position: "relative",
    paddingTop: "80px",
    color: "#FFFFFF",
    paddingBottom: "0px",
    display: "flex",

  },
  container2: {
    ...container,
    zIndex: "2",
    maxWidth: "100%",
    position: "relative",
    paddingTop: "0px",
    color: "#FFFFFF",

    paddingBottom: "50px",
    display: "flex",

  },
  con3: {
    width: "780px",
    height: "2500px",
    float: "left",
    marginTop: "100px",
    marginLeft: "150px"
  },
  con4: {
    height: "2500px",

    width: "250px",

    float: "right",
    marginTop: "100px",
    marginRight: "40px"

  },
  pic: {
    marginleft: "40px"
  },
  actnews: {
    width: "400px",
    marginLeft: "230px"
  },
  actarticles: {
    marginTop: "30px",
    marginBottom: "30px"
  },
  marginstyle: {
    marginLeft: "30px",
    marginRight: "30px",
    marginTop: "30px",
    marginBottom: "30px",

  },
  alsolike: {
    marginRight: "20px"
  },
  arctitle:{
  marginTop:"20px",
  marginBottom:"20px"
  },
  contactus:{
    paddingTop:"10px",
    paddingBottom:"20px",
    width:"500px",
    height:"300px",
    textAlign:"center" ,
    color: " black",
    backgroundColor:"#DDDDDD",
    borderRadius:"5px"
  },
  conmail:{
 marginTop:"30px",
 marginBottom:"30px",
 fontWeight:"30"
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
  pageHeader: {
    // oberflow:"auto",
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",

    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF"
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%"
    }
  },
  form: {
    margin: "0"
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px"
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px"
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center"
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important"
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  inputIconsColor: {
    color: "#495057"
  }
};

export default signupPageStyle;
