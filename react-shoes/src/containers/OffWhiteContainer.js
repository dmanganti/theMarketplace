import React, { Component } from 'react';
import OffWhiteShoes from '../components/OffWhiteShoes'

class OffWhiteContainer extends Component {
  
  state = {
    offWhiteShoes: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch('http://localhost:4000/api/shoe_details_by_brand/4')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          offWhiteShoes: data
        })
      })
      .catch(err => console.log(err))
  }
  // get request function to get all Off-White shoes

  render() {
    let offWhiteShoe = this.state.offWhiteShoes.map(offWhiteShoe => {
      return (
      <OffWhiteShoes
        offWhiteShoes = {offWhiteShoe} />)
    })

    return (
      <div>
        <h3>Off-White</h3>
        {offWhiteShoe}
      </div>
    )
  }
}

export default OffWhiteContainer;
