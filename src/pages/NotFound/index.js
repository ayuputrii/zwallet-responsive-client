import React, { Fragment } from "react";
import Footer from "../../components/Footer";
import { Container, Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = (props) => {
  return (
    <Fragment>
      <Container className="d-flex mt-5">
        <Jumbotron
          style={{ height: "60vh", borderRadius: "25px" }}
          className="d-flex flex-column align-items-center justify-content-center w-100"
        >
          <h1>Something's Wrong here...</h1>
          <p>
            We can't find the page that you're looking for You can back to home
          </p>
          <Link to="/dashboard">
            <Button variant="primary">Home</Button>
          </Link>
        </Jumbotron>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default NotFound;
