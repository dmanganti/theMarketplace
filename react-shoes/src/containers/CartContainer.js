import React, { Component } from 'react'
import CartModel from '../models/CartModel';
import ShoeList from '../components/ShoeList';

class CartContainer extends Component {

  state = {
    userCart: [],
  }
  
  componentDidMount() {
    this.fetchData()
  }
 
  fetchData = () => {
    CartModel.all().then((res) => {
      this.setState({
        userCart: res,
      });
    });
  }

  createCart = (order) => {
    let newOrder = {
      order: order
    }
  }

  render() {

    let userCart = this.state.userCart.map(cart => {
      return }
      )
    
    return (
      <div>
        <h1>Cart container</h1>
      </div>
    )
  }
}

export default CartContainer;
