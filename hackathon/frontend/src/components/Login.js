import React, { Component } from "react";
import { Button, Form, FormGroup, FormText, Input } from 'reactstrap';

import bgImg from '../assets/studypic.jpg';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }
    login = (event) => {

        const email = this.state.email;
        const password = this.state.password;
        console.log(email, password);
        window.location.href = './Home'
    }
    handleChange = (event) => {
        const target = event.target;
        const field = target.name;
        const value = target.value

        this.setState({
            [field]: value
        });
    }




    render() {
        return (
            <div style={styles.div}>
                <div style={styles.container}>
                    <Form>
                        <FormGroup>
                            <Input
                                type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                id="email"
                                placeholder={"Email"}
                                style={styles.form}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                id="password"
                                placeholder={"Password"}
                                style={styles.form}
                            />
                        </FormGroup>
                        <Button
                            style={styles.button}
                            onClick={() => this.login(this)}>

                            LOG IN
                        </Button>

                        <div style={styles.row}>
                            <FormText style={{ fontSize: 15, fontWeight: "bold" , color:'white'}}>
                                Not a user?    
                                <FormText
                                    style={{ color: "white" }}
                                    //onClick={event => window.location.href = './'}
                                >
                                    {" "}
                                    Sign Up
                                </FormText>
                            </FormText>
                        </div>
                    </Form>
                </div>
            </div>
        );

    }

}


const styles = {

    div: {
        height: '100vh',
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding:0,
    },

    container: {
        position:'absolute',
        alignItems: "center",
        justifyContent: "center",
        marginTop: '20%',
        marginLeft:'40%',
        textAlign: "center",
    },

    form: {
        width: 300,
        height: 44,
        padding: 10,
        borderTop: 0,
        borderRight: 0,
        borderLeft: 0,
        borderBottomWidth: 3,
        borderBottomColor: '#B3B3B3',
        backgroundColor: "#FFFFFF",
        marginBottom: 10,
    },

    row: {
        fontSize: 30,
        flexDirection: "row",
        marginTop: 40,
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

    },



};