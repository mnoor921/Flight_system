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
                    <label htmlFor="">
                      dep/arr index <br />
                      rte 1 (act)
                    </label>

                    <label htmlFor="" className="tex"></label>
                  </div>

                  <div className="row">
                    <div className="col-md-1 col-1 side-btn-p3">
                      <Link
                        to="/KdenDep"
                        className="btn btn-1 side-button"
                      ></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link to="" className="btn btn-1 side-button"></Link>
                    </div>
                    <div className="col-md-10 col-9 px-0">
                      <div className="bg-dark-main">
                        <div className="d-flex-1 mt-4">
                          <div className="">
                            <p></p>
                            <label htmlFor="">
                              {" "}
                              <i className="fa fa-angle-left mr-1"></i>dep{" "}
                            </label>
                          </div>
                          <div className="">
                            <p> kden</p>
                            <label htmlFor=""> </label>
                          </div>

                          <div className="text-right mr-0 ">
                            <label htmlFor="">
                              {" "}
                              arr <i className="fa fa-angle-right ml-1"></i>{" "}
                            </label>
                          </div>
                        </div>
                        <div
                          className="d-flex-1 "
                          style={{ marginTop: "-1rem" }}
                        >
                          <div className="">
                            <p></p>
                            <label htmlFor="">
                              {" "}
                              {/* <i className="fa fa-angle-left mr-1"></i>dep{" "} */}
                            </label>
                          </div>
                          <div className="">
                            <p className="ml-4"> kden</p>
                            <label htmlFor=""> </label>
                          </div>

                          <div className="text-right mr-0 ">
                            <label htmlFor="">
                              {" "}
                              arr <i className="fa fa-angle-right ml-1"></i>{" "}
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

                        <p
                          className="text-center"
                          style={{ marginTop: "-1.5rem" }}
                        >
                          ---------rte 2-----------
                        </p>

                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        <p
                          className="text-center"
                          style={{ marginTop: "-1rem" }}
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
                      <Link
                        to="/KdenArrival"
                        className="btn btn-1 side-button"
                      ></Link>
                      <Link
                        to="/KdenArrival2"
                        className="btn btn-1 side-button"
                      ></Link>
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
