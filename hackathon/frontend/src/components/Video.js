import React, { Component } from 'react';
import { Button } from 'reactstrap';
import bgImg from '../assets/studypic.jpg';
import ReactPlayer from 'react-player'


export default class Video extends Component {

  render() {

    return (
      
            <div style={styles.body}>
                <div style={styles.header}>
                <h style={{ fontSize: 35, color:'white',position: 'absolute',top:'10%', left:'5%',}}>UNSW COMP1511 Lecture02 on 01/07/2021</h>
                </div>
                    
                <div style={styles.bottomDiv}>
                
                    <div style={styles.myBox}>
                        <div style={styles.vid}>
                            
                            <ReactPlayer style={styles.vid} width='960px' height='540px' url='https://youtu.be/Pxh4MH0QJio' />
                            
                        </div>
                        <p style={{marginLeft:'6%', fontWeight:70}}>Noted by: Xin Liu on 05/07/2021</p>
                        <Button
                            style={styles.button2} onClick={event => window.location.href = './UploadVid'}>
                            Contact Tutor
                        </Button>
                        
                            
                    </div>
                <Button
                    style={styles.button} onClick={event => window.location.href = './UploadVid'}>
                    Open Audio Notes
                
                </Button>
                <Button
                    style={styles.button} onClick={event => window.location.href = './UploadVid'}>
                    View Written Notes
                </Button>
                
                
            
            
            </div>
            </div>
    );
  }
}

const styles = {
    body:{
        height:'160vh',
        
    },
    header:{
        height: '40vh',
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        textAlign:'flex-end',
        backgroundAttachment:'fixed',
    },
    bottomDiv:{
        position:'relative',
        width:'100%',
        marginTop:'5%',
        padding:5,
    },
    head:{
        position:'relative', 
        padding:2,
        marginLeft:'5%',
    },
    myBox:{
        position:'relative',
        height:'90vh',
        backgroundColor: 'white',
        padding:6,
        marginTop:'2%',
        width:'90%',
        marginLeft:'4%',
        flexDirection: 'row',
        borderRadius:10,
        borderStyle:'solid',
        borderWidth:'2px 2px',
        borderColor:'#800020',
        boxShadow:'5px 10px 18px #888888',
        fontWeight:'bold',
        
    },
    vid:{
        position:'relative',
        padding:5,
        marginRight:'2%',
        marginTop:'2%',
        marginLeft:'2%',
    },
    button: {

        position: 'relative',
        justifyContent: "row",
        textAlign: "center",
        backgroundColor: "#800020",
        borderRadius: 3,
        height: '50px',
        width: '25%',
        margin: '20px',
        borderColor: '#800020',
        color: 'white',
        marginTop:'7%',
        marginLeft:'5%',

    },button2: {

        position: 'relative',
        justifyContent: "row",
        textAlign: "center",
        backgroundColor: "white",
        borderRadius: 3,
        height: '50px',
        width: '15%',
        margin: '20px',
        borderColor: '#800020',
        color: 'black',
        marginTop:'2%',
        marginLeft:'5%',

    },
};