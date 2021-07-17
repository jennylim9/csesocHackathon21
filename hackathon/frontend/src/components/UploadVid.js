import React, { Component } from "react";
import bgImg from '../assets/studypic.jpg';
import { Button, Form, FormGroup, FormText, Input } from 'reactstrap';


export default class UploadVid extends Component {
  constructor(props) {
    super(props);

    this.state = {
        uni: "",
        code:"",
        lec:"",
        requirements:"",
        tag:"",
    };

  }
  handleChange = (event) => {
    const target = event.target;
    const field =  target.name;
    const value = target.value

    this.setState({
        [field]:  value
    });
    }   
  
  render() {
    return (
        <div style= {styles.div}>
            <div className="backgroundImage"  style={styles.background}>
                <h style={{ fontSize: 45, color:'white',position: 'absolute',top:'10%', left:'5%',}}>Upload videos</h></div>
            <div style={styles.container}>
                <Form>
                <FormText style={{ fontSize: 18,fontWeight: "bold"}}>
                    Video
                </FormText>
                <br></br><br></br><br></br>
                <FormText style={{ fontSize: 15,}}>
                    University/Institution Name
                </FormText>
                <FormGroup>
                    <Input
                        type="text"
                        name="uni"
                        value={this.state.uni}
                        onChange={this.handleChange}
                        id="uni"
                        placeholder={"University Name"}
                        style={styles.input}
                    />
                </FormGroup>
                <FormText style={{ fontSize: 15,}}>
                    Course Code*
                </FormText>
                <FormGroup>
                    <Input
                        type="text"
                        name="code"
                        value={this.state.code}
                        onChange={this.handleChange}
                        id="code"
                        placeholder={"Code"}
                        style={styles.input}
                    />
                </FormGroup>
                <FormText style={{ fontSize: 15, }}>
                    Class Name*
                </FormText>
                <FormGroup>
                    <Input
                        type="text"
                        name="class"
                        value={this.state.class}
                        onChange={this.handleChange}
                        id="class"
                        placeholder={"Class Name"}
                        style={styles.input}
                    />
                </FormGroup><br></br>
                <FormText style={{ fontSize: 15, }}>
                    Special Requirements
                </FormText>
                <FormGroup>
                    <Input
                        type="textarea"
                        name="requirements"
                        value={this.state.requirements}
                        onChange={this.handleChange}
                        id="requirements"
                        placeholder={"Special Requirements"}
                        style={{width: '98%',
                        height: '30vh',
                        padding: 10,
                        backgroundColor: "#FFFFFF",
                        marginBottom: 10,
                        marginTop:10,
                        borderRadius:5,
                        borderColor:'#B3B3B3',
                        marginRight:10,}}
                    />
                </FormGroup><br></br>
                <FormText style={{ fontSize: 15, }}>
                    Special Needs Tags
                </FormText>
                <FormGroup>
                    <Input
                        type="text"
                        name="tag"
                        value={this.state.tag}
                        onChange={this.handleChange}
                        id="tag"
                        placeholder={"Add your tags here"}
                        style={styles.input}
                    />
                </FormGroup><br></br>
                <FormText style={{ fontSize: 15, }}>
                    Add your video file
                </FormText>
                <FormGroup>
                    <Input
                        type="file"
                        style={styles.input}
                    />
                </FormGroup>

                <Button onClick={event => window.location.href = './UserHome'} style={styles.button}> Upload
                </Button>
                </Form>
            </div>
            <div style={styles.bottom}/>
        </div>
    );
    
  }
  
}


const styles = {
    div:{
        height: '200vh',
      },
    background:{
        height: '40vh',
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        textAlign:'flex-end',
        backgroundAttachment:'fixed',
    },
    container: {
        width:'85%',
        marginTop:'8%',
      position:'relative',
      marginLeft:'5%',
      marginRight:'5%',
      padding:30,
      alignItems: "center",
      justifyContent: "center",
      flex:1,
      boxShadow:'5px 10px 18px #888888',
      borderStyle:'solid',
        borderWidth:'2px 2px',
        borderColor:'#800020',
        boxShadow:'5px 10px 18px #888888',
        borderRadius:10,
    },
    input: {
        width: '30%',
        height: '5%',
        padding: 10,
        backgroundColor: "white",
        marginBottom: 10,
        marginTop:10,
        borderRadius:5,
        borderColor:'#B3B3B3',
        marginRight:10,
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
        marginLeft:'70%',

    },
  
  
  
  
  
};