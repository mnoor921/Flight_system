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
                    <label htmlFor="">act rte 1 hold</label>
                    <label htmlFor="" className="tex">
                      1/1
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
                        to="/Rte1Hold"
                        className="btn btn-1 side-button"
                      ></Link>
                    </div>
                    <div className="col-md-10 col-9 px-0">
                      <div className="bg-dark-main">
                        <div className="d-flex-1">
                          <div className="">
                            <p> fix</p>
                            <label htmlFor="">nuggs</label>
                            <p> quad/radial </p>
                            <label htmlFor="">---/----</label>
                            <p>inbo crs/dir </p>
                            <label htmlFor="">059&deg;/r turn</label>
                            <p> leg time </p>
                            <label htmlFor="">1.0 min</label>
                            <p> leg dist </p>
                            <label htmlFor="">---.--nm</label>
                          </div>

                          <div className="text-right mr-0">
                            <p>spd/tgt alt</p>
                            <label htmlFor="">---/------</label>
                            <p className="mt-1">fix eta</p>
                            <label htmlFor=""></label>
                            <p className="">efc time</p>
                            <label htmlFor="">---/---</label>
                            <p className="">hold available</p>
                            <label htmlFor=""></label>
                            <p className="">best speed</p>
                            <label htmlFor=""></label>
                          </div>
                        </div>
                        <p
                          className="text-center"
                          style={{ marginTop: "-1.5rem" }}
                        >
                          ----------------------------
                        </p>

                        <div
                          className="d-flex-1 "
                          //   style={{ marginTop: "-2rem" }}
                        >
                          <div className="">
                            <label htmlFor="">
                              <i className="fa fa-angle-left mr-1"></i>
                              next hold
                            </label>
                          </div>
                          <div className="text-right mr-0">
                            <label htmlFor=""></label>
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
