import React, { Component } from 'react'

class Shoes extends Component {

  render() {
    return (
      <div>
        <h4>{this.props.key}</h4>
        <img src={this.props.image} alt='shoes' />
        <h4>Shoe Name: {this.props.shoeName}</h4>
        <h4>Shoe Variation: {this.props.shoeVariation}</h4>
        <h4>Color: {this.props.color}</h4>
        <h4>Size: {this.props.size}</h4>
        <h4>Price: ${this.props.price}.00</h4>
      </div>
    )
  }
}
export default Shoes;
