import React from "react";
import { Row, Col, Form, Button, Table, Modal } from "react-bootstrap";
import "./TransferAdmstyle.css";
import NavbarAdm from "../../components/NavbarAdm";

const Content = (props) => {
  const [lgShow, setLgShow] = React.useState(false);
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
            <Table responsive className="table-head">
              <thead className="table-check">
                <tr>
                  <th>No</th>
                  <th>Sender</th>
                  <th>Receiver</th>
                  <th>Amount</th>
                  <th>Note</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="table-tb">
                <tr>
                  <td>1</td>
                  <td>Diki Herliansyah </td>
                  <td>diki@gmail.com</td>
                  <td>admin </td>
                  <td>Rp. 100.000 </td>
                  <td className="td-btn">
                    <Button
                      onClick={() => setLgShow(true)}
                      className="btn-detail"
                      variant="info"
                    >
                      DETAIL
                    </Button>
                    <Button className="delete-href" variant="danger">
                      DELETE
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Diki Herliansyah </td>
                  <td>diki@gmail.com</td>
                  <td>admin </td>
                  <td>Rp. 100.000 </td>
                  <td className="td-btn">
                    <Button
                      onClick={() => setLgShow(true)}
                      className="btn-detail"
                      variant="info"
                    >
                      DETAIL
                    </Button>
                    <Button className="delete-href" variant="danger">
                      DELETE
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Diki Herliansyah </td>
                  <td>diki@gmail.com</td>
                  <td>admin </td>
                  <td>Rp. 100.000 </td>
                  <td className="td-btn">
                    <Button
                      onClick={() => setLgShow(true)}
                      className="btn-detail"
                      variant="info"
                    >
                      DETAIL
                    </Button>
                    <Button className="delete-href" variant="danger">
                      DELETE
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Diki Herliansyah </td>
                  <td>diki@gmail.com</td>
                  <td>admin </td>
                  <td>Rp. 100.000 </td>
                  <td className="td-btn">
                    <Button
                      onClick={() => setLgShow(true)}
                      className="btn-detail"
                      variant="info"
                    >
                      DETAIL
                    </Button>
                    <Button className="delete-href" variant="danger">
                      DELETE
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Diki Herliansyah </td>
                  <td>diki@gmail.com</td>
                  <td>admin </td>
                  <td>Rp. 100.000 </td>
                  <td className="td-btn">
                    <Button
                      onClick={() => setLgShow(true)}
                      className="btn-detail"
                      variant="info"
                    >
                      DETAIL
                    </Button>
                    <Button className="delete-href" variant="danger">
                      DELETE
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Diki Herliansyah </td>
                  <td>diki@gmail.com</td>
                  <td>admin </td>
                  <td>Rp. 100.000 </td>
                  <td className="td-btn">
                    <Button
                      onClick={() => setLgShow(true)}
                      className="btn-detail"
                      variant="info"
                    >
                      DETAIL
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
            Detail Transfer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table responsive className="table-modal">
            <thead className="table-check">
              <tr>
                <th>Photo Sender</th>
                <th>Photo</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody className="table-tb">
              <tr>
                <td>aaa.jpg</td>
                <td>bbb.jpg</td>
                <td>2020-10-22 06:53:49</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
};

const TransferAdm = (props) => {
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

export default TransferAdm;
