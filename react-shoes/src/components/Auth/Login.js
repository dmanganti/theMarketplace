import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserModel from '../../models/UserModel'

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: null
  }

  componentDidMount(){
    if(localStorage.getItem('uid')){
      console.log('logged in')
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault()

    const user = this.state

    fetch('http://localhost :4000/api/user/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      if(data.status === 200){
        this.props.setCurrentUser(data.signedJwt)
        this.setState({
          rowid: data.id.id
        })
        this.props.history.push('/profile')
      }
      else {
        alert('Incorrect username or password')
      }
    })
    .catch(err => {
      this.setState({
        error: err
      })
    })
  }

  

  render() {
    return (
      <div>
        <form onSubmit ={this.handleSubmit}>
          <div>
            <label>Email</label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email-address"/>
          </div><br/>
          <div>
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter password"/>
          </div>
          <button type="submit" className="button-submit">Login</button>
        </form>
      </div>
    )
  }
}


export default Login
