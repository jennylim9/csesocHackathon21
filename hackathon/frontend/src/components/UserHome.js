import React, { Component } from 'react';
import { Button } from 'reactstrap';
import bgImg from '../assets/studypic.jpg';
import ReactPlayer from 'react-player'


export default class UserHome extends Component {

  render() {

    return (
      
            <div style={styles.body}>
                <div style={styles.header}>
                <h style={{ fontSize: 45, color:'white',position: 'absolute',top:'10%', left:'5%',}}>View videos</h>
                   <input type ='text' placeholder="Search.." style={styles.search}></input>
                    <button style={styles.searchButton}>Search</button>
                </div>
                    
                <div style={styles.bottomDiv}>

                <h style={styles.head}>Showing videos from other users: 15</h>
                    <div style={styles.myBox}>
                        <div style={styles.vid}>
                            <ReactPlayer style={styles.vid} width='320px' height='180px' url='https://youtu.be/OmJ-4B-mS-Y' />
                            <p>UNSW COMP9323 Lecture02</p>
                            <p>Ezma Rizvi<br></br>16/07/2021</p>
                        </div>
                        <div style={styles.vid}>
                            <ReactPlayer style={styles.vid} width='320px' height='180px' url='https://youtu.be/G6GKzXMIttw' />
                            <p>UNSW COMP1521 Tutorial02</p>
                            <p>Sohum Jain<br></br>03/07/2021</p>
                        </div>
                        <div style={styles.vid}>
                            <ReactPlayer style={styles.vid} width='320px' height='180px' url='https://youtu.be/Pxh4MH0QJio' />
                            <p>UNSW MATH2859 Lecture02</p>
                            <p>Xin Liu<br></br>25/06/2021</p>
                        </div>
                        <div style={styles.vid}>
                            <ReactPlayer style={styles.vid} width='320px' height='180px' url='https://youtu.be/pfPDSuC96Hw' />
                            <p>UNSW ENGG1000 Lecture02</p>
                            <p>Ezma Rizvi<br></br>29/05/2021</p>
                        </div>
                        <div style={styles.vid}>
                            <ReactPlayer style={styles.vid} width='320px' height='180px' url='https://youtu.be/Pxh4MH0QJio' />
                            <p>UNSW COMP9323 Lecture02</p>
                            <p>Ezma Rizvi<br></br>16/07/2021</p>
                        </div>
                        <div style={styles.vid}>
                            <ReactPlayer style={styles.vid} width='320px' height='180px' url='https://youtu.be/Dzg6WYRtBLk' />
                            <p>UNSW COMP1521 Tutorial02</p>
                            <p>Sohum Jain<br></br>03/07/2021</p>
                        </div>
                            
                    </div>
                <br></br><br></br><br></br>
                <h style={styles.head}>Showing my videos: 4</h>
                    <div style={styles.myBox}>
                        <div style={styles.vid}>
                            <div style={styles.circle}>L</div>
                            <ReactPlayer style={styles.vid} width='320px' height='180px' url='https://youtu.be/Pxh4MH0QJio' />
                            <p  onClick={event =>  window.location.href='./Video'}>UNSW COMP1511 Lecture02</p>
                            <p>Jenny Lim<br></br>01/07/2021</p>
                        </div>
                        <div style={styles.vid}>
                            <div style={styles.circle2}>X</div>
                            <ReactPlayer style={styles.vid} width='320px' height='180px' url='https://youtu.be/Dzg6WYRtBLk' />
                            <p  onClick={event =>  window.location.href='./Video'}>UNSW COMP1531 Tutorial02</p>
                            <p>Jenny Lim<br></br>23/06/2021</p>
                        </div>
                        <div style={styles.vid}>
                            <div style={styles.circle}>L</div>
                            <ReactPlayer style={styles.vid} width='320px' height='180px' url='https://youtu.be/NPNPk5sWIhY' />
                            <p  onClick={event =>  window.location.href='./Video'}>UNSW MATH1081 Lecture02</p>
                            <p>Jenny Lim<br></br>05/06/2021</p>
                        </div>
                        <div style={styles.vid}>
                            <div style={styles.circle}>L</div>
                            <ReactPlayer style={styles.vid} width='320px' height='180px' url='https://youtu.be/pfPDSuC96Hw' />
                            <p>UNSW ENGG1000 Lecture02</p>
                            <p>Jenny Lim<br></br>28/05/2021</p>
                        </div>
                            
                    </div>
                <Button
                    style={styles.button} onClick={event => window.location.href = './UploadVid'}>
                    REQUEST MORE
                    
                </Button>
                
            
            
            </div>
            </div>
    );
  }
}

const styles = {
    body:{
        height:'300%',
        
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
    search:{
        width:'40%',
        height:'25px',
        marginTop:'7%',
        marginLeft:'48%',
        borderRadius:5,
        borderColor:'white',
    },
    searchButton:{
        position:'relative', 
        padding:2,
        height:'32px', 
        width:'70px',
        marginLeft:4,
        textAlign:'center',
        borderRadius:5,
        borderColor:'white',
    },
    head:{
        position:'relative', 
        padding:2,
        marginLeft:'5%',
    },
    myBox:{
        position:'relative',
        height:'70%',
        backgroundColor: 'white',
        padding:10,
        marginTop:'2%',
        width:'90%',
        marginLeft:'4%',
        overflowX: 'scroll',
        flexDirection: 'row',
        display: "flex",
        textAlign:'center',
        borderRadius:10,
        borderStyle:'solid',
        borderWidth:'2px 2px',
        borderColor:'#800020',
        boxShadow:'5px 10px 18px #888888',
        
    },
    vid:{
        position:'relative',
        padding:5,
        marginLeft:'2%',
        marginRight:'2%',
        marginTop:'4%',
    },
    button: {

        position: 'relative',
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#800020",
        borderRadius: 3,
        height: '50px',
        width: '25%',
        margin: '20px',
        borderColor: '#800020',
        color: 'white',
        marginTop:'5%',
        marginLeft:'70%',

    },
    circle:{
        position:'absolute',
        height: '50px',
        width: '50px',
        backgroundColor: 'green',
        borderRadius: '50%',
        display: 'inline-block',
        zIndex: 2,
        color:'white',
        marginLeft:'40%',
        "font-family": 'arial',
        "-ms-transform": "scaleX(-1) rotate(-35deg)", /* IE 9 */
        "-webkit-transform": "scaleX(-1) rotate(-35deg)", /* Chrome, Safari, Opera */
        "transform": "scaleX(-1) rotate(-35deg)",
        fontSize: 40,
        boxShadow:'5px 10px 18px #888888',
        
    },
    circle2:{
        position:'absolute',
        height: '50px',
        width: '50px',
        backgroundColor: 'red',
        borderRadius: '50%',
        display: 'inline-block',
        zIndex: 2,
        color:'white',
        marginLeft:'40%',
        "font-family": 'arial',
        fontSize: 40,
        boxShadow:'5px 10px 18px #888888',
        
    }
};