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
                <label htmlFor="">progress</label>
                <label htmlFor="" className="tex">
                  2/4
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
                    to="/PosReport777"
                    className="btn btn-1 mb-2 side-button"
                  ></Link>
                </div>
                <div className="col-md-10 col-9">
                  <div className="d-flex-1">
                    <div className="">
                      <p>h/wind </p>
                      <label htmlFor=""></label>
                    </div>

                    <p>wind</p>
                    <p>x/wind</p>
                  </div>
                  <div className="d-flex-1" style={{ marginTop: "-.7rem" }}>
                    <div className="">
                      <p>etk error</p>
                      <label htmlFor=""></label>
                      <p>tas</p>
                      <label htmlFor=""></label>
                    </div>
                    <div className="text-right mr-0">
                      <p>vtk error</p>
                      <label htmlFor=""></label>
                      <p>sat</p>
                      <label htmlFor="">+4&deg;c</label>
                    </div>
                  </div>
                  <div className="d-flex-1" style={{ marginTop: "-.9rem" }}>
                    <div className="">
                      <p>left</p>
                      <label htmlFor="">0.0</label>
                    </div>

                    <div className="">
                      <p>fuel</p>
                      <label htmlFor="">tot</label>
                    </div>
                    <div className="">
                      <p>used</p>
                      <label htmlFor="">0.0</label>
                    </div>
                    <div className="text-right">
                      <p>right</p>
                      <label htmlFor="">0.0</label>
                    </div>
                  </div>
                  <div className="d-flex-1">
                    <div className="">
                      <p></p>
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        use
                      </label>
                    </div>
                    <div className="">
                      <label htmlFor="">fuel qty</label>
                    </div>
                    <div className=""></div>
                  </div>

                  <div className="d-flex-1" style={{ marginTop: "-1.2rem" }}>
                    <div className="">
                      <p>totalizer</p>
                      <label htmlFor="">125.3</label>
                    </div>
                    <div className="text-right mr-0">
                      <p>calculated</p>
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        sel
                        <i className="fa fa-angle-right ml-1"></i>
                        <span className="ml-4">125.3</span>
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

            <Footer next="/Progress2777" prev="/Progress777" />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default DepArr1777;
