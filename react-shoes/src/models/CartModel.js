const endPoint = 'http://localhost:4000/api/order';

class CartModel {
  static all = () => {
    return fetch(endPoint)
    .then(response => response.json())
    .catch(err => console.log('Could not get all carts\n', err));
  };
};


export default CartModel;