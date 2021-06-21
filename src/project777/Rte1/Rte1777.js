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
                <label htmlFor="" className="color-blue">
                  Rte 1
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
                  <Link
                    to="/Rte2777"
                    className="btn btn-1 mb-2 side-button"
                  ></Link>
                </div>
                <div className="col-md-10 col-9">
                  <div className="d-flex-1 ">
                    <div className=" ">
                      <p className="mt-1">origin</p>
                      <label htmlFor=""> [][][][] </label>
                      <p>runway</p>
                      <label htmlFor=""></label>
                      <br />
                      <p className="mt-1">route </p>
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        request
                      </label>
                      <br />
                      <br />
                      <br />
                      <p className="mt-1">
                        route <span className="ml-3">------------------</span>
                      </p>
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        save
                      </label>
                    </div>

                    <div className="text-right">
                      <p>dest</p>
                      <label htmlFor="">[][][][]</label>
                      <p>flt no</p>
                      <label htmlFor="">--------</label>
                      <p>co route</p>
                      <label htmlFor="">--------</label>

                      <br />
                      <br />
                      <br />
                      <br />
                      <p className="mt-1"></p>
                      <label htmlFor="">
                        altn
                        <i className="fa fa-angle-right ml-1"></i>
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
                        rte 2
                      </label>
                    </div>
                    <div className="text-right">
                      <label htmlFor="">
                        takeoff
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

export default Acars;
