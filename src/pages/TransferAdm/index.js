import React, { useEffect } from "react";
import { Row, Col, Button, Table } from "react-bootstrap";
import "./TransferAdmstyle.css";
import NavbarAdm from "../../components/NavbarAdm";
import { useDispatch, useSelector } from "react-redux";
import {
  getSender,
  deleteSender,
  searchSender,
} from "../../redux/action/adminTransfer";

const Content = (props) => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.sender);
  const { token } = useSelector((state) => state.auth);

  React.useEffect(() => {
    dispatch(getSender(token));
  }, []);

  const onDelete = (id) => {
    dispatch(
      deleteSender({
        id: id,
        token: token,
      })
    );
    dispatch(getSender(token));
  };
  return (
    <>
      <Col lg={12} md={12} sm={12} xs={12}>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
          <div className="form-search">
              <input
                name="q"
                type="search"
                onChange={(e) => dispatch(searchSender(token, e.target.value))}
                autoComplete="off"
                placeholder="Search receiver here"
              />
            </div>
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
              {loading ? (
                  <p> Loading... </p>
                ) : (
                  typeof data === "object" &&
                  data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td> {index + 1} </td>
                        <td> {item.sender} </td>
                        <td> {item.receiver} </td>
                        <td> {item.amount} </td>
                        <td> {item.note} </td>
                        <td className="td-btn">
                          <Button
                            className="delete-href"
                            variant="danger"
                            onClick={() => onDelete(item.id)}
                          >
                            DELETE
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                )}
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

export default TransferAdm;
