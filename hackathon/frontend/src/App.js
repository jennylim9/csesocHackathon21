import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// import pages below
import Login from './components/Login'
import Home from './components/Home'
import UserHome from './components/UserHome'
import UploadVid from './components/UploadVid';
import Video from './components/Video';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/Home" component={Home}/>
            <Route path="/UserHome" component={UserHome}/>
            <Route path='/UploadVid' component={UploadVid}/>
            <Route path='/Video' component={Video}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;