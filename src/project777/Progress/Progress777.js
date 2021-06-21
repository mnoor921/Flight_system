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
                <label htmlFor="">dal17 progress</label>
                <label htmlFor="" className="tex">
                  1/4
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
                  <div className="d-flex-1 ">
                    <div className=" ">
                      <p className="">to</p>
                      <label htmlFor="">
                        {" "}
                        <span className="color_pink"> (intc) </span>{" "}
                      </label>
                      <p className="">next</p>
                      <label htmlFor=""> vectors </label>
                      <p className="">dest</p>
                      <label htmlFor=""> yssy </label>
                      <p className="">econ spd</p>
                      <label htmlFor="" className="color_pink">
                        {" "}
                        215{" "}
                      </label>
                    </div>
                    <div className="">
                      <p>eta</p>
                      <label htmlFor="">2232z</label>
                      <br />
                      <br />
                      <label htmlFor="">2232z</label>
                      <br />
                      <br />
                      <label htmlFor=""> 2232z</label>
                      <br />
                      <br />
                      <label htmlFor=""> 2232z</label>
                    </div>

                    <div className="text-right">
                      <p>fuel</p>
                      <label htmlFor="">145.3</label>
                      <br />
                      <br />
                      <label htmlFor="">145.3</label>
                      <br />
                      <br />
                      <label htmlFor="">34.3</label>
                      <p>to t/c</p>
                      <label htmlFor="">94nm</label>
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
                        pos report
                      </label>
                    </div>
                    <div className="text-right">
                      <label htmlFor="">
                        pos ref
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
