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
                  <div className="row">
                    <div className="col-md-1 col-1 side-btn-p3">
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link
                        to="/desForcast"
                        className="btn btn-1 side-button"
                      ></Link>
                    </div>
                    <div className="col-md-10 col-9 px-0">
                      <div className="bg-dark-main">
                        <div className="numbering d-flex-1">
                          <label htmlFor=""></label>
                          <label htmlFor="">climb forecast</label>
                          <label htmlFor="" className="tex">
                            1/2
                          </label>
                        </div>
                        <div className="d-flex-1">
                          <div className="">
                            <p> trans alt</p>
                            <label htmlFor="" className="bg_grey">18000</label>
                            <p> alt/temp </p>
                            <label htmlFor="" className="bg_grey">-------/--&deg;c</label>
                            <br />
                            <br />
                            <label htmlFor="" className="bg_grey">-------/--&deg;c</label>
                            <br />
                            <br />
                            <label htmlFor="" className="bg_grey">-------/--&deg;c</label>
                            <br />
                            <br />
                            <label htmlFor="" className="bg_grey">-------/--&deg;c</label>
                          </div>

                          <div className="text-right mr-0">
                            <br />
                            <br />
                            <p className="">wind dir/spd</p>
                          </div>
                        </div>
                        <p
                          className="text-center"
                          style={{ marginTop: "-1.5rem" }}
                        >
                          forecast----------------------------
                        </p>

                        <div
                          className="d-flex-1 "
                          //   style={{ marginTop: "-2rem" }}
                        >
                          <div className="">
                            <label htmlFor="">
                              <i className="fa fa-angle-left mr-1"></i>
                              request
                            </label>
                          </div>
                          <div className="text-right mr-0">
                            <label htmlFor="">
                              clb<i className="fa fa-angle-right ml-1"></i>
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
