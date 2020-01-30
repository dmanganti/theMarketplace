import React, { Component } from 'react'

class FilterShoesByBrand extends Component {
  

  render() {
    const { params } = this.props.match;
    return (
      <div>
        <h1>This is the {params.brand}</h1>
      </div>
    )
  }
}

export default FilterShoesByBrand;
