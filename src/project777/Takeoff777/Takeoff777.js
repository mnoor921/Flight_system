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
                  takeoff ref
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
                    to="/InitPref777"
                    className="btn btn-1 mb-2 side-button"
                  ></Link>
                </div>
                <div className="col-md-10 col-9">
                  <div className="d-flex-1 ">
                    <div className=" ">
                      <p className="">flaps</p>
                      <label htmlFor=""> [][] </label>
                      <p className="">
                        thrust <span className="ml-5">to</span>
                      </p>
                      <label htmlFor=""> ---- </label>
                      <p className="">cg</p>
                      <label htmlFor="">[][]%</label>
                      <p className="">rwy / pos</p>
                      <label htmlFor="">24l/00ft</label>
                    </div>
                    <div className="text-right">
                      <p>v1</p>
                      <label htmlFor="">------</label>
                      <p>vr</p>
                      <label htmlFor="">-------</label>
                      <p>v2</p>
                      <label htmlFor=""> --------</label>
                      <p>
                        <span className="mr-5">gr wt</span> togw
                      </p>
                      <label htmlFor="">
                        {" "}
                        <span className="mr-5">330.6</span>-----.--
                      </label>
                      <p>ref spds</p>
                      <label htmlFor="">
                        off ---{" "}
                        <span className="color_green">
                          on <i className="fa fa-agnle-right ml-1"></i>
                        </span>
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
                        thrust Lim
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
                    to="/ThrustLim777"
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
