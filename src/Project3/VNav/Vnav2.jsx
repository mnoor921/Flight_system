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
                    <label htmlFor="">des</label>
                    <label htmlFor="" className="tex">
                      3/3
                    </label>
                  </div>

                  <div className="row">
                    <div className="col-md-1 col-1 side-btn-p3">
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                    </div>
                    <div className="col-md-10 col-9 px-0">
                      <div className="bg-dark-main">
                        <div className="d-flex-1">
                          <div className=""></div>

                          <div className="text-right mr-0 ">
                            <br />
                            <br />
                            <br />
                            <br />
                            <p className="mt-3">wpt /alt </p>
                            <label htmlFor="">--------/--------</label>
                            <p className="" style={{marginTop:'-.5rem'}}>
                              fpa <span className="ml-4">v/b</span>{" "}
                              <span className="ml-4">v/s</span>{" "}
                            </p>
                            <label htmlFor="">
                              0.0 <span className="ml-5"></span>
                              <span className="ml-5"></span>
                            </label>
                          </div>
                        </div>

                        <p
                          className="text-center"
                          style={{ marginTop: "-1rem" }}
                        >
                          ----------------------------
                        </p>
                        <div className="d-flex-1">
                          <div className="" style={{ marginTop: "-1.5rem" }}>
                            <p className=""> </p>
                            <label htmlFor=""></label>
                          </div>
                          <div className="text-right mr-0">
                            <p className=""> </p>
                            <label htmlFor="">
                              des forecast
                              <i className="fa fa-angle-right ml-1"></i>
                            </label>
                          </div>
                        </div>
                        <div className="d-flex-1 mt-1">
                          <div className="">
                            <label htmlFor="">
                              <i className="fa fa-angle-left mr-1"></i>
                             offpath des
                            </label>
                          </div>
                          <div className="text-right mr-0">
                            <label htmlFor="">
                             
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
