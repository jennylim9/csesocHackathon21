import React, { Component } from 'react';
import { Button } from 'reactstrap';
import bgImg from '../assets/studypic.jpg';
import ReactPlayer from 'react-player'
import ReactStars from "react-rating-stars-component";

const ratingChanged = (newRating) => {
    console.log(newRating);
  };

export default class Video extends Component {

    
  render() {

    return (
      
            <div style={styles.body}>
                <div style={styles.header}>
                
                </div>
                    
                <div style={styles.bottomDiv}>
                <h style={{ fontSize: 30, color:'black',position: 'relative',top:'10%', left:'5%',}}>UNSW COMP1511 Lecture02 on 01/07/2021</h>
                    <div style={styles.myBox}>
                        <div style={styles.vid}>
                            
                            <ReactPlayer style={styles.vid} width='960px' height='540px' url='https://youtu.be/Pxh4MH0QJio' />
                            
                        </div>
                        <div style={styles.author}>
                            <p style={{marginLeft:'6%', fontWeight:70}}>Noted by: Xin Liu on 05/07/2021</p>
                            <ReactStars
                                style={styles.star}
                                count={5}
                                onChange={ratingChanged}
                                size={34}
                                activeColor="#ffd700"
                            />
                            <Button
                                style={styles.button2} onClick={event => window.location.href = './UploadVid'}>
                                Contact Tutor
                            </Button>
                        
                        </div>
                        
                        
                            
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
        height:'180vh',
        left: 0,
         right: 0
        
    },
    header:{
        left: 0, right: 0,
        "box-sizing": "border-box",
        height: '40vh',
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        textAlign:'flex-end',
        backgroundAttachment:'fixed',
    },
    bottomDiv:{
        left: 0, right: 0,
        position:'relative',
        marginTop:'5%',
        padding:5,
    },
    head:{
        position:'relative', 
        padding:2,
        marginLeft:'5%',
    },
    myBox:{
        left: 0, right: 0,
        position:'relative',
        height:'90vh',
        backgroundColor: 'white',
        padding:3,
        marginTop:'1%',
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
        padding:2,
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
        marginTop:'1%',
        marginLeft:'5%',

    },
    
    star:{
        marginLeft:'60%',
         position:'absolute'
    },
    author:{
        left: 0, right: 0,
        marginTop:'5%',
        position:'relative',
        width:'45%',
        marginLeft:'2%',
        color:'red',
        display: "flex",
        "justify-content": "space-between",
        "box-sizing": "border-box",
    }
};