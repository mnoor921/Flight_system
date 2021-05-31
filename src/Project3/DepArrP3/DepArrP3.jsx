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
                        to="/KdnArrivalIndex"
                        className="btn btn-1 side-button"
                      ></Link>
                    </div>
                    <div className="col-md-10 col-9 px-0">
                      <div className="bg-dark-main">
                        <div className="numbering d-flex-1">
                          <label htmlFor=""></label>
                          <label htmlFor="">kden departures</label>
                          <label htmlFor="" className="tex">
                            1/5
                          </label>
                        </div>
                        <div className="d-flex-1">
                          <div className="">
                            <p>Sids </p>
                            <label htmlFor="">baylr6</label>
                            <br />
                            <br />
                            <label htmlFor="">chuwy1</label>
                            <br />
                            <br />
                            <label htmlFor="">connr7</label>
                            <br />
                            <br />
                            <label htmlFor="">coorz6</label>
                            <br />
                            <br />
                            <label htmlFor="">ddrth1</label>
                          </div>
                          <p>rte 1</p>

                          <div className="text-right mr-0">
                            <p className=""> runways </p>
                            <label htmlFor="">07</label>
                            <br />
                            <br />
                            <p className=""> </p>
                            <label htmlFor=""> 08 </label>
                            <br />
                            <br />
                            <p className=""> </p>
                            <label htmlFor=""> 16l </label>
                            <br />
                            <br />
                            <p className=""> </p>
                            <label htmlFor=""> 16r </label>
                            <br />
                            <br />
                            <p className=""> </p>
                            <label htmlFor=""> 17l </label>
                          </div>
                        </div>

                        <p
                          className="text-center"
                          style={{ marginTop: "-1.5rem" }}
                        >
                          ----------------------------
                        </p>

                        <div className="d-flex-1 ">
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
