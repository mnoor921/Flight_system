import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Hold() {
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
                 --------------------
                </label>
                <label htmlFor="" className="tex">
                  Progress
                </label>
                <label htmlFor="" className="tex">
                  2/4
                </label>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>Headwind</p>
                  <label htmlFor=""></label>

                  <p>wind </p>
                  <label htmlFor="">sealy</label>

                  <p>xtk error</p>
                  <label htmlFor="">r 0.96nm</label>

                 <p>gps-l trk</p>
                  <label htmlFor="">152 &deg; t</label>

                  <p>preflight</p>
                  <label htmlFor="">
                      <Link className="btn btn-1">report</Link>
                  </label>

                  <p>weather</p>
                  <label htmlFor="">
                      <Link className="btn btn-1">report</Link>
                  </label>
                </div>

                <div className="model-indent text-right ">
                  <p>cross wind</p>
                  <label htmlFor=""></label>

                  <p>sat isa/dev</p>
                  <label htmlFor=""></label>

                  <p></p>
                  <label htmlFor=""></label>

                  <p>tas</p>
                  <label htmlFor="">100kt</label>

                  <p>Progress</p>
                  <label htmlFor="">
                      <Link className="btn btn-1">report</Link>
                  </label>

                  <p>position</p>
                  <label htmlFor="">
                      <Link className="btn btn-1">report</Link>
                  </label>
                </div>
              </div>
              {/* <hr /> */}

              
              <div className="d-flex-1">
                <div className="">
                  <Link to="/Progress" className="btn btn-1"> Prev</Link>
                </div>

                <div className="">
                  <Link to="/Progress3" className="btn btn-1">Next</Link>
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

export default Hold;
