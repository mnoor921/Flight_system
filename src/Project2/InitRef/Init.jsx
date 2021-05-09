import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from '../Footer'
// import Footer from "./Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Init() {
  return (
    <div>
      <Container className="my-3">
        <Row>
          <Col></Col>
          <Col
            md="8"
            className="p-4"
            style={{ border: "1px solid silver", minHeight: "95vh" }}
          >
           

            <div className="main-section p-2">
              <div className="numbering text-right">
                <label htmlFor="" className="tex">
                  1/1
                </label>
              </div>
              <div className="text-center">
                <label htmlFor="">init / ref index</label>
              </div>

              <div className="d-flex-1">
                <Link to="/indent" className="btn btn-1">Indent</Link>
                <Link to="/navdata" className="btn btn-1">nav data</Link>
              </div>
              <div className="d-flex-1">
                <Link to="/pos" className="btn btn-1">pos</Link>
              </div>
              <div className="d-flex-1">
                <Link to="/perf" className="btn btn-1">perf</Link>
              </div>
              <div className="d-flex-1">
                <Link to="/Takeoffpp" className="btn btn-1">takeoff</Link>
              </div>
              <div className="d-flex-1">
                <Link to="/Approach" className="btn btn-1">approach</Link>
              </div>
              <div className="d-flex-1">
                <Link to="/Offset" className="btn btn-1">offset</Link>
                <Link className="btn btn-1">maint</Link>
              </div>

              
            </div>
            <Footer/>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Init;
