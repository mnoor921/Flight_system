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
                        to="/InitRefP3"
                        className="btn btn-1 side-button"
                      ></Link>
                    </div>
                    <div className="col-md-10 col-9 px-0">
                      <div className="bg-dark-main">
                        <div className="numbering d-flex-1">
                          <label htmlFor=""></label>
                          <label htmlFor="">approach ref</label>
                          <label htmlFor="" className="tex"></label>
                        </div>
                        <div className="d-flex-1">
                          <div className="">
                            <p>gross wt </p>
                            <label htmlFor="" className="bg_grey">
                              500.3
                            </label>
                            <br />
                            <br />
                            <br />
                            <p className="mt-1"> landing ref </p>
                            <label htmlFor="">
                              <i className="fa fa-angle-left mr-1"></i>
                              qfe --- <span className="color_green">qnh</span>
                            </label>
                            <p className=""> kjfk22l </p>
                            <label htmlFor="">8400ft 2560m</label>
                            <p className=""> g/s </p>
                            <label htmlFor="">
                              <i className="fa fa-angle-left mr-1"></i>
                              <span className="color_green">on</span>
                              <i className="fa fa-arrow-left"></i>
                              <i className="fa fa-arrow-right"></i>
                              off
                            </label>
                          </div>

                          <div className="text-right mr-0">
                            <p> flaps vre </p>
                            <label htmlFor="">20&deg; 172kt</label>
                            <p> </p>
                            <br />
                            <label htmlFor="">25&deg; 172kt</label>
                            <p></p>
                            <br />
                            <label htmlFor="">30&deg; 172kt</label>
                            <p>flap/speed </p>
                            <label htmlFor="">
                              {" "}
                              <span className="bg_grey">20/109</span>
                            </label>

                            <p>wind/cord </p>
                            <label htmlFor="">
                              + <span className="bg_grey">05</span> kt
                            </label>
                          </div>
                        </div>

                        <p
                          className="text-center"
                          style={{ marginTop: "-1.5rem" }}
                        >
                          ----------------------------
                        </p>
                        <div
                          className="d-flex-1"
                          style={{ marginTop: "-1.5rem" }}
                        >
                          <div className="">
                            <label htmlFor="" className="mt-4">
                              <i class="fa fa-angle-left mr-2"></i>index
                            </label>
                          </div>
                          <div className="text-right mr-0">
                            <label htmlFor="" className="mt-4">
                              thrust lim
                              <i className="fa fa-angle-right ml-1"></i>
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
                      <Link
                        to="/ThrustLim"
                        className="btn btn-1 side-button"
                      ></Link>
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
