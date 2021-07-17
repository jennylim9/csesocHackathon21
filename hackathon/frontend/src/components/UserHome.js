import React, { Component } from 'react';
import { Button } from 'reactstrap';
import bgImg from '../assets/studypic.jpg';
import ReactPlayer from 'react-player'


export default class UserHome extends Component {

  render() {

    return (
      
        <div style= {styles.div}>
            <div style={styles.body}>
                <div style={styles.header}>
                   <input type ='text' placeholder="Search.." style={styles.search}></input>
                    <button style={styles.searchButton}>Search</button>
                </div>
                    <h style={styles.head}>Showing 4 videos</h>
                <div style={styles.myBox}>
                    <div style={styles.vid}>
                        <ReactPlayer style={styles.vid} width='320px' height='180px' url='https://youtu.be/Pxh4MH0QJio' />
                        <p>UNSW COMP1511 Lecture02</p>
                        <p>Jenny Lim<br></br>01/07/2021</p>
                    </div>
                    <div style={styles.vid}>
                        <ReactPlayer style={styles.vid} width='320px' height='180px' url='https://youtu.be/Dzg6WYRtBLk' />
                        <p>UNSW COMP1531 Tutorial02</p>
                        <p>Jenny Lim<br></br>23/06/2021</p>
                    </div>
                    <div style={styles.vid}>
                        <ReactPlayer style={styles.vid} width='320px' height='180px' url='https://youtu.be/NPNPk5sWIhY' />
                        <p>UNSW MATH1081 Lecture02</p>
                        <p>Jenny Lim<br></br>05/06/2021</p>
                    </div>
                    <div style={styles.vid}>
                        <ReactPlayer style={styles.vid} width='320px' height='180px' url='https://youtu.be/pfPDSuC96Hw' />
                        <p>UNSW ENGG1000 Lecture02</p>
                        <p>Jenny Lim<br></br>28/05/2021</p>
                    </div>
                        
                </div>
                <Button
                    style={styles.button}>
                    REQUEST MORE
                </Button>
                
            
            
            </div>
        </div>
    );
  }
}

const styles = {
    div:{
    },
    body:{
        //height:'100vh',
    },
    header:{
        position:'absolute',
        height:'25%',
        width:'100%',
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        textAlign:'flex-end',
    },
    search:{
        width:'40%',
        height:'25px',
        marginTop:'7%',
        marginLeft:'50%',
        borderRadius:5,
        borderColor:'white',
    },
    searchButton:{
        position:'relative', 
        padding:2,
        height:'25px', 
        width:'70px',
        marginLeft:4,
        textAlign:'center',
        borderRadius:5,
        borderColor:'white',
    },
    head:{
        position:'absolute', 
        padding:2,
        marginLeft:'5%',
        marginTop:'17%',
    },
    myBox:{
        position:'absolute',
        height:'50vh',
        backgroundColor: 'white',
        padding:10,
        marginTop:'20%',
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
        
    },
    vid:{
        position:'relative',
        padding:5,
        marginLeft:'2%',
        marginRight:'2%',
        marginTop:'4%',
    },
    button: {

        position: 'absolute',
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#800020",
        borderRadius: 3,
        height: '50px',
        width: '25%',
        margin: '20px',
        borderColor: '#800020',
        color: 'white',
        marginTop:'53%',
        marginLeft:'70%',

    },
};