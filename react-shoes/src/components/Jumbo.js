import React, { Component } from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
  .jumbotron {
    background: url(elephantprint.jpg) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc
    height: 200px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  `;

export class Jumbo extends Component {
  render() {
    return (
      <Styles>
        <Jumbotron>
          <Container>
            <h1>theMarketplace</h1>
          </Container>
        </Jumbotron>
      </Styles>
    )
  }
}

export default Jumbo;
