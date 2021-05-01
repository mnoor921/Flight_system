import React from "react";
import Header from "./Header";
import Beer from "../assests/buy_bear.jpg";
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
                <Link to="/departureclearance" className="btn btn-1">
                  Departure clearance request
                </Link>
                <Link to="/pushback" className="btn btn-1">
                  pushback request
                </Link>
                <Link to="/expectedtaxi" className="btn btn-1">
                  expected taxi req
                </Link>
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
                <Link to="/ocenic" className="btn btn-1">
                  OCEANIC Clearance req
                </Link>
                <Link className="btn btn-1">sent...</Link>
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

export default FlightInfo;
