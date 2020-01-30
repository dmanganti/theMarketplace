import React, { Component } from 'react'
import Shoes from './Shoes';


class AdidasShoes extends Component {
  render() {
    return (
      <ul>
        <Shoes 
          key={this.props.adidasShoes.rowid}
          image={this.props.adidasShoes.image}
          shoeName={this.props.adidasShoes.shoeName}
          shoeVariation={this.props.adidasShoes.shoeVariation}
          color={this.props.adidasShoes.color}
          size={this.props.adidasShoes.size}
          price={this.props.adidasShoes.price}
        />
      </ul>
    )
  }
}

export default AdidasShoes;
