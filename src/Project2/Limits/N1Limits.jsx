import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Limits() {
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
                <label htmlFor="" className="tex"></label>
                <label htmlFor="" className="tex">
                  N1 limits
                </label>
                <label htmlFor="" className="tex">
                  1/1
                </label>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>sel / qat</p>
                  <label htmlFor=""> ------- / +25 &deg; c</label>

                  <p>26k</p>
                </div>

                <div className="model-indent text-right ">
                  <p>26k n1</p>
                  <label htmlFor="">100.3 / 100.3</label>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <label htmlFor="">to</label>
                </div>
                <div className="model-indent">
                  <label htmlFor="">act</label>
                </div>
                <div className="model-indent">
                  <label htmlFor="">sel</label>
                </div>
                <div className="model-indent">
                  <label htmlFor="">clb</label>
                </div>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>24k dreate</p>
                  <label htmlFor=""> to-1</label>

                  <p>22k dreate</p>
                  <label htmlFor="">to-2</label>
                </div>

                <div className="model-indent text-right ">
                  <label htmlFor="">clb-1</label> <br />
                  <label htmlFor="">clb-2</label>
                </div>
              </div>

              <hr />

              <div className="d-flex-1">
                <div className="">
                  <Link to="/perf" className="btn btn-1">
                    Pref init
                  </Link>
                </div>

                <div className="">
                  <Link to="/takeoffp" className="btn btn-1">
                    takeoff
                  </Link>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="">
                  {/* <Link to="Limits2" className="btn btn-1"> Limits</Link> */}
                </div>

                <div className="">
                  <Link to="/Progress2" className="btn btn-1">
                    Next
                  </Link>
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

export default Limits;
