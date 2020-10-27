import React from "react";
import { Row, Col, Form, Table, Modal, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarAdm from "../../components/NavbarAdm";
import "./Homeadm.css";
import { getUser, deleteUser } from "../../redux/action/admin";
import { useDispatch, useSelector } from "react-redux";
import person from "../../icons/person.svg";

const Content = () => {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.admin);
  const { token } = useSelector((state) => state.auth);
  const [lgShow, setLgShow] = React.useState(false);

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
          <Col lg={4} md={4} sm={12} xs={12}>
            <div className="total-user">
              <img className="photo-user" src={person} alt="" />
              <p className="total-data">20 User</p>
            </div>
            &nbsp;
            <div className="total-user">
              <img className="photo-user" src={person} alt="" />
              <p className="total-data">20 Admin</p>
            </div>
            &nbsp;
            <div className="total-user">
              <img className="photo-user" src={person} alt="" />
              <p className="total-data"> Rp. 20.000.000 </p>
            </div>
            &nbsp;
            <div className="total-user">
              <img className="photo-user" src={person} alt="" />
              <p className="total-data">20 User</p>
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
                  typeof data === "object" &&
                  data.map((item, index) => {
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
                            to="/admin/profile/info"
                          >
                            DETAIL
                          </Link>
                          {/* <Button
                            onClick={() => onDelete(item.id)}
                            className="delete-href"
                            variant="danger"
                          >
                            DELETE
                          </Button> */}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </Table>
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

export default UserAdm;
