import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Indent() {
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
                  1/2
                </label>
              </div>
              <div className="text-center">
                <label htmlFor="">indent</label>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>Model</p>
                  <label>737-800</label>
                </div>
                <div className="model-indent text-right">
                  <p>eng rating</p>
                  <label>26k</label>
                </div>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>Nav data</p>
                  <label>coa4090301</label>
                </div>
                <div className="model-indent text-right">
                  <p>active</p>
                  <label>mar12apr08/09</label> <br />
                  <label>feb12mar11/09</label>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <p>op program</p>
                  <label>549849-018</label>
                </div>
                <div className="model-indent text-right">
                  <p>(u10.7)</p>
                  <p>supp data</p>
                  <label></label>
                </div>
              </div>
              <div className="d-flex-1">
                <Link to="/indent" className="btn btn-1">
                  prev
                </Link>
                <Link to="/indent2" className="btn btn-1">
                  next
                </Link>
              </div>
            </div>
            <Footer />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Indent;
