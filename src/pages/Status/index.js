import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { imageURI } from "../../utils";
import Success from "../../icons/success.svg";
import Failed from "../../icons/failed.svg";
import Share from "../../icons/share.svg";
import Download from "../../icons/download-pdf.svg";
import "./Confirm.css";
import { Link } from "react-router-dom";
import Notification from "../../components/Notification";

const Status = (props) => {
  const { userTransfer } = useSelector((state) => state.search);
  const { dataTransfer, isSuccess, isFailed } = useSelector(
    (state) => state.transfer
  );
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

  const getDate = () => {
    const date = new Date();
    let month = date.getMonth();
    switch (month) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
      default:
        month = null;
        break;
    }
    const day = date.getDate();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();

    return `${month} ${day}, ${year} - ${
      hour.toString().length === 1 ? "0" + hour : hour
    }.${minute.toString().length === 1 ? "0" + minute : minute}`;
  };

  if (isSuccess) {
    return (
      <Fragment>
        <Navbar />
        <Container className="d-flex mt-5">
          <Menu active={2} />
          <div className="content-main">
            <div style={{ margin: "auto", marginBottom: "30px" }}>
              <img src={Success} alt="" />
            </div>
            <span className="bold big text-center mb-4">Transfer Success</span>
            <div className="details">
              <p className="text bold">Details</p>
              <div className="label">
                <div className="title bold med">Amount</div>
                <div className="desc big bold">Rp{dataTransfer.amount}</div>
              </div>
              <div className="label">
                <div className="title bold med">Balance Left</div>
                <div className="desc big bold">
                  Rp{data.balance - dataTransfer.amount}
                </div>
              </div>
              <div className="label">
                <div className="title bold med">Date & Time</div>
                <div className="desc big bold">{getDate()}</div>
              </div>
              <div className="label">
                <div className="title bold med">Notes</div>
                <div className="desc big bold">{dataTransfer.note}</div>
              </div>
            </div>
            <div className="into">
              <p className="text bold">Transfer To</p>
              <div className="profile label">
                <div className="avatar">
                  <img
                    style={{ borderRadius: "10px" }}
                    width="70px"
                    height="70px"
                    src={imageURI + userTransfer.photo}
                    alt=""
                  />
                </div>
                <div className="info">
                  <p className="name text bold">{userTransfer.name}</p>
                  <div className="text-muted med">
                    +62 {splitPhone(userTransfer.phone)}
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-sm-end justify-content-center mb-3">
              <button className="small-btn-light-primary mr-3 d-none d-sm-block">
                <img src={Share} alt="share" />
              </button>
              <button className="big-btn-light-primary text primary bold mr-3 d-none d-sm-block">
                <img src={Download} alt="download" /> Download PDF
              </button>
              <Link to="/dashboard">
                <button className="med-btn-primary">Back to Home</button>
              </Link>
            </div>
            <Notification />
          </div>
        </Container>
        <Footer />
      </Fragment>
    );
  } else if (isFailed) {
    return (
      <Fragment>
        <Navbar />
        <Container className="d-flex mt-5">
          <Menu active={2} />
          <div className="content-main">
            <div style={{ margin: "auto", marginBottom: "30px" }}>
              <img src={Failed} alt="" />
            </div>
            <span className="bold big text-center mb-4">Transfer Failed</span>
            <p className="text-danger text-center mb-4">
              We can’t transfer your money at the moment, we recommend you to
              check your internet connection and try again.
            </p>
            <div className="details">
              <p className="text bold d-sm-none">Details</p>
              <div className="label">
                <div className="title bold med">Amount</div>
                <div className="desc big bold">Rp{dataTransfer.amount}</div>
              </div>
              <div className="label">
                <div className="title bold med">Balance Left</div>
                <div className="desc big bold">
                  Rp{data.balance - dataTransfer.amount}
                </div>
              </div>
              <div className="label">
                <div className="title bold med">Date & Time</div>
                <div className="desc big bold">{getDate()}</div>
              </div>
              <div className="label">
                <div className="title bold med">Notes</div>
                <div className="desc big bold">{dataTransfer.note}</div>
              </div>
            </div>
            <div className="into">
              <p className="text bold">Transfer To</p>
              <div className="profile label">
                <div className="avatar">
                  <img
                    style={{ borderRadius: "10px" }}
                    width="70px"
                    height="70px"
                    src={imageURI + userTransfer.photo}
                    alt=""
                  />
                </div>
                <div className="info">
                  <p className="name text bold">{userTransfer.name}</p>
                  <div className="text-muted med">
                    +62 {splitPhone(userTransfer.phone)}
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-sm-end justify-content-center mb-3">
              <Link to="/transfer">
                <button className="med-btn-primary">Try Again</button>
              </Link>
            </div>
            <Notification />
          </div>
        </Container>
        <Footer />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Navbar />
        <Container>
          <Menu active={2} />
          <div className="content-main">
            ...Loading
            <Notification />
          </div>
        </Container>
        <Footer />
      </Fragment>
    );
  }
};

export default Status;
