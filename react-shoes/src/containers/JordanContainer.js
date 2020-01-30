import React, { Component } from 'react';
import JordanShoes from '../components/JordanShoes'

class JordanContainer extends Component {
  
  state = {
    jordanShoes: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch('http://localhost:4000/api/shoe_details_by_brand/2')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          jordanShoes: data
        })
      })
      .catch(err => console.log(err))
  }

  // get request function to get all Jordan shoes

  render() {
    let jordanShoe = this.state.jordanShoes.map(jordanShoe => {
      return (
      <JordanShoes 
        jordanShoes = {jordanShoe} />)
    })

    return (
      <div>
        <h3>Jordan</h3>
        {jordanShoe}
      </div>
    )
  }
}

export default JordanContainer;
