import React, { Component } from 'react';
import { Button } from 'reactstrap';
import bgImg from '../assets/studypic.jpg';
import profImg from '../assets/profile.jpg'
import ReactStars from "react-rating-stars-component";


export default class Profile extends Component {

    
  render() {

    return (
      
            <div style={styles.body}>
                <div style={styles.header}>
                </div>
                    
                <div style={styles.bottomDiv}>
                    <div style= {styles.imag}></div>
                    <div style={{marginLeft:'10%', textAlign:'center', marginRight:'79%'}}><ReactStars
                    style={{marginLeft:'100px'}}
                    count={5}
                    
                    size={34}
                    color="#ffd700"
                    />
                    <h>Name: Xin Liu</h></div>
                    <div style= {styles.leftDiv}>
                        <h style={{ fontSize: 20, color:'white', fontWeight:'bold'}}>SUBJECTS TAKEN</h>
                        <hr></hr>
                        <p style={{ color:'white'}} >COMP1511, COMP1521, COMP3311, COMP3331</p>
                        <br></br>
                        <h style={{ fontSize: 20, color:'white', fontWeight:'bold'}}>PREVIOUS TASKS</h>
                        <hr></hr>
                        <li style={{ color:'white'}}  >UNSW COMP1511 Lecture02 for Jenny Lim on 01/07/2021</li><br></br>
                        <li style={{ color:'white'}} >UNSW COMP9323 Lecture02 for Ezma Rizvi on 16/06/2021</li><br></br>
                        <li style={{ color:'white'}} >UNSW COMP1521 Tutorial0 for Sohum Jain on 07/06/2021</li><br></br>
                        <br></br>
                        <h style={{ fontSize: 20, color:'white', fontWeight:'bold'}}>QUALIFICATIONS</h>
                        <hr></hr>
                        <li style={{ color:'white'}}  >Lab Assistant for COMP1511 2020</li><br></br>
                        <li style={{ color:'white'}} >Lab Demo for COMP1521 2020</li><br></br>
                        
                    
                    
                    </div>  
                    <div style= {styles.rightDiv}>
                    <Button
                        style={styles.button2} onClick={event => window.location.href = './Profile'}>
                        Call Tutor
                    </Button>
                    <Button
                        style={styles.button2} onClick={event => window.location.href = './Profile'}>
                        Video Call Tutor
                    </Button>
                    <Button
                        style={styles.button2} onClick={event => window.location.href = './Profile'}>
                        Email Tutor
                    </Button>
                    <Button
                        style={styles.button2} onClick={event => window.location.href = './Profile'}>
                        Message Tutor
                    </Button>
<br></br><br></br><br></br>
                    <h style={{ fontSize: 18, color:'black', fontWeight:'bold'}}>Rated: 5/5 by 14 Users</h><br></br><br></br>
                    <h style={{ fontSize: 18, color:'black', fontWeight:'bold'}}>Reviewed by 4 Users</h><br></br>
                    <hr></hr>
                    <h>Review #1 by Jenny Lim:</h>
                    <p>Really great tutor, helped me write up my lecture notes and prepare for my exams. Since I was colorblind, it was difficult for me to differentiate 
                    different parts in a digram, which Xin Liu helped me convert to colors I can see easily. </p><br></br><hr></hr>
                    <h>Review #2 by Ezma Rizvi:</h>
                    <p>Thanks for recording voice notes for my tutorial questions!! I have trouble reading long phrases, and thus Xin's help was crucial for me. Recommend this tutor!</p><br></br><hr></hr>
                    <h>Review #3 by Sohum Jain:</h>
                    <p>Very helpful and smart</p>
                    
                    
                    </div>  
                            
                </div>
                
            </div>
    );
  }
}

const styles = {
    body:{
        height:'130vh',
        left: 0,
         right: 0
        
    },
    header:{
        left: 0, right: 0,
        "box-sizing": "border-box",
        height: '10vh',
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        textAlign:'flex-end',
        backgroundAttachment:'fixed',
    },
    bottomDiv:{
        marginLeft:'5%',
        marginRight:'5%',
        position:'relative',
        marginTop:'2%',
        padding:5,
        height:'90%',
        justifyContent: "row",
        displya:'flex',
    },
    leftDiv:{
        width:'30%',
        marginLeft:'1%',
        marginRight:'70%',
        position:'absolute',
        marginTop:'2%',
        padding:5,
        height:'60%',
        backgroundColor:'#800020',
        fontColor:'white',
    },
    rightDiv:{
        width:'62%',
        marginLeft:'35%',
        marginRight:'1%',
        position:'absolute',
        marginTop:'2%',
        padding:5,
        height:'60%',
    },
    imag:{
        height: '19vh',
        width:'11vw',
        backgroundImage: `url(${profImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        textAlign:'flex-end',
        borderRadius: '55%',
        borderColor:'black',
        borderWidth:'medium',
        borderStyle:'solid',
        marginLeft:'9%',
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
    buttonSeparator:{
        paddingTop: 15,
        color: 'white'
      },
};