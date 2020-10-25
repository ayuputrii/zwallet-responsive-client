import React from "react";
import {Container, Row, Col, Form} from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/action/login'
import './Homeadm.css';

const HomeAdm = (props) =>{
    const dispatch = useDispatch()
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
                <p onClick={() => dispatch(logout())} className="text bold">Logout</p>
            </div>
          </Col>
        </Row>
      </Container>
    )
}

export default HomeAdm 