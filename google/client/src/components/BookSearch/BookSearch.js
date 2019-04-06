import React, { Component } from 'react'
import { Card, Form, Container, } from 'react-bootstrap' 
 
export default class BookSearch extends Component {
  render() {
    return (
      <div>
      <Container>
        <Card body>Book Search 
        <Form>
        <Form.Control type="text" placeholder="Book" />
  <br />
        </Form>
        </Card>
        </Container>
      </div>
    )
  }
}
