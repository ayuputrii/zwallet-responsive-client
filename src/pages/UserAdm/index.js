import React, { useEffect } from "react";
import { Row, Col, Form, Table, Modal, Container, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarAdm from "../../components/NavbarAdm";
import "./Homeadm.css";
import { getAdmin } from "../../redux/action/admin";
import { useDispatch, useSelector } from "react-redux";
import person from "../../icons/person.svg";

const Content = () => {
  const dispatch = useDispatch();

  const { dataAdmin, loading } = useSelector((state) => state.admin);
  const { token } = useSelector((state) => state.auth);
  const [lgShow, setLgShow] = React.useState(false);
  const _function = (_data) => {
    var r5 = [];
    var r6 = [];
    for (var i = 0; i < _data.length; i++) {
      if (_data[i].role === 6) {
        r6.push(_data[i]);
      } else {
        r5.push(_data[i]);
      }
    }
    return { r5, r6 };
  };
  const _dataAcc = _function(dataAdmin);

  const HitungData = (data) => {
    let angka = 0;
    for (var i = 0; i < data.length; i++) {
      angka += data[i].balance;
    }
    return angka;
  };

  const balanceAdmin = HitungData(_dataAcc.r6);
  const balanceUser = HitungData(_dataAcc.r5);
  const totalBalance = balanceAdmin + balanceUser;
  React.useEffect(() => {
    dispatch(getAdmin(token));
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col lg={4} md={4} sm={12} xs={12}>
            <div className="total-user">
              <img className="photo-user" src={person} alt="" />
              <p className="total-data">{_dataAcc.r5.length} User</p>
            </div>
            &nbsp;
            <div className="total-user">
              <img className="photo-user" src={person} alt="" />
              <p className="total-data">{_dataAcc.r6.length} Admin</p>
            </div>
            &nbsp;
            <div className="total-user">
              <img className="photo-user" src={person} alt="" />
              <p className="total-data"> Rp. {totalBalance}</p>
            </div>
            &nbsp;
          </Col>
          <Col lg={8} md={8} sm={12} xs={12}>
            <Form action="#" className="form-search">
              <input type="text" placeholder="Search..." />
            </Form>
            <Table responsive className="table-head">
              <thead className="table-check">
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Balance</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="table-tb">
                {loading ? (
                  <p>...loading</p>
                ) : (
                  typeof dataAdmin === "object" &&
                  dataAdmin.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.balance}</td>
                        <td className="td-btn">
                          <Link
                            className="delete-href"
                            variant="info"
                            to={{
                              pathname: "/admin/profile/info",
                              state: item,
                            }}
                          >
                            DETAIL
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </Table>
            <Pagination className="pagination-individu">
  <Pagination.Prev />
  <Pagination.Next />
</Pagination>
          </Col>
        </Row>
      </Container>

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
                <td></td>
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

export default UserAdm;
