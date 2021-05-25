import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Project3Footer";

const PosP3 = () => {
  return (
    <div>
      <div>
        <div>
          <Container className="my-3">
            <Row>
              <Col></Col>
              <Col
                md="8"
                className="p-4"
                style={{
                  border: "1px solid silver",
                  minHeight: "95vh",
                  background: "#5B727A",
                }}
              >
                <div className="main-section-p3 p-2">
                  <div className="numbering d-flex-1">
                    <label htmlFor=""></label>
                    <label htmlFor="">ual1436 pos report</label>
                    <label htmlFor="" className="tex"></label>
                  </div>

                  <div className="row">
                    <div className="col-md-1 col-1 side-btn-p3">
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link
                        to="/ProgressP3"
                        className="btn btn-1 side-button"
                      ></Link>
                    </div>
                    <div className="col-md-10 col-9 px-0">
                      <div className="bg-dark-main">
                        <div className="d-flex-1">
                          <div className="">
                            <p> pos</p>
                          </div>
                          <div className="">
                            <p> ata</p>
                          </div>
                          <div className="text-right mr-0">
                            <p className="">alt</p>
                            <label htmlFor="">110</label>
                          </div>
                        </div>
                        <div
                          className="d-flex-1"
                          style={{ marginTop: "-1.5rem" }}
                        >
                          <div className="">
                            <p> est</p>
                          </div>
                          <div className="">
                            <p> eta</p>
                          </div>
                          <div className="text-right mr-0"></div>
                        </div>
                        <div className="d-flex-1 mt-3">
                          <div className="">
                            <p> next</p>
                            <label htmlFor="">nuggs</label>
                          </div>
                        </div>
                        <div
                          className="d-flex-1 "
                          style={{ marginTop: "-1.5rem" }}
                        >
                          <div className="">
                            <p> temp</p>
                            <label htmlFor="">15&deg; c</label>
                          </div>
                          <div className="">
                            <p> wind</p>
                          </div>
                          <div className="text-right mr-0">
                            <br />
                            <br />
                            <p>pos fuel</p>
                          </div>
                        </div>
                        <p className="text-center" style={{ marginTop: "" }}>
                          ----------------------------
                        </p>

                        <div className="d-flex-1 mt-3">
                          <div className="">
                            <label htmlFor="">
                              <i className="fa fa-angle-left mr-1"></i>
                              progress
                            </label>
                          </div>
                          <div className="text-right mr-0">
                            <label htmlFor="">
                              report<i className="fa fa-angle-right ml-1"></i>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-1 col-1 side-btn-p3">
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                    </div>
                  </div>
                </div>
                <Footer />
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default PosP3;
