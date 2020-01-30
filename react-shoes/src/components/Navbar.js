import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to='/'>
          Home
        </Link>
        <ul>
          <Link to="/shop">
            Shop
          </Link>
          <div>
            <Link to="/login">
              Login
            </Link>
          </div>
          <div>
          <Link to="/register">
            Register
          </Link>
          </div>
        </ul>
      </div>
    )
  }
}

export default Navbar;