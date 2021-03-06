import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Beer from "../assests/buy_bear.jpg";
// import Footer from './Footer'

import { Container, Row, Col } from "react-bootstrap";

function MaintainceMenu() {
  return (
    <div>
      <Container className="my-3">
        <Row>
          <Col></Col>
          <Col md="8" style={{ border: "1px solid silver", minHeight: "95vh" }}>
            <Header />
            <Link
              to="/company"
              className="btn btn-1 w-100"
              style={{ background: "#77DF8C", color: "#fff" }}
            >
              Company
            </Link>
            <h4 className="text-center text-white text-uppercase mt-2">
              Maintenance MENU
            </h4>
            <Row>
              {/* Flight Menu */}

              <Col md={4} xs={4} className="flight-info">
                <Link to="/maintaincerequest" className="btn btn-1">
                  Maintenance Request
                </Link>
                <Link to="/elclogbook" className="btn btn-1">
                  Elec logbook entry
                </Link>
                <Link to="/logcancel" className="btn btn-1">
                  Cancel Elec logbook entry
                </Link>
              </Col>

              {/* In Flight Menu */}

              <Col md={4} xs={4} className="flight-info">
                <Link to="/creditcard" className="btn btn-1">
                  credit card reader issue
                </Link>
                <Link to="/enginedata" className="btn btn-1">
                  engine data report
                </Link>
              </Col>

              {/* Post Flight MEnu */}

              <Col md={4} xs={4} className="flight-info">
                <Link to="/sensorstatus" className="btn btn-1">
                  Sensor status
                </Link>
                <Link to="/printertest" className="btn btn-1">
                  Printer test
                </Link>
                <Link to="/vhflink" className="btn btn-1">
                  VHF LINK test{" "}
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

export default MaintainceMenu;
