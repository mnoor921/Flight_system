import React from "react";
import Header from "./Header";
import Beer from "../assests/buy_bear.jpg";
import { Link } from "react-router-dom";

// import Footer from './Footer'

import { Container, Row, Col } from "react-bootstrap";

function AtcMenu() {
  return (
    <div>
      <Container className="my-3">
        <Row>
          <Col></Col>
          <Col md="8" style={{ border: "1px solid silver", minHeight: "95vh" }}>
            <Header />
            <h4 className="text-center text-white">ATC</h4>
            <Row>
              {/* Flight Menu */}

              <Col md={4} xs={4} className="flight-info">
                <Link to="/levelrequest" className="btn btn-1">
                  Level request
                </Link>
                <Link to="/routerequest" className="btn btn-1">
                  Route request
                </Link>
                <Link to="/speedrequest" className="btn btn-1">
                  speed request
                </Link>
                <Link to="/clearancerequest" className="btn btn-1">
                  clearance request
                </Link>
                <Link to="/itplevel" className="btn btn-1">
                  itp level request
                </Link>
              </Col>

              {/* In Flight Menu */}

              <Col md={4} xs={4} className="flight-info">
                <Link to="/WhenExpect" className="btn btn-1">
                  when can we expect
                </Link>
                <Link to="/voicecontact" className="btn btn-1">
                  voice contact request
                </Link>
                <Link to="/freetext" className="btn btn-1">
                  free text message
                </Link>
                <Link to="/login" className="btn btn-1">
                  Logon/status
                </Link>
              </Col>

              {/* Post Flight MEnu */}

              <Col md={4} xs={4} className="flight-info">
                <Link to="/emergency" className="btn btn-1">
                  emergency report
                </Link>
                <Link to="/RequestedReport" className="btn btn-1">
                  requested reports
                </Link>
                <Link to="/conditional" className="btn btn-1">
                  conditional clearance
                </Link>
                <Link to="/positionreport" className="btn btn-1">
                  position report
                </Link>
                <Link to="/monitoringreport" className="btn btn-1">
                  monitoring report
                </Link>
              </Col>
            </Row>
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

export default AtcMenu;
