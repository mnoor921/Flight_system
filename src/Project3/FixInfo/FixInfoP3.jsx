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
                      <Link to="" className="btn btn-1 side-button"></Link>
                    </div>
                    <div className="col-md-10 col-9 px-0">
                      <div className="bg-dark-main">
                        <div className="numbering d-flex-1">
                          <label htmlFor=""></label>
                          <label htmlFor="">fix info</label>
                          <label htmlFor="" className="tex">
                            1/4
                          </label>
                        </div>
                        <div className="d-flex-1">
                          <div className="">
                            <p> fix</p>
                            <label htmlFor="" className="bg_grey"> [][][][][] </label>
                          </div>
                          <div className="">
                            <p> brg/dis fr</p>
                            <label htmlFor=""></label>
                          </div>

                          <div className=" mr-0">
                            <p className="mt-4"></p>
                            <label htmlFor=""></label>
                          </div>
                        </div>
                        <div
                          className="d-flex-1"
                          style={{ marginTop: "-1rem" }}
                        >
                          <div className="">
                            <p> brg/dis</p>
                          </div>
                          <div className="">
                            <p> eta</p>
                          </div>

                          <div className=" mr-0">
                            <p className="">dtg</p>
                          </div>
                          <div className=" mr-0">
                            <p className="">alt</p>
                          </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        <div
                          className="d-flex-1 "
                          //   style={{ marginTop: "-2rem" }}
                        >
                          <div className="">
                            <label htmlFor=""></label>
                          </div>
                          <div className="text-right mr-0">
                            <p>
                              <span className="mr-5">pred</span>
                              eta-alt
                            </p>
                            <label htmlFor="" className="bg_grey">-------</label>
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
