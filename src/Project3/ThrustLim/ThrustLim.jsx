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
                          <label htmlFor="">thrust lim</label>
                          <label htmlFor="" className="tex"></label>
                        </div>
                        <div className="d-flex-1">
                          <div className="">
                            <p>sel/qat </p>
                            <label htmlFor="">
                              <span className="bg_grey">48&deg;</span>/ 25&deg;
                              c
                            </label>
                          </div>

                          <div className="text-right mr-0">
                            <p> d-to n1 </p>
                            <label htmlFor="">92.8%</label>
                          </div>
                        </div>
                        <div className="d-flex-1">
                          <div className="">
                            <label htmlFor="">
                              <i className="fa fa-angle-left mr-1"></i>
                              to
                            </label>
                          </div>

                          <div className="">
                            <label htmlFor="">
                              <i className="fa fa-angle-left mr-1"></i>
                              sel
                              <i className="fa fa-angle-right ml-1"></i>
                            </label>
                          </div>
                          <div className="">
                            <label htmlFor="">
                              <i className="fa fa-angle-left mr-1"></i>
                              arm
                              <i className="fa fa-angle-right ml-1"></i>
                            </label>
                          </div>
                          <div className="text-right mr-0">
                            <label htmlFor="">
                              clb
                              <i className="fa fa-angle-right ml-1"></i>
                            </label>
                          </div>
                        </div>
                        <div
                          className="d-flex-1"
                          style={{ marginTop: "-1.3rem" }}
                        >
                          <div className="">
                            <p>to 1 </p>
                            <label htmlFor="">
                              <i className="fa fa-angle-left mr-1"></i>
                              0%
                            </label>
                            <p>to 2 </p>
                            <label htmlFor="">
                              <i className="fa fa-angle-left mr-1"></i>
                              0%
                            </label>
                          </div>

                          <div className="text-right mr-0 mt-4">
                            <label htmlFor="">
                              clb 1<i className="fa fa-angle-right ml-1"></i>
                            </label>
                            <br />
                            <br />
                            <label htmlFor="">
                              clb 2<i className="fa fa-angle-right ml-1"></i>
                            </label>
                          </div>
                        </div>
                        <br />
                        <br />
                        <p
                          className="text-center"
                          style={{ marginTop: "-.8rem" }}
                        >
                          -------------{" "}
                          <span className="bg_green">
                            fmc preflight complete
                          </span>{" "}
                          ---------------
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
                              takeoff
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
                        to="/Takeoffp3"
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
