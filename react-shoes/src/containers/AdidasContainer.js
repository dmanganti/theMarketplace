import React, { Component } from 'react';
import AdidasShoes from '../components/AdidasShoes'

class AdidasContainer extends Component {
  
  state = {
    adidasShoes: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch('http://localhost:4000/api/shoe_details_by_brand/5')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          adidasShoes: data
        })
      })
      .catch(err => console.log(err))
  }
  // get request function to get all Adidas shoes

  render() {
    let adidasShoe = this.state.adidasShoes.map(adidasShoe => {
      return (
        <AdidasShoes
          adidasShoes = {adidasShoe} />)
    })

    return (
      <div>
        <h3>Adidas</h3>
        {adidasShoe}
      </div>
    )
  }
}

export default AdidasContainer;
