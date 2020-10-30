import React from "react";
import { Row, Col, Container, Button, Modal, Form } from "react-bootstrap";
import NavbarAdm from "../../components/NavbarAdm";
import "./DetailUserAdm.css";
import { imageURI } from "../../utils";

import { useHistory } from "react-router-dom";
import { getAdmin, deleteAdmin, editAdmin } from "../../redux/action/admin";
import { useDispatch, useSelector } from "react-redux";

const Content = () => {
  const [show, setShow] = React.useState(false);
  const [showed, setShowed] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClosed = () => setShowed(false);

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const history = useHistory();
  const dataProps = history.location.state;

  const [stateId] = React.useState(dataProps?.id ?? "");
  const [photo, setPhoto] = React.useState(dataProps?.photo ?? "");
  const [name, setName] = React.useState(dataProps?.name ?? "");
  const [email, setEmail] = React.useState(dataProps?.email ?? "");
  const [password, setPassword] = React.useState(dataProps?.password ?? "");
  const [pin, setPin] = React.useState(dataProps?.pin ?? "");
  const [phone, setPhone] = React.useState(dataProps?.phone ?? "");
  const [role, setRole] = React.useState(
    dataProps?.role === 5 ? "User" : dataProps?.role === 6 ? "Admin" : ""
  );
  const [balance, setBalance] = React.useState(dataProps?.balance ?? "");
  const [verified, setVerified] = React.useState(dataProps?.verified ?? "");
  const [createdAt] = React.useState(dataProps?.createdAt ?? "");
  const [updatedAt] = React.useState(dataProps?.updatedAt ?? "");

  React.useEffect(() => {
    dispatch(getAdmin(token));
  }, [dispatch, token]);

  const clickSubmit = (e) => {
    dispatch(
      editAdmin({
        id: stateId,
        token: token,
        name: name,
        email: email,
        password: password,
        pin: pin,
        phone: phone,
        balance: balance,
        verified: verified,
      })
    );
    history.push("/admin/user");
  };

  const clickPhoto = (e) => {
    dispatch(
      editAdmin({
        id: stateId,
        token: token,
        photo: photo,
      })
    );
    history.push("/admin/user");
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
                <img className="photo-user-detail" src={imageURI + photo} />
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
                <p>{name}</p>
              </div>
              <div className="total-user-detail-text">
                <p>Email</p>
                <p>{email}</p>
              </div>
              <div className="total-user-detail-text">
                <p>Password</p>
                <p className="detail-user-password"></p>
              </div>
              <div className="total-user-detail-text">
                <p>pin</p>
                <p>{pin}</p>
              </div>
              <div className="total-user-detail-text">
                <p>Phone</p>
                <p>{phone}</p>
              </div>
              <div className="total-user-detail-text">
                <p>Role</p>
                <p>{role}</p>
                {/* <p>{role === 5 ? 'User' : role === 6 ? 'Admin' : null}</p> */}
              </div>
              <div className="total-user-detail-text">
                <p>Balance :{balance}</p>
                <p>Verified : {verified}</p>
              </div>
              <div className="total-user-detail-text">
                <p>Created At : {createdAt}</p>
                <p>Update At : {updatedAt}</p>
              </div>
              <div className="total-user-detail-text-btn">
                <Button
                  onClick={() => setShowed(true)}
                  className="btn-edit-user-bottom"
                  variant="info"
                >
                  EDIT
                </Button>
                <Button
                  onClick={() => onDelete(stateId)}
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
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                onChange={(e) => setPhoto(e.target.value)}
                type="file"
              />
            </Form.Group>
            <Button
              onClick={clickPhoto}
              type="submit"
              className="btn-edit-user"
              variant="info"
            >
              Update Photo
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
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Edit your name..."
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Edit your email..."
                autoComplete="username"
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
                type="number"
                placeholder="Edit your pin..."
              />
            </Form.Group>
            <Form.Group controlId="formBasicRole">
              <Form.Label>Role</Form.Label>
              <Form.Control
                onChange={(e) => setRole(e.target.value)}
                value={role}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type="number"
                placeholder="Edit your phone..."
              />
            </Form.Group>
            <Form.Group controlId="formBasicBalance">
              <Form.Label>Balance</Form.Label>
              <Form.Control
                onChange={(e) => setBalance(e.target.value)}
                value={balance}
              />
            </Form.Group>
            <Form.Group controlId="formBasicVerified">
              <Form.Label>Verified</Form.Label>
              <Form.Control
                onChange={(e) => setVerified(e.target.value)}
                value={verified}
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

const DetailUserAdm = () => {
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
