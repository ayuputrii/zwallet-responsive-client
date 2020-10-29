import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "../redux/action/login";
import { userLogout } from "../redux/action/user";
import { useDispatch, useSelector } from "react-redux";
import { imageURI } from "../utils";

const Bar = (props) => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);

  const splitPhone = (phone) => {
    if (phone) {
      const newPhone = phone.split("").map((item, index) => {
        if (index === 2 || index === 6) {
          return item + "-";
        } else {
          return item;
        }
      });

      return newPhone;
    } else {
      return "";
    }
  };

  return (
    <Navbar className="nav" bg="white" expand="lg">
      <Container fluid="md" className="py-3">
        <Nav.Item className="logo-navbarAdm text-navbarAdm primary">
          Zwallet
        </Nav.Item>

        <Nav.Item className="d-none d-md-block d-sm-none d-xs-none logo-navbarAdm btn-navbarAdm">
          <Link to={{ pathname: `/admin/user` }}>User</Link>
        </Nav.Item>
        <Nav.Item className="d-none d-md-block d-sm-none d-xs-none logo-navbarAdm btn-navbarAdm">
          <Link to={{ pathname: `/admin/transfer` }}>Transfer</Link>
        </Nav.Item>
        <Nav.Item className="d-none d-md-block d-sm-none d-xs-none logo-navbarAdm btn-navbarAdm">
          <Link to={{ pathname: `/admin/topup` }}>Top Up</Link>
        </Nav.Item>
        <Nav.Item className="d-none d-md-block d-sm-none d-xs-none logo-navbarAdm btn-navbarAdm">
          <Link
            onClick={() => {
              dispatch(logout());
              dispatch(userLogout());
            }}
            to={{ pathname: `/` }}
          >
            Logout
          </Link>
        </Nav.Item>
        <div className={`sidenav ${sidebarActive ? "active" : ""}`}>
          <div className="d-flex flex-column align-items-center justify-content-between bottom">
            <div className="d-flex justify-content-between flex-column align-items-center">
              <div className="py-4 my-5">
                <span className="big primary bold">
                  <Link to={{ pathname: `/admin/user` }}>User</Link>
                </span>
                <hr className="bg-primary" />
              </div>
              <div className="py-4 my-5">
                <span className="big primary bold">
                  <Link to={{ pathname: `/admin/transfer` }}>Transfer</Link>
                </span>
                <hr className="bg-primary" />
              </div>
              <div className="px-4 my-5">
                <span className="big primary bold">
                  <Link to={{ pathname: `/admin/topup` }}>Top Up</Link>
                </span>
                <hr className="bg-primary" />
              </div>
            </div>
            <div className="sidenav-logout align-self-center my-5">
              <span className="big primary bold">
                <Link
                  onClick={() => {
                    dispatch(logout());
                    dispatch(userLogout());
                  }}
                  to={{ pathname: `/` }}
                >
                  Logout
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div
          onClick={() => setSidebarActive(!sidebarActive)}
          className="hamburger"
        >
          <div className="bg-primary"></div>
          <div className="bg-primary"></div>
          <div className="bg-primary"></div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Bar;
