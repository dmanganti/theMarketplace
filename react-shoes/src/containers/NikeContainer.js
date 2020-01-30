import React, { Component } from 'react';
import NikeShoes from '../components/NikeShoes'

class NikeContainer extends Component {

  state = {
    nikeShoes: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch('http://localhost:4000/api/shoe_details_by_brand/1')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          nikeShoes: data
        })
      })
      .catch(err => console.log(err))
  }
  // get request function to get all Nike shoes

  render() {
    let nikeShoe = this.state.nikeShoes.map(nikeShoe => {
      return (
      <NikeShoes
        nikeShoes = {nikeShoe} />)
    })

    return (
      <div>
        <h3>Nike</h3>
        {nikeShoe}
      </div>
    )
  }
}

export default NikeContainer;
