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
                <label htmlFor="">Pos Ref</label>
                <label htmlFor="" className="tex">
                  2/3
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
                  <div className="d-flex-1">
                    <div className="">
                      <p>Fmc</p>
                      <br />

                      <p>inertial</p>

                      <br />
                      <p className="mt-2">Gps</p>

                      <br />
                      <p className="mt-2">Radio</p>
                      <br />
                      <p className="mt-2">Rnp / Actual</p>
                      <label htmlFor="">1.00 / nm</label>
                    </div>
                    <div className="">
                      <br />
                      <br />
                      <p>actual</p>
                      <br />
                      <p className="mt-2">actual</p>
                      <br />
                      <p className="mt-2">actual</p>
                    </div>
                    <div className="text-right mr-0">
                      <p>update</p>
                      <br />
                      <p>nm</p>
                      <br />
                      <p className="mt-2">nm</p>
                      <br />
                      <p className="mt-2">nm</p>
                    </div>
                  </div>

                  <p className="text-center" style={{ marginTop: "-.8rem" }}>
                    --------------------------------
                  </p>

                  <div className="d-flex-1" style={{ marginTop: "-.5rem" }}>
                    <div className="">
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        index
                      </label>
                    </div>
                    <div className="text-right mr-0">
                      <label htmlFor="">
                        brg/dist
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
