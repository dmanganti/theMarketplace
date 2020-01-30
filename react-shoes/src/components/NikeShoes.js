import React, { Component } from 'react';
import Shoes from './Shoes';

class NikeShoes extends Component {
  render() {
    console.log(this.props.nikeShoes);
    return (
      <ul>
        <Shoes 
          key={this.props.nikeShoes.rowid}
          image={this.props.nikeShoes.image}
          shoeName={this.props.nikeShoes.shoeName}
          shoeVariation={this.props.nikeShoes.shoeVariation}
          color={this.props.nikeShoes.color}
          size={this.props.nikeShoes.size}
          price={this.props.nikeShoes.price}
        />
      </ul>
    );
  }
}

export default NikeShoes;