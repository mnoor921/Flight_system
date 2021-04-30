import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Beer from "../assests/buy_bear.jpg";
// import Footer from './Footer'

import { Container, Row, Col } from "react-bootstrap";

function PreFlightMenu() {
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
              preflight
            </h4>
            <Row>
              {/* Flight Menu */}

              <Col md={4} xs={4} className="flight-info">
                <Link to="/intial" className="btn btn-1">
                  Initialize
                </Link>
                <Link to="/takeoff" className="btn btn-1">
                  Take of data request
                </Link>
                <Link to="/flightpaper" className="btn btn-1">
                  Flight Paper Request
                </Link>
                <Link to="/gatereturn" className="btn btn-1">
                  Gate Return Report
                </Link>
                <Link to="/finalweight" className="btn btn-1">
                  Final Weight Manifest Pro{" "}
                </Link>
                <Link to="/fitduty" className="btn btn-1">
                  Fit for duty report{" "}
                </Link>
                <Link to="/readyreport" className="btn btn-1">
                  Ready Report
                </Link>
              </Col>

              {/* In Flight Menu */}

              <Col md={4} xs={4} className="flight-info">
                <Link to="/release" className="btn btn-1">
                  Relase verify (Dispatch/mx)
                </Link>
                <Link to="/flightstatus" className="btn btn-1">
                  Flight Status Request
                </Link>
                <Link to="/dispatchrelease" className="btn btn-1">
                  Dispatch Relase REq
                </Link>
                <Link to="/airportdelay" className="btn btn-1">
                  Airport Delay Request
                </Link>
                <Link to="/flightservice" className="btn btn-1">
                  Flight Service message reo
                </Link>
              </Col>

              {/* Post Flight MEnu */}

              <Col md={4} xs={4} className="flight-info">
                <Link to="/pdcrequest" className="btn btn-1">
                  PDC Request
                </Link>
                <Link to="/crewlist" className="btn btn-1">
                  Crew List request
                </Link>
                <Link to="/dangerious" className="btn btn-1">
                  Dangerous goods request
                </Link>
                <Link to="/fuelslip" className="btn btn-1">
                  Fuel Slip Form request
                </Link>
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

export default PreFlightMenu;
