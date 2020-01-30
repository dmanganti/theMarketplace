import React, { Component } from 'react';
import YeezyShoes from '../components/YeezyShoes'

class YeezyContainer extends Component {
  
  state = {
    yeezyShoes: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch('http://localhost:4000/api/shoe_details_by_brand/3')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          yeezyShoes: data
        })
      })
      .catch(err => console.log(err))
  }
  // get request function to get all Yeezy shoes

  render() {
    let yeezyShoe = this.state.yeezyShoes.map(yeezyShoe => {
      return (
      <YeezyShoes
        yeezyShoes = {yeezyShoe} />)
    })

    return (
      <div>
        <h3>Yeezy</h3>
        {yeezyShoe}
      </div>
    )
  }
}

export default YeezyContainer;
