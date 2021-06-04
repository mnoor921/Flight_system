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
                      <Link
                        to="/RteP3act2"
                        className="btn btn-1 side-button"
                      ></Link>
                      <Link
                        to="/Altn1"
                        className="btn btn-1 side-button"
                      ></Link>
                      <Link
                        to="/PerfP3"
                        className="btn btn-1 side-button"
                      ></Link>
                      <Link
                        to="/Takeoffp3"
                        className="btn btn-1 side-button"
                      ></Link>
                      <Link to="/ActRte1" className="btn btn-1 side-button"></Link>
                      <Link
                        to="/desForcast"
                        className="btn btn-1 side-button"
                      ></Link>
                    </div>
                    <div className="col-md-10 col-9 px-0">
                      <div className="bg-dark-main">
                        <div className="numbering d-flex-1">
                          <label htmlFor=""></label>
                          <label htmlFor="">fmc comm</label>
                          <label htmlFor="" className="tex"></label>
                        </div>
                        <div className="d-flex-1">
                          <div className="mt-3">
                            <label htmlFor="">
                              <i className="fa fa-angle-left mr-1"></i>
                              rte 1
                            </label>
                            <br />
                            <br />
                            <p></p>
                            <label htmlFor="">
                              <i className="fa fa-angle-left mr-1"></i>
                              altn
                            </label>
                            <br />
                            <br />
                            <p></p>
                            <label htmlFor="">
                              <i className="fa fa-angle-left mr-1"></i>
                              perf
                            </label>
                            <br />
                            <br />
                            <p></p>
                            <label htmlFor="">
                              <i className="fa fa-angle-left mr-1"></i>
                              takeoff
                            </label>
                            <br />
                            <br />
                            <p></p>
                            <label htmlFor="">
                              <i className="fa fa-angle-left mr-1"></i>
                              wind
                            </label>
                            <br />
                            <br />
                            <p></p>
                            <label htmlFor="">
                              <i className="fa fa-angle-left mr-1"></i>
                              des forecast
                            </label>
                          </div>
                          <div className="text-right mr-0">
                            <p className="mt-4"></p>
                            <label htmlFor="">
                              pos report
                              <i className="fa fa-angle-right ml-1"></i>
                            </label>
                            <br />
                            <br />
                            <p className=""></p>
                            <label htmlFor="">
                              clb forecast
                              <i className="fa fa-angle-right ml-1"></i>
                            </label>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <p className="mt-3">data link</p>
                            <label htmlFor="">ready</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-1 col-1 side-btn-p3">
                      <Link
                        to="/PosReport"
                        className="btn btn-1 side-button"
                      ></Link>
                      <Link
                        to="/ClimbForest"
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
