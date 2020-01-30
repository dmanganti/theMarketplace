import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import Jumbo from './components/Jumbo';
import Home from './components/Home';
import Shop from './components/Shop';
import OffWhiteContainer from './containers/OffWhiteContainer';
import YeezyContainer from './containers/YeezyContainer';
import AdidasContainer from './containers/AdidasContainer';
import JordanContainer from './containers/JordanContainer';
import NikeContainer from './containers/NikeContainer';
import CartContainer from './containers/CartContainer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

class App extends Component {
  state = {
    currentUser: localStorage.getItem('uid')
  }
  setCurrentUser = (token) => {
    this.setState({
      currentUser: token
    })

    localStorage.setItem('uid', token)
  }
  render() {
    return (
      <div>
        <NavBar />
        <Jumbo />
          <Switch>
            <Route exact path = "/" component={ Home }/>
            <Route path = "/shop" component={ Shop }/>
            <Route exact path = "/shoes/Nike" component={ NikeContainer }/>
            <Route exact path = "/shoes/Off-White" component={ OffWhiteContainer }/>
            <Route exact path = "/shoes/Yeezy" component={ YeezyContainer }/>
            <Route exact path = "/shoes/Adidas" component={ AdidasContainer }/>
            <Route exact path = "/shoes/Jordan" component={ JordanContainer }/>
            <Route exact path = "/login" render={()=> <Login setCurrentUser={ this.setCurrentUser }/>}/>
            <Route exact path = "/register" component={ Register }/>
          </Switch>
      </div>
    )
  }
}

export default App;

