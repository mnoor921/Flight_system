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
                <label htmlFor="" >
                  klax departures
                </label>
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
                  <Link to="/InitPref777" className="btn btn-1 mb-2 side-button"></Link>
                </div>
                <div className="col-md-10 col-9">
                  <div className="d-flex-1 ">
                    <div className=" ">
                      <p className="">Sids</p>
                      <label htmlFor=""> casta4 </label>
                      <br />
                      <br />
                      <p></p>
                      <label htmlFor="">chaty2</label>
                      <br />
                      <br />
                      <p></p>
                      <label htmlFor="">fixit2</label>
                      <br />
                      <br />
                      <p></p>
                      <label htmlFor="">gabreb</label>
                      <br />
                      <br />
                      <p></p>
                      <label htmlFor="">gmn4</label>
                    </div>
                    <div className="">
                      <label htmlFor="">rte 1</label>
                    </div>

                    <div className="text-right">
                      <p>runways</p>
                      <label htmlFor="">06l</label>
                      <br />
                      <br />
                      <p></p>
                      <label htmlFor="">06r</label>
                      <br />
                      <br />
                      <p></p>
                      <label htmlFor="">07l</label>
                      <br />
                      <br />
                      <p></p>
                      <label htmlFor="">07r</label>
                      <br />
                      <br />
                      <p></p>
                      <label htmlFor="">24l</label>
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
                  <Link
                   
                    className="btn btn-1 side-button"
                  ></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link to="/ModRte1777" className="btn btn-1 side-button mb-2"></Link>
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
