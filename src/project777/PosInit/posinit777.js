import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Acars() {
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
                <label htmlFor="">Pos Init </label>
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
                    to="/InitPref777"
                    className="btn btn-1 mb-2 side-button"
                  ></Link>
                </div>
                <div className="col-md-10 col-9">
                  <div className="d-flex-1 ">
                    <div className=" ">
                      <br />
                      <br />
                      <p className="mt-1">ref airport</p>
                      <label htmlFor="">---------</label>
                      <p>gate</p>
                      <label htmlFor=""></label>
                      <br />
                      <p className="mt-1">utc </p>
                      <label htmlFor="">2226z</label>
                    </div>

                    <div className="text-right">
                      <p>last pos </p>
                      <label htmlFor="">
                        <span className="mr-5">n33&deg; 56.4</span>w118&deg;
                        24.5
                      </label>

                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <p className="mt-2">gps pos</p>
                      <label htmlFor="">
                        <span className="mr-5">n33&deg; 56.4</span>w118&deg;
                        24.5
                      </label>

                      <p className="">
                        <span className="mr-5">set</span>{" "}
                        <span className="mr-5">inertial</span> pos
                      </p>
                      <label htmlFor="">
                        [][][]&deg;[][].[]{" "}
                        <span className="ml-5"> [][][][]&deg;[][].[] </span>
                      </label>
                    </div>
                  </div>
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
                        route
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
                    to="/Rte1777"
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

export default Acars;
