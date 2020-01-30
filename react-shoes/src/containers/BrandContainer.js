import React, { Component } from 'react';
import BrandsComponent from '../components/BrandsComponent';

class BrandContainer extends Component {

  state = {
    brands: [],
  }
  
  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch('http://localhost:4000/api/shoe_brand')
      .then(res => res.json())
      .then(data => {
        this.setState({
          brands: data
        })
      })
      .catch(err => console.log(err))
  }
  render() {

    let brand = this.state.brands.map(brand => {
      return 
    })
    
    return (
      <div>
        <h1>Brands</h1>
        <BrandsComponent 
          brands = {this.state.brands}
        />
      </div>
    )
  }
}

export default BrandContainer;
