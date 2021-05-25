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
                    <label htmlFor="">econ crz</label>
                    <label htmlFor="" className="tex">
                      2/3
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
                          <div className="">
                            <p>crz alt </p>
                            <label htmlFor="">fl250</label>

                            <p className=""> econ spd </p>
                            <label htmlFor="">-------------</label>
                            <br />
                            <br />
                            <br />
                            <p className=""> step </p>
                            <label htmlFor="">2000</label>
                          </div>

                          <p style={{ marginTop: "11rem" }}>
                            opt <span className="ml-4">max</span>
                          </p>

                          <div className="text-right mr-0 ">
                            <p className=""> </p>
                            <label htmlFor=""></label>
                            <br />
                            <br />
                            <br />
                            <p className="mt-1"> </p>
                            <label htmlFor=""></label>
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
                              eng out
                              <i className="fa fa-angle-right ml-1"></i>
                            </label>
                          </div>
                        </div>
                        <div className="d-flex-1 mt-1">
                          <div className="">
                            <label htmlFor="">
                              <i className="fa fa-angle-left mr-1"></i>
                              rta progress
                            </label>
                          </div>
                          <div className="text-right mr-0">
                            <label htmlFor="">
                              lrc<i className="fa fa-angle-right ml-1"></i>
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
