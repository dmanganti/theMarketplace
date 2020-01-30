import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Brand from './Brand';

const BrandsComponent = (props) => {
  let brands = props.brands.map((brand) => {
    console.log(brand)
    return (
      <Brand 
        key={brand.rowid}
        brand={brand.shoeBrand}
      />
    )
  });

  return (
    <ul>
      {brands}
    </ul>
  );
};
export default BrandsComponent;