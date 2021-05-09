import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Navstatus2() {
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
              <div className="numbering d-flex-1">
                <label htmlFor="" className="tex">
                  {" "}
                </label>
                <label htmlFor="" className="tex">
                  Nav options
                </label>
                <label htmlFor="" className="tex">
                  2/2
                </label>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>--------</p>
                </div>
                <div className="model-indent">
                  <label htmlFor="">dme inhibit</label>
                </div>

                <div className="model-indent text-right ">
                  <p>--------</p>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <p>--------</p>
                </div>
                <div className="model-indent">
                  <label htmlFor="">vor inhibit</label>
                </div>

                <div className="model-indent text-right ">
                  <p>--------</p>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <p>dme update</p>
                  <label htmlFor="">on / off</label>
                  <p>vor update</p>
                  <label htmlFor="">on / off</label>
                </div>
                <div className="model-indent">
                  <p>gps update</p>
                  <label htmlFor="">on / off</label>
                  <p>loc update</p>
                  <label htmlFor="">on / off</label>
                </div>
              </div>

              <div className="d-flex-1">
                <div className="">
                  <Link className="btn btn-1">Index</Link>
                </div>
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

export default Navstatus2;
