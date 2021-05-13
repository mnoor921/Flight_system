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

              <div className="row">
                <div className="col-md-1 col-1 side-btn">
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link to="/perf" className="btn btn-1 side-button"></Link>
                </div>
                <div className="col-md-10 col-10 pos-1">
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
                  <div className="d-flex-1" style={{ marginTop: "-1rem" }}>
                    <div className="model-indent">
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        to
                      </label>
                    </div>
                    <div className="model-indent">
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        act
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>
                    </div>
                    <div className="model-indent">
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        sel
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>
                    </div>
                    <div className="model-indent">
                      <label htmlFor="">
                        clb
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>
                    </div>
                  </div>

                  <div className="d-flex-1">
                    <div
                      className="model-indent"
                      style={{ marginTop: "-1.4rem" }}
                    >
                      <p>24k dreate</p>
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i> to-1
                      </label>

                      <p>22k dreate</p>
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>to-2
                      </label>
                    </div>

                    <div className="model-indent text-right ">
                      <label htmlFor="">
                        clb-1<i className="fa fa-angle-right ml-1"></i>
                      </label>
                      <br />
                      <br />
                      <label htmlFor="">
                        clb-2<i className="fa fa-angle-right ml-1"></i>
                      </label>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="d-flex-1 mt-2">
                    <div className="">
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        pref init
                      </label>
                    </div>

                    <div className="">
                      <label htmlFor="">
                        takeoff
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-1 col-1 side-btn">
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link to="/takeoffp" className="btn btn-1 side-button"></Link>
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
