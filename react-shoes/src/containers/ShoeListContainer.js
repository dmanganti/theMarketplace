import React, { Component } from 'react'
import ShoeModel from '../models/ShoeModel';
import ShoeList from '../components/ShoeList';

class ShoeListContainer extends Component {

  state = {
    shoes: [],
  }
  
  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    ShoeModel.all().then((res) => {
      console.log(res)

      this.setState({
        shoes: res,
      });
    });
  }

  render() {
    
    return (
      <div>
        <h1>Shoes</h1>
        <ShoeList 
          shoes = {this.state.shoes}
        />
      </div>
    )
  }
}

export default ShoeListContainer;
