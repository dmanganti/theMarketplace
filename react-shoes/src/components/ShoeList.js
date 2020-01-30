import React, { Component } from 'react';
import Shoes from './Shoes';

const ShoeList = (props) => {
  let shoes = props.shoes.map((shoe) => {
    console.log(shoe)
    return (
      <Shoes 
        key={shoe.rowid}
        // image={shoe.image}
        shoeName={shoe.shoeName}
        shoeVariation={shoe.shoeVariation}
        color={shoe.color}
        size={shoe.size}
        price={shoe.price}
      />
    )
  });

  return (
    <ul>
      {shoes}
    </ul>
  );
};

export default ShoeList;
