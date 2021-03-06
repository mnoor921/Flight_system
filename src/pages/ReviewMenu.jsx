import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Beer from "../assests/buy_bear.jpg";
// import Footer from './Footer'

import { Container, Row, Col } from "react-bootstrap";

function ReviewMenu() {
  return (
    <div>
      <Container className="my-3">
        <Row>
          <Col></Col>
          <Col md="8" style={{ border: "1px solid silver", minHeight: "95vh" }}>
            <Header />
            <h4 className="text-center text-white text-uppercase">review</h4>
            <Row>
              {/* Flight Menu */}

              <Col md={4} xs={4} className="flight-info">
                <Link to="/atcuplink" className="btn btn-1">
                  atc uplinks..
                </Link>
                <Link to="/atcdownlinks" className="btn btn-1">
                  atc downlinks..
                </Link>
                <Link to="/commsystem" className="btn btn-1">
                  comm system message
                </Link>
              </Col>

              {/* In Flight Menu */}

              <Col md={4} xs={4} className="flight-info">
                <Link to="/flightinfoup" className="btn btn-1">
                  flight info uplinks..
                </Link>
                <Link to="/flightinfodown" className="btn btn-1">
                  flight info downlinks..
                </Link>
              </Col>

              {/* Post Flight MEnu */}

              <Col md={4} xs={4} className="flight-info">
                <Link to="/recived" className="btn btn-1">
                  recived...
                </Link>
                <Link to="/send" className="btn btn-1">
                  sent...
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

export default ReviewMenu;
