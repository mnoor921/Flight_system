import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Rte1() {
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
                  1/3
                </label>
              </div>
              <div className="text-center">
                <label htmlFor="">rte</label>
              </div>

              <div className="d-flex-1">
                <div className="">
                  <p>origin</p>
                  <label>kiah</label>

                  <p>co route</p>
                  <label>iahsat001</label>

                  <p>runway</p>
                  <label>15l</label>
                </div>
                <div className="model-indent text-right">
                  <p>dest</p>
                  <label>ksat</label>

                  <p>flt no.</p>
                  <label> --------- </label>

                  <p>flt plan</p>
                  <Link className="btn btn-1">request</Link>
                </div>
              </div>
              <div className="d-flex-1">
                <Link></Link>
                <Link to="/Rte2" className="btn btn-1">
                  Next
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

export default Rte1;
