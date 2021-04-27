import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
// import Footer from './Footer'

import { Container, Row, Col } from "react-bootstrap";

function FlightInfo() {
  return (
    <div>
      <Container className="my-3">
        <Row>
          <Col></Col>
          <Col md="8" style={{ border: "1px solid silver", minHeight: "95vh" }}>
            <Header />
            {/* <br /> */}
            <h4 className="text-center text-white text-uppercase">
              Flight Information
            </h4>
            <Row>
              {/* Flight Menu */}

              <Col md={4} xs={4} className="flight-info">
                <Link to="/departureclearance" className="btn btn-1">Departure Clearance Reuest</Link>
                <Link to="/pushback" className="btn btn-1">pushback request</Link>
                <Link to="/expectedtaxi" className="btn btn-1">expected taxi req</Link>
              </Col>

              {/* In Flight Menu */}

              <Col md={4} xs={4} className="flight-info">
                <Link to="/atisreq" className="btn btn-1">
                  atis request
                </Link>
                <Link to="/twip" className="btn btn-1">
                  twip request
                </Link>
              </Col>

              {/* Post Flight MEnu */}

              <Col md={4} xs={4} className="flight-info">
                <Link to="/" className="btn btn-1">
                  OCEANIC Clearance req
                </Link>
                <Link to="/" className="btn btn-1">
                  sent...
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

export default FlightInfo;
