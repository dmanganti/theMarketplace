import React, { Component } from 'react'
import Shoes from './Shoes';

class YeezyShoes extends Component {
    render() {
      return (
        <ul>
          <Shoes 
            key={this.props.yeezyShoes.rowid}
            image={this.props.yeezyShoes.image}
            shoeName={this.props.yeezyShoes.shoeName}
            shoeVariation={this.props.yeezyShoes.shoeVariation}
            color={this.props.yeezyShoes.color}
            size={this.props.yeezyShoes.size}
            price={this.props.yeezyShoes.price}
          />
      </ul>
      );
    }
  }

export default YeezyShoes;
