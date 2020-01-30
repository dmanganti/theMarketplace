/* This is where my requests are for Brands */

const endPoint = 'http://localhost:4000/api/shoe_brand';

class BrandModel {
  static all = () => {
    return fetch(endPoint)
    .then(response => response.json())
    .catch(err => console.log('Could not get all brands\n', err));
  };
};

export default BrandModel;
