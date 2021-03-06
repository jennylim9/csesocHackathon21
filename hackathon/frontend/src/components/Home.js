import React, { Component } from 'react';
import { Button } from 'reactstrap';
import bgImg from '../assets/studypic.jpg';
import logoImg from '../assets/HelpAbility.png'


export default class Home extends Component {

  render() {

    return (
      <div style={styles.div}>
      <div  style={styles.background}>
        <img src={logoImg} alt="Logo" style={styles.logo} />
          <div className="body" style={styles.body}>

            <div className="buttonPosition" style={styles.buttonPosition}>
              <Button style={styles.button} onClick={event =>  window.location.href='./UserHome'}>
                I NEED HELP
              </Button>  
              
              <h3 style={styles.buttonSeparator}>
                Or 
              </h3>

              <Button style={styles.button} onClick={event =>  window.location.href='./UserHome'}>
                I WANT TO HELP
              </Button>
              </div>

          </div>
      </div>
      </div>
    );
  }
}

const styles = {
    div: {
        height: '100vh',
    },

  background: {
    height: '100vh',
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  logo: {
    left: '34%',
    position: 'sticky',
  },

  body: {
    margin: '0',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    marginLeft:'36%',
  },

  head:{
      fontSize:50,
      fontWeight:20,
    color: 'white',
    "text-shadow": "2.5px 1px #800020",
    padding: 20,
    position: 'sticky',
  },

  buttonPosition: {
    justifyContent: "center",
    flexDirection: 'row',
    textAlign: "center",
    display: "flex",
  }, 

  button: {
    height: '60px',
    width: '50%',
    margin: '20px', 
    backgroundColor:  "#800020",
    color: "white",
    "font-weight": "bold",
    borderRadius: "8px",
    borderColor: "#800020",
    fontColor:"white",
    fontSize:20,
    cursor:"pointer"
  },

  buttonSeparator:{
    paddingTop: 15,
    color: 'white'
  },
};