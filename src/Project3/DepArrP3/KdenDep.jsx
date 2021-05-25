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
                    <label htmlFor="">kden departures</label>
                    <label htmlFor="" className="tex">
                      5/5
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
                            <p> eo sid</p>
                            <label htmlFor=""> -none- </label>
                          </div>
                          <div className="">
                            <p> rte 1</p>
                            <label htmlFor=""> </label>
                          </div>

                          <div className="text-right mr-0">
                            <p className="">hud takeoff</p>
                            <label htmlFor=""> ils34l </label>
                            <br />
                            <br />
                            <label htmlFor="">
                              <i className="fa fa-angle-left"></i>
                              act
                              <i className="fa fa-angle-right"></i>
                              ils34r
                            </label>
                          </div>
                        </div>
                        <div
                          className="d-flex-1"
                          style={{ marginTop: "-1.5rem" }}
                        >
                          <div className=""></div>

                          <div className="text-right mr-0">
                            <p className=""></p>
                          </div>
                        </div>
                        <br />

                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        <p
                          className="text-center"
                          style={{ marginTop: "-1.5rem" }}
                        >
                          --------------------
                        </p>

                        <div
                          className="d-flex-1 mt-2"
                          //   style={{ marginTop: "-2rem" }}
                        >
                          <div className="">
                            <label htmlFor="">
                              <i className="fa fa-angle-left mr-1"></i>
                              index
                            </label>
                          </div>
                          <div className="text-right mr-0">
                            <label htmlFor="">
                              route
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
