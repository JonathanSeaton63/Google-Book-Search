import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, } from 'react-bootstrap';

export default class Search extends Component {
  render() {
    return (
     <Container>
         <Jumbotron>
             <h2>React Google Book Search</h2>
             <p>Search for and Save Books of Interest.</p>
         </Jumbotron>
     </Container>
    )
  }
}
