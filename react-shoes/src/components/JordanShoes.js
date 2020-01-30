import React, { Component } from 'react'
import Shoes from './Shoes';

class JordanShoes extends Component {
  render() {
    return (
      <ul>
        <Shoes 
          key={this.props.jordanShoes.rowid}
          image={this.props.jordanShoes.image}
          shoeName={this.props.jordanShoes.shoeName}
          shoeVariation={this.props.jordanShoes.shoeVariation}
          color={this.props.jordanShoes.color}
          size={this.props.jordanShoes.size}
          price={this.props.jordanShoes.price}
        />
      </ul>
    );
  }
}

export default JordanShoes;
