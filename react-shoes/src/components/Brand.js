import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup'

class Brand extends Component {
  
  render() {
    return (
      <ListGroup>
        <Link to={`/shoes/${this.props.brand}`}>{this.props.brand}</Link> <br/>
      </ListGroup>
    )
  }
}

export default Brand;


