const endPoint = 'http://localhost:4000/api/shoe_details';

class ShoeModels {
  static all = () => {
    return fetch(endPoint)
    .then(response => response.json())
    .catch(err => console.log('Could not get all shoe details\n', err));
  };
};

export default ShoeModels;