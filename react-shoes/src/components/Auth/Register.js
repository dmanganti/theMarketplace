import React, {Component} from 'react';

class Register extends Component {
  state ={
    email:'',
    f_name:'',
    l_name:'',
    password:'',
    password2:'',
    error: null
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const newUser = this.state
    
    fetch('http://localhost:4000/api/user/register', {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      if(data.status === 201){
        this.props.history.push('/')
      }
      else {
        console.log(data)
        alert("Email is already registered")
      }
    })
    .catch(err=> {
      this.setState({
        error: err
      })
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
          </div><br/>
          <div>
            <label>First Name</label>
            <input type="text" name="f_name" value={this.state.f_name} onChange={this.handleChange} placeholder="First Name"/>
          </div><br/>
          <div>
            <label>Last Name</label>
            <input type="text" name="l_name" value={this.state.l_name} onChange={this.handleChange} placeholder="Last name"/>
          </div><br/>
          <div>
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
          </div>
          <div><br/>
            <label>Confirm Password</label>
            <input type="password" name="password2" value={this.state.password2} onChange={this.handleChange} placeholder="Confirm Password"/>
          </div>
          <button type ="submit">Register</button>
        </form>
      </div>
    )
  }
}

export default Register;