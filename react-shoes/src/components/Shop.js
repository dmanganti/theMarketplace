import React, { Component } from 'react';
import ShoeListContainer from '../containers/ShoeListContainer';

class Shop extends Component {
  render() {
    return (
      <div>
        <h3>Hello from Shop</h3>
        <ShoeListContainer />
      </div>
    )
  }
}

export default Shop;
