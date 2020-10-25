import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import './Homeadm.css';

const HomeAdm = (props) =>{
    return(
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className="header-top">
                        <p className="logo-name">Zwallet</p>
                        <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
</Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default HomeAdm 