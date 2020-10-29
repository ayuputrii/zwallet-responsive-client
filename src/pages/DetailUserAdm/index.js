import React from "react";
import { Row, Col, Container, Button, Modal, Form } from "react-bootstrap";
import NavbarAdm from "../../components/NavbarAdm";
import "./DetailUserAdm.css";
import person from "./diki.jpeg";

import { useHistory } from "react-router-dom";
import { getAdmin, deleteAdmin, editAdmin } from "../../redux/action/admin";
import { useDispatch, useSelector } from "react-redux";

const Content = (props) => {
  const [show, setShow] = React.useState(false);
  const [showed, setShowed] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClosed = () => setShowed(false);
  const handleShowed = () => setShowed(true);

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const history = useHistory();
  const dataProps = history.location.state;

  // const { location } = props;
  const [stateId, setStateId] = React.useState(dataProps?.id ?? "");
  const [name, setName] = React.useState(dataProps?.name ?? "");
  const [email, setEmail] = React.useState(dataProps.email ?? "");
  const [password, setPassword] = React.useState(dataProps?.password ?? "");
  const [pin, setPin] = React.useState(dataProps?.pin ?? "");
  const [phone, setPhone] = React.useState(dataProps?.phone ?? "");
  const [role, setRole] = React.useState(dataProps?.role ?? "");
  const [balance, setBalance] = React.useState(dataProps?.balance ?? "");
  const [verified, setVerified] = React.useState(dataProps?.verified ?? "");

  React.useEffect(() => {
    dispatch(getAdmin(token));
  }, [dispatch, token]);

  // const handleShowed = (id) => {
  //   dispatch(
  //     editAdmin({
  //       id: id,
  //       token: token,
  //     })
  //   );
  //   setShowed(true);
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(
  //     editAdmin({
  //       stateId: stateId,
  //       token: token,
  //       name: name,
  //       email: email,
  //       password: password,
  //       pin: pin,
  //       phone: phone,
  //       role: role,
  //       balance: balance,
  //       verified: verified,
  //     })
  //   );
  // };

  const clickSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editAdmin({
        id: stateId,
        token: token,
        name: name,
        email: email,
        password: password,
        pin: pin,
        phone: phone,
        role: role,
        balance: balance,
        verified: verified,
      })
    );
  };

  const onDelete = (id) => {
    dispatch(
      deleteAdmin({
        id: id,
        token: token,
      })
    );
    dispatch(getAdmin(token));
    history.push("/admin/user");
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
              &nbsp; &nbsp;
              <div className="total-user-detail-text">
                <p>Nama</p>
                <p>{dataProps.name}</p>
              </div>
              <div className="total-user-detail-text">
                <p>Email</p>
                <p>{dataProps.email}</p>
              </div>
              <div className="total-user-detail-text">
                <p>Password</p>
                <p className="detail-user-password"></p>
              </div>
              <div className="total-user-detail-text">
                <p>pin</p>
                <p>{dataProps.pin}</p>
              </div>
              <div className="total-user-detail-text">
                <p>Phone</p>
                <p>{dataProps.phone}</p>
              </div>
              <div className="total-user-detail-text">
                <p>Role</p>
                <p>{dataProps.role}</p>
              </div>
              <div className="total-user-detail-text">
                <p>Balance :{dataProps.balance}</p>
                <p>Verified : {dataProps.verified}</p>
              </div>
              <div className="total-user-detail-text">
                <p>Created At : {dataProps.createdAt}</p>
                <p>Update At : {dataProps.updatedAt}</p>
              </div>
              <div className="total-user-detail-text-btn">
                <Button
                  onClick={() => setShowed(true)}
                  //onClick={() => handleShowed(dataProps.id)}
                  className="btn-edit-user-bottom"
                  variant="info"
                >
                  EDIT
                </Button>
                <Button
                  onClick={() => onDelete(dataProps.id)}
                  className="btn-edit-user-bottom"
                  variant="info"
                >
                  DELETE
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form enctype="multipart/form-data">
            {/* <Form onSubmit={onSubmit} enctype="multipart/form-data"> */}
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="file" />
            </Form.Group>
            <Button type="submit" className="btn-edit-user" variant="info">
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
          <Form>
            {/* <Form onSubmit={onSubmit}> */}
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Edit your name..."
                autoComplete="current-username"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Edit your email..."
                autoComplete="current-email"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Edit your password..."
                autoComplete="current-password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPin">
              <Form.Label>Pin</Form.Label>
              <Form.Control
                onChange={(e) => setPin(e.target.value)}
                value={pin}
                type="text"
                placeholder="Edit your pin..."
              />
            </Form.Group>
            <Form.Group controlId="formBasicRole">
              <Form.Label>Role</Form.Label>
              <Form.Control
                onChange={(e) => setRole(e.target.value)}
                value={role}
                type="text"
                placeholder="Edit your role..."
              />
            </Form.Group>
            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type="text"
                placeholder="Edit your phone..."
              />
            </Form.Group>
            <Form.Group controlId="formBasicBalance">
              <Form.Label>Balance</Form.Label>
              <Form.Control
                onChange={(e) => setBalance(e.target.value)}
                value={balance}
                type="text"
                placeholder="Edit your balance..."
              />
            </Form.Group>
            <Form.Group controlId="formBasicVerified">
              <Form.Label>Verified</Form.Label>
              <Form.Control
                onChange={(e) => setVerified(e.target.value)}
                value={verified}
                type="text"
                placeholder="Edit verified..."
              />
            </Form.Group>
            <Button
              type="submit"
              className="btn-edit-user"
              variant="info"
              onClick={clickSubmit}
            >
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
    <div>
      <NavbarAdm />
      <section className="my-1 container">
        <div className="row">
          <Content />
        </div>
      </section>
    </div>
  );
};

export default DetailUserAdm;
