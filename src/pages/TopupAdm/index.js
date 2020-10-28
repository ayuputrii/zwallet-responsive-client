import React, { useEffect } from "react";
import { Row, Col, Form, Button, Table, Modal } from "react-bootstrap";
import NavbarAdm from "../../components/NavbarAdm";
import "./TopupAdmstyle.css";
import { useSelector, useDispatch } from "react-redux";
import { topup } from "../../redux/action/topup";

const Content = (props) => {
  const { token } = useSelector((state) => state.auth);
  const { data } = useSelector((state) => state.topup);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(topup(token));
  }, []);

  const [lgShow, setLgShow] = React.useState(false);
  const [smShow, setsmShow] = React.useState(false);
  return (
    <>
      <Col lg={12} md={12} sm={12} xs={12}>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Form action="#" className="form-search">
              <input type="text" placeholder="Search..." />
            </Form>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Button
              className="button-add-topup"
              type="submit"
              variant="info"
              onClick={() => setsmShow(true)}
            >
              ADD TOPUP
            </Button>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Table responsive className="table-head">
              <thead className="table-check">
                <tr>
                  <th>No</th>
                  <th>Tittle</th>
                  <th>Date Topup</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="table-tb">
                {!data
                  ? "...Loading"
                  : data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.sequence}</td>
                          <td>{item.title}</td>
                          <td>{item.updatedAt}</td>
                          <td className="td-btn">
                            <Button
                              onClick={() => setLgShow(true)}
                              className="btn-edit"
                              variant="info"
                            >
                              EDIT
                            </Button>
                            <Button className="delete-href" variant="danger">
                              DELETE
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Col>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg modal-user">
            Edit Topup
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form action="#">
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="description-tittle">
                DESCRIPTION TITTLE
              </Form.Label>
              <Form.Control type="text" placeholder="Enter tittle..." />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="description-tittle">
                SQUENCE
              </Form.Label>
              <Form.Control type="number" placeholder="Enter squence..." />
            </Form.Group>
            <Button
              className="button-add-topup"
              type="submit"
              variant="info"
            >
              EDIT TOPUP
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
        size="lg"
        show={smShow}
        onHide={() => setsmShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg modal-user">
            Add Topup
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form action="#">
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="description-tittle">
                DESCRIPTION TITTLE
              </Form.Label>
              <Form.Control type="text" placeholder="Enter tittle..." />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="description-tittle">
                SQUENCE
              </Form.Label>
              <Form.Control type="number" placeholder="Enter squence..."  />
            </Form.Group>
            <Button
              className="button-add-topup"
              type="submit"
              variant="info"
            >
              ADD TOPUP
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

const TopupAdm = (props) => {
  return (
    <div>
      <NavbarAdm />
      <section class="my-1 container">
        <div class="row">
          <Content />
        </div>
      </section>
    </div>
  );
};

export default TopupAdm;
