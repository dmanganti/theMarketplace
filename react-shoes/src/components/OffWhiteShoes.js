import React, { Component } from 'react'
import Shoes from './Shoes';

class OffWhiteShoes extends Component {
  render() {
    return (
      <ul>
        <Shoes 
          key={this.props.offWhiteShoes.rowid}
          image={this.props.offWhiteShoes.image}
          shoeName={this.props.offWhiteShoes.shoeName}
          shoeVariation={this.props.offWhiteShoes.ShoeVariation}
          color={this.props.offWhiteShoes.color}
          size={this.props.offWhiteShoes.size}
          price={this.props.offWhiteShoes.price}
        />
      </ul>
    );
  }
}

export default OffWhiteShoes;
