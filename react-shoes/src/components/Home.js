import React, { Component } from 'react';
import BrandContainer from '../containers/BrandContainer';
import '../index.css';

class Home extends Component {
  render() {
    return (
      <div className='brand'>
        <BrandContainer />
      </div>
    )
  }
}

export default Home;
