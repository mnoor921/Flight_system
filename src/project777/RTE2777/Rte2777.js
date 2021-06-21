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
                <label htmlFor="" className="color_blue">
                  rte2
                </label>
                <label htmlFor="" className="tex">
                  1/3
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
                    to="/Rte1777"
                    className="btn btn-1 mb-2 side-button"
                  ></Link>
                </div>
                <div className="col-md-10 col-9">
                  <div className="d-flex-1 ">
                    <div className=" ">
                      <p className="">origin</p>
                      <label htmlFor="">klax</label>
                      <p className="">runway</p>
                      <label htmlFor=""> rw24l </label>
                      <p className="">route</p>
                      <label htmlFor="">
                        {" "}
                        <i className="fa fa-angle-left mr-1"></i>Request{" "}
                      </label>
                    </div>
                    <div className="text-right">
                      <p>dest</p>
                      <label htmlFor="">yssy</label>
                      <p>flt no</p>
                      <label htmlFor="">dal17</label>
                      <p>co Route</p>
                      <label htmlFor=""> klaxyssy01</label>
                      <p>rte copy</p>
                      <label htmlFor=""> complete</label>
                    </div>
                  </div>
                  <p className="text-center" style={{ marginTop: "-1.3rem" }}>
                    ---------------------------------------
                  </p>
                  <div className="d-flex-1">
                    <div className="">
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        save
                      </label>
                      <br />
                      <br />
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        rte 1
                      </label>
                    </div>
                    <div className="text-right">
                      <label htmlFor="">
                        altn
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>
                      <br />
                      <br />

                      <label htmlFor="">
                        activate
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex"></div>
                <div className="col-md-1 col-1 side-btn">
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link
                    to="/RouteRequest777"
                    className="btn btn-1 side-button"
                  ></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button mb-2"></Link>
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
