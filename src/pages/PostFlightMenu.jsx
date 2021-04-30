import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Beer from "../assests/buy_bear.jpg";
// import Footer from './Footer'

import { Container, Row, Col } from "react-bootstrap";

function PostFlightMenu() {
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
              Post Flight menu
            </h4>
            <Row>
              {/* Flight Menu */}

              <Col md={4} xs={4} className="flight-info">
                <Link to="/postflightreport" className="btn btn-1">
                  Postflight report
                </Link>
              </Col>

              {/* In Flight Menu */}

              <Col md={4} xs={4} className="flight-info">
                <Link to="/stationissue" className="btn btn-1">
                  station issue report
                </Link>
              </Col>

              {/* Post Flight MEnu */}

              <Col md={4} xs={4} className="flight-info">
                <Link to="/miscellaneous" className="btn btn-1">
                  Miscellaneous Code
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
              <Link
                to="https://www.paypal.com/donate?hosted_button_id=YQTWBX2LGLV4S"
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
              </Link>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default PostFlightMenu;
