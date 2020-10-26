import React from "react";
import {
  Row,
  Col,
  Form,
  Button,
  Table,
  Modal,
} from "react-bootstrap";
import MenuAdm from "../../components/MenuAdm";
import "./Homeadm.css";

const Content = (props) => {
  const [lgShow, setLgShow] = React.useState(false);
  return (
    <>
      <Col lg={9} md={12} sm={12} xs={12}>
        <Row>
          <Col lg={2} md={2} sm={3} xs={12}>
            <p className="logo-name">Zwallet</p>
          </Col>
          <Col lg={8} md={8} sm={6} xs={12}>
            <Form action="#" className="form-search">
              <input type="text" placeholder="Search..." />
            </Form>
          </Col>
          <Col lg={2} md={2} sm={2} xs={12}>
            <Button className="button-add" variant="info">
              ADD
            </Button>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12}>
          <Table responsive className="table-head">
            <thead className="table-check">
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Balance</th>
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
                  <Button className="btn-edit" variant="info">
                    EDIT
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
                  <Button className="btn-edit" variant="info">
                    EDIT
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
                  <Button className="btn-edit" variant="info">
                    EDIT
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
                  <Button className="btn-edit" variant="info">
                    EDIT
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
                  <Button className="btn-edit" variant="info">
                    EDIT
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
                  <Button className="btn-edit" variant="info">
                    EDIT
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
                  <Button className="btn-edit" variant="info">
                    EDIT
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
                  <Button className="btn-edit" variant="info">
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
            Detail User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table responsive className="table-modal">
            <thead className="table-check">
              <tr>
                <th>Password</th>
                <th>Pin</th>
                <th>Photo</th>
                <th>Phone</th>
                <th>Verified</th>
                <th>Date Create</th>
                <th>Date Update</th>
              </tr>
            </thead>
            <tbody className="table-tb">
              <tr>
                <td>dherliansyah </td>
                <td>112233 </td>
                <td>Tablecell.jpg </td>
                <td>08211414831 </td>
                <td> 0 </td>
                <td>25/10/2020</td>
                <td>25/10/2020</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
};

const UserAdm = (props) => {
  return (
    <div className="bg-white">
      <section class="my-1 container">
        <div class="row">
          <MenuAdm {...props} />
          <Content />
        </div>
      </section>
    </div>
  );
};

export default UserAdm;
