const endPoint = 'http://localhost:4000/api/shoe_details_by_brand/:id'

class FilterShoesModel {
  static all = () => {
    return fetch(endPoint)
    .then(response => response.json())
    .catch(err => console.log('Could not filter shoes by brand\n', err))
  };
};

export default FilterShoesModel;
