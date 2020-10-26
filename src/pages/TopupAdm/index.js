import React from "react";
import { Row, Col, Form, Button, Table, Modal } from "react-bootstrap";
import NavbarAdm from "../../components/NavbarAdm";
import "./TopupAdmstyle.css";

const Content = (props) => {
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
                <tr>
                  <td>1</td>
                  <td>Go to the nearest ATM or you can use E-Banking. </td>
                  <td>2020-10-04 03:32:23</td>
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
                <tr>
                  <td>1</td>
                  <td>Go to the nearest ATM or you can use E-Banking. </td>
                  <td>2020-10-04 03:32:23</td>
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
                <tr>
                  <td>1</td>
                  <td>Go to the nearest ATM or you can use E-Banking. </td>
                  <td>2020-10-04 03:32:23</td>
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
                <tr>
                  <td>1</td>
                  <td>Go to the nearest ATM or you can use E-Banking. </td>
                  <td>2020-10-04 03:32:23</td>
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
                <tr>
                  <td>1</td>
                  <td>Go to the nearest ATM or you can use E-Banking. </td>
                  <td>2020-10-04 03:32:23</td>
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
                <tr>
                  <td>1</td>
                  <td>Go to the nearest ATM or you can use E-Banking. </td>
                  <td>2020-10-04 03:32:23</td>
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
            <Button variant="primary" type="submit">
              Continue
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
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

const TopupAdm = (props) => {
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

export default TopupAdm;
