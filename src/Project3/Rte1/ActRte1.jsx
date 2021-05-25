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
                    <label htmlFor="">act rte 1 data</label>
                    <label htmlFor="" className="tex">
                      1/2
                    </label>
                  </div>

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
                        <div className="d-flex-1">
                          <div className="">
                            <p>eta </p>
                          </div>
                          <div className="">
                            <p>way point</p>
                            <label htmlFor=""> (intc) </label>
                            <br />
                            <br />
                            <label htmlFor=""> nuggs </label>
                            <br />
                            <br />
                            <label htmlFor=""> hidef </label>
                            <br />
                            <br />
                            <label htmlFor=""> shobo </label>
                            <br />
                            <br />
                            <label htmlFor=""> luptn </label>
                          </div>
                          <div className="">
                            <p>fuel</p>
                          </div>

                          <div className="text-right mr-0">
                            <p className="">wind</p>
                            <label htmlFor="">
                              <i className="fa fa-angle-right"></i>
                            </label>
                            <br />
                            <br />
                            <label htmlFor="">
                              <i className="fa fa-angle-right"></i>
                            </label>
                            <br />
                            <br />
                            <label htmlFor="">
                              <i className="fa fa-angle-right"></i>
                            </label>
                            <br />
                            <br />
                            <label htmlFor="">
                              <i className="fa fa-angle-right"></i>
                            </label>
                            <br />
                            <br />
                            <label htmlFor="">
                              <i className="fa fa-angle-right"></i>
                            </label>
                          </div>
                        </div>
                        <p
                          className="text-center"
                          style={{ marginTop: "-1.5rem" }}
                        >
                          ---------------------------- wind data
                        </p>

                        <div
                          className="d-flex-1 "
                          //   style={{ marginTop: "-2rem" }}
                        >
                          <div className="">
                            <label htmlFor="">
                              <i className="fa fa-angle-left mr-1"></i>
                              legs
                            </label>
                          </div>
                          <div className="text-right mr-0">
                            <label htmlFor="">
                              request<i className="fa fa-angle-right ml-1"></i>
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
