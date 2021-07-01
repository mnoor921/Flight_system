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
                  Ref nav data
                </label>
                <label htmlFor="" className="tex"></label>
              </div>

              <div className="row">
                <div className="col-md-1 col-1 side-btn">
                  <Link
                    to="/Indent777"
                    className="btn btn-1 side-button"
                  ></Link>
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
                  <div className="d-flex-1">
                    <div className="">
                      <p>ident </p>
                      <label htmlFor=""> ------------ </label>
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="d-flex-1 mt-3">
                    <label htmlFor="">all</label>
                    <p className="" style={{ marginTop: "-1.5rem" }}>
                      {" "}
                      navaid inhibit{" "}
                    </p>
                    <label htmlFor="">all</label>
                  </div>
                  <div className="d-flex-1 mt-1">
                    <label htmlFor="">All</label>
                    <p className="" style={{ marginTop: "-1.5rem" }}>
                      {" "}
                      vor only inhibit{" "}
                    </p>
                    <label htmlFor="">All</label>
                  </div>

                  <p className="text-center" style={{ marginTop: "-1.5rem" }}>
                    ---------------------------- rad nav inhibit
                  </p>
                  <div className="d-flex-1" style={{ marginTop: "-1.5rem" }}>
                    <div className="">
                      <label htmlFor="" className="mt-4">
                        <i class="fa fa-angle-left mr-2"></i>index
                      </label>
                    </div>
                    <div className="text-right mr-0">
                      <label htmlFor="" className="mt-4">
                        off--vor-- <span className="color_green">On</span>
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
