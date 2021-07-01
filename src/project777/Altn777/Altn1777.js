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
                  altn
                </label>
                <label htmlFor="" className="tex">
                  1/2
                </label>
              </div>

              <div className="row">
                <div className="col-md-1 col-1 side-btn">
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 mb-2 side-button"></Link>
                </div>
                <div className="col-md-10 col-9">
                  <div className="d-flex-1">
                    <div className="">
                      <p> </p>
                      <label htmlFor="" className="mt-4">
                        ------------------
                      </label>
                    </div>
                    <div className="">
                      <label htmlFor="">eta</label>
                    </div>

                    <div className="text-right mr-0">
                      <label htmlFor="">fuel</label>
                    </div>
                  </div>
                  <div className="d-flex-1">
                    <div>
                      <label htmlFor="" className="mt-1">
                        ------------------
                      </label>
                      <br />
                      <br />
                      <label htmlFor="" className="">
                        ------------------
                      </label>
                      <br />
                      <br />
                      <label htmlFor="" className="">
                        ------------------
                      </label>
                    </div>
                  </div>

                  <div className="d-flex-1" style={{ marginTop: "-1.4rem" }}>
                    <div className="">
                      <p>Altn</p>
                      <label htmlFor="" className="mt-1">
                        <i class="fa fa-angle-left mr-2"></i>request
                      </label>
                    </div>
                    <div className="text-right mr-0">
                      <p>altn inhibit</p>
                      <label htmlFor="" className="mt-1">
                        <span> --------/-------</span>
                      </label>
                    </div>
                  </div>
                  <div className="d-flex-1" style={{ marginTop: "-1.4rem" }}>
                    <div className="">
                      <p>wxr </p>
                      <label htmlFor="" className="mt-1">
                        <i class="fa fa-angle-left mr-2"></i> request
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
                    to="/Takeoff777"
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
