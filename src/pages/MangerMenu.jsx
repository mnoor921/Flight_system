import React from "react";
import Header from "./Header";
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
            <h4 className="text-center text-white text-uppercase">
              manager
            </h4>
            <Row>
              {/* Flight Menu */}

              <Col md={6} xs={6} className="flight-info">
                <Link to="/acars" className="btn btn-1">acars</Link>
                <Link to="/vhf" className="btn btn-1">vhf</Link>
                <Link to="/hf" className="btn btn-1">hf</Link>
                <Link to="/satcom" className="btn btn-1">satcom</Link>
                <Link to="/ads" className="btn btn-1">ads</Link>
              </Col>

              {/* In Flight Menu */}

              <Col md={6} xs={6} className="flight-info">
                <Link to="/" className="btn btn-1">
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
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default MangerMenu;
