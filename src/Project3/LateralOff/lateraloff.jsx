import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Project3Footer";

const InitRefP3 = () => {
  return (
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
                    <Link to="/PosP3" className="btn btn-1 side-button"></Link>
                    <Link to="/PerfP3" className="btn btn-1 side-button"></Link>
                    <Link className="btn btn-1 side-button"></Link>
                    <Link
                      to="/TakeOffP3"
                      className="btn btn-1 side-button"
                    ></Link>
                    <Link
                      to="/ApproachP3"
                      className="btn btn-1 side-button"
                    ></Link>
                  </div>
                  <div className="col-md-10 col-9 px-0">
                    <div className="bg-dark-main">
                      <div className="numbering d-flex-1">
                        <label htmlFor=""></label>
                        <label htmlFor="">init / ref index</label>
                        <label htmlFor="" className="tex">
                          1/1
                        </label>
                      </div>
                      <div className="d-flex-1">
                        <div className="">
                          <p> offset dist </p>
                          <label htmlFor="" className="">
                            <span className="bg_grey">---------</span>
                          </label>
                          <p> start waypoint </p>
                          <label htmlFor="" className="">
                            <span className="bg_grey">---------</span>
                          </label>
                          <p> end waypoint </p>
                          <label htmlFor="" className="">
                            <span className="bg_grey">---------</span>
                          </label>
                        </div>
                      </div>
                      <br />
                      <br />
                      <br />
                      <br />

                      <div className="d-flex-1 mt-1">
                        <label htmlFor="" className="mt-1">
                          {/* <i class="fa fa-angle-left mr-2"></i>approach */}
                        </label>
                        <label htmlFor="" className="mt-1">
                          rte 1<i class="fa fa-angle-right ml-2"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1 col-1 side-btn-p3">
                    <Link
                      to="/NavDataP3"
                      className="btn btn-1 side-button"
                    ></Link>
                    <Link to="/Altn1" className="btn btn-1 side-button"></Link>
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
  );
};

export default InitRefP3;
