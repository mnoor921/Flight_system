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
                <label htmlFor="">rnp progress</label>
                <label htmlFor="" className="tex">
                  4/4
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
                      <br />
                      <br />
                      <p className="mt-1"> rnp/actual</p>
                      <label htmlFor="">
                        <span>1.00</span>/0.01nm{" "}
                      </label>
                      <p> xtk error</p>
                      <label htmlFor=""> </label>
                    </div>
                    <div className="text-right mr-0">
                      <br />
                      <br />
                      <p className="mt-1">vert rnp/anp</p>
                      <label htmlFor="">
                        <span>400</span>/ft
                      </label>
                      <p>vtk error</p>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />

                  <p className="text-center mt-2">
                    ----------------- Approach ---------------
                  </p>

                  <div className="d-flex-1" style={{ marginTop: "-.8rem" }}>
                    <div className="">
                      <p>rnp</p>
                      <label htmlFor="">0.30nm</label>
                    </div>
                    <div className="text-right mr-0">
                      <p>vert rnp</p>
                      <label htmlFor="">125ft</label>
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
            <Footer next="/Progress777" prev="/Progress2777" />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default DepArr1777;
