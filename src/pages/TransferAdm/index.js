import React from "react";
import { Row, Col, Form, Button, Table} from "react-bootstrap";
import "./TransferAdmstyle.css";
import NavbarAdm from "../../components/NavbarAdm";

const Content = (props) => {
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
