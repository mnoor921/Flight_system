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
                <label htmlFor="">indent </label>
                <label htmlFor="" className="tex"></label>
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
                      <p>model</p>
                      <label htmlFor="">777.200.2</label>
                      <p>nav data</p>
                      <label htmlFor="">airac-1510</label>
                    </div>

                    <div className="text-right">
                      <p>eng rating</p>
                      <label htmlFor="">ge90-110b1l2</label>
                      <p>active</p>
                      <label htmlFor="">sep17oct14/15</label>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <p className="mt-3">drag/ff</p>
                      <label htmlFor="">+0.0/+0.0</label>
                    </div>
                  </div>
                  <p className="text-center" style={{ marginTop: "-1.7rem" }}>
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
                        pos init
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
                    to="/PosInit777"
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
