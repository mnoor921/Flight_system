import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function DepArr1777() {
  return (
    <div>
      <Container className="my-3">
        <Row>
          <Col></Col>
          <Col
            md="8"
            className="p-4"
            style={{ border: "1px solid silver", minHeight: "95vh" }}
          >
            <div className="main-section p-2">
              <div className="numbering d-flex-1">
                <label htmlFor=""></label>
                <label htmlFor="">Approach ref</label>
                <label htmlFor="" className="tex">
                  1/1
                </label>
              </div>

              <div className="row">
                <div className="col-md-1 col-1 side-btn">
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link
                    to="/InitPref777"
                    className="btn btn-1 mb-2 side-button"
                  ></Link>
                </div>
                <div className="col-md-10 col-9">
                  <div className="d-flex-1 ">
                    <div className=" ">
                      <p className="">gross wt</p>
                      <label htmlFor=""> 330.5 </label>
                      <br />
                      <br />
                      <br />
                      <p>Landing Ref</p>
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        qfe--- <span className="color_greeb">qnh</span>
                      </label>
                      <p>klax24l</p>
                      <label htmlFor="">10285ft3135m</label>
                    </div>
                    <div className="">
                      <p>flaps</p>
                      <label htmlFor="">20&deg;</label>
                      <br />
                      <br />
                      <label htmlFor="">25&deg;</label>
                      <br />
                      <br />
                      <label htmlFor="">30&deg;</label>
                    </div>

                    <div className="text-right">
                      <p>vref</p>
                      <label htmlFor="">188kt</label>
                      <br />
                      <br />
                      <label htmlFor="">178kt</label>
                      <br />
                      <br />
                      <label htmlFor="">77kt</label>
                      <p>flap/speed</p>
                      <label htmlFor="">-----/----</label>
                    </div>
                  </div>

                  <br />
                  <br />
                  <p className="text-center" style={{ marginTop: "-1.3rem" }}>
                    ---------------------------------------
                  </p>
                  <div className="d-flex-1">
                    <div className="">
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        index
                      </label>
                    </div>
                    <div className="text-right">
                      <label htmlFor="">
                        thrust lim
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex"></div>
                <div className="col-md-1 col-1 side-btn">
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link
                    to="/ThrustLim777"
                    className="btn btn-1 side-button mb-2"
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
  );
}

export default DepArr1777;
