import React from "react";
import { Row, Col, Container, Button, Modal, Form } from "react-bootstrap";
import NavbarAdm from "../../components/NavbarAdm";
import "./DetailUserAdm.css";
import person from "./diki.jpeg";

import { useHistory } from "react-router-dom";
import { getUser, deleteUser, updateUser } from "../../redux/action/admin";
import { useDispatch, useSelector } from "react-redux";

const Content = (props) => {
  const [show, setShow] = React.useState(false);
  const [showed, setShowed] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClosed = () => setShowed(false);
  const handleShowed = () => setShowed(true);

  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.admin);
  const { token } = useSelector((state) => state.auth);
  const { location } = props;
  const history = useHistory();

  React.useEffect(() => {
    dispatch(getUser(token));
  }, []);

  const onDelete = (id) => {
    dispatch(
      deleteUser({
        id: id,
        token: token,
      })
    );
    dispatch(getUser(token));
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg={3} md={3} sm={12} xs={12}>
            <div className="total-user-detail">
              <div>
                <img className="photo-user-detail" src={person} alt="" />
              </div>
              <Button
                onClick={handleShow}
                className="btn-edit-user"
                variant="info"
              >
                EDIT
              </Button>
            </div>
            &nbsp;
          </Col>
          <Col lg={9} md={9} sm={12} xs={12}>
            <div className="total">
              &nbsp;
             &nbsp;
              <div className="total-user-detail-text">
                <p>Nama</p>
                <p>Diki Herliansyah</p>
              </div>
              <div className="total-user-detail-text">
                <p>Email</p>
                <p>diki@gmail.com</p>
              </div>
              <div className="total-user-detail-text">
                <p>Password</p>
                <p>$2b$10$OIW59G9ExYAGceCO4ro5tucNr1mYxtNFbIDsKZXDyd/vUnkarpqHS</p>
              </div>
              <div className="total-user-detail-text">
                <p>pin</p>
                <p>112233</p>
              </div>
              <div className="total-user-detail-text">
                <p>Phone</p>
                <p>082114314831</p>
              </div>
              <div className="total-user-detail-text">
                <p>Role</p>
                <p>5</p>
              </div>
              <div className="total-user-detail-text">
                <p>Balance : Rp. 100.000</p>
                <p>Verified : 0</p>
              </div>
              <div className="total-user-detail-text">
                <p>Create At : 2020-10-22 00:35:43</p>
                <p>Update At : 2020-10-22 00:35:43</p>
              </div>
              <div className="total-user-detail-text-btn">
              {loading ? (
                <p> ...loading </p>
              ) : (
                typeof data === "object" &&
                data.map((item, index) => {
                  return (
                    <div className="total-user-detail-text-btn">
                      <Button
                        onClick={handleShowed}
                        className="btn-edit-user-bottom"
                        variant="info"
                      >
                        EDIT
                      </Button>
                      <Button
                        onClick={() => onDelete(item.id)}
                        className="btn-edit-user-bottom"
                        variant="info"
                      >
                        DELETE
                      </Button>
                    </div>
                  );
                })
              )}
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form action="" enctype="multipart/form-data">
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="file" />
            </Form.Group>
            <Button className="btn-edit-user" variant="info">
              UPLOAD
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showed} onHide={handleClosed}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form action="">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name..." />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email..." />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password..." />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Pin</Form.Label>
              <Form.Control type="text" placeholder="Enter pin..." />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" placeholder="Enter role..." />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter phone..." />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Balance</Form.Label>
              <Form.Control type="text" placeholder="Enter balance..." />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Verified</Form.Label>
              <Form.Control type="text" placeholder="Enter verified..." />
            </Form.Group>
            <Button className="btn-edit-user" variant="info">
              EDIT
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

const DetailUserAdm = (props) => {
  return (
    <div className="bg-white">
      <NavbarAdm />
      <section class="my-1 container">
        <div class="row">
          <Content />
        </div>
      </section>
    </div>
  );
};

export default DetailUserAdm;
