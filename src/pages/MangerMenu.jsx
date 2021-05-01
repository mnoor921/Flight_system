import React from "react";
import Header from "./Header";
import Beer from "../assests/buy_bear.jpg";
import { Link } from "react-router-dom";
// import Footer from './Footer'

import { Container, Row, Col } from "react-bootstrap";

function MangerMenu() {
  return (
    <div>
      <Container className="my-3">
        <Row>
          <Col></Col>
          <Col md="8" style={{ border: "1px solid silver", minHeight: "95vh" }}>
            <Header />
            {/* <br /> */}
            <h4 className="text-center text-white text-uppercase">manager</h4>
            <Row>
              {/* Flight Menu */}

              <Col md={6} xs={6} className="flight-info">
                <Link to="/acars" className="btn btn-1">
                  acars
                </Link>
                <Link to="/vhf" className="btn btn-1">
                  vhf
                </Link>
                <Link to="/hf" className="btn btn-1">
                  hf
                </Link>
                <Link to="/satcom" className="btn btn-1">
                  satcom
                </Link>
                <Link to="/ads" className="btn btn-1">
                  ads
                </Link>
              </Col>

              {/* In Flight Menu */}

              <Col md={6} xs={6} className="flight-info">
                <Link to="/mangersystem" className="btn btn-1">
                  system Information
                </Link>
                <Link to="/automaticmessage" className="btn btn-1">
                  automatic message
                </Link>
                <Link to="/master" className="btn btn-1">
                  master
                </Link>
                <Link to="/commaudit" className="btn btn-1">
                  comm audit
                </Link>
              </Col>
            </Row>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className=" text-center mx-auto">
            <label htmlFor="">if you find this site helpful, <br/> i won't say no to a beer</label> <br/>
              <a
                href="https://www.paypal.com/donate?hosted_button_id=YQTWBX2LGLV4S"
                className=" mx-auto"
              >
                <img
                  src={Beer}
                  width="120"
                  height="50"
                  className="my-2"
                  alt=""
                  style={{ borderRadius: "10px" }}
                />
              </a>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default MangerMenu;
