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
                    <label htmlFor="">254kt clb</label>
                    <label htmlFor="" className="tex">
                      1/3
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
                            <p className=""> spd trans </p>
                            <label htmlFor="">250/10000</label>
                          </div>

                          <div className="text-right mr-0 ">
                            <p className=""> at hidef </p>
                            <label htmlFor="">10000b</label>
                            <br />
                            <br />
                            <br />
                            <p className="mt-1"> trans alt </p>
                            <label htmlFor="">18000</label>
                          </div>
                        </div>

                        <br />
                        <br />

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
                              clb forecast
                            </label>
                          </div>
                          <div className="text-right mr-0">
                            <label htmlFor="">
                              clb dir<i className="fa fa-angle-right ml-1"></i>
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
