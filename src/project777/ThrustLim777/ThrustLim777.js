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
                  thrust Lim
                </label>
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
                      <p className="">sel</p>
                      <label htmlFor=""> --------- </label>
                      <br />
                      <br />
                      <label htmlFor="">
                        {" "}
                        <i className="fa fa-angle-left mr-1"></i> to{" "}
                      </label>
                    </div>
                    <div className="">
                      <p>oat</p>
                      <label htmlFor="">15&deg; c</label>
                      <br />
                      <br />
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>sel
                        <i className="fa fa-angle-right mx-1"></i>
                        <i className="fa fa-angle-left mx-1"></i>arm
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>
                    </div>
                    <div className="text-right">
                      <p>to n1</p>
                      <label htmlFor=""> 100.6 </label>
                      <br />
                      <br />
                      <label htmlFor="">
                        {" "}
                        clb <i className="fa fa-angle-right ml-1"></i>{" "}
                      </label>
                      <br />
                      <br />
                      <label htmlFor="">
                        {" "}
                        clb 1 <i className="fa fa-angle-right ml-1"></i>{" "}
                      </label>
                      <br />
                      <br />
                      <label htmlFor="">
                        {" "}
                        clb 2<i className="fa fa-angle-right ml-1"></i>{" "}
                      </label>
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
                        index
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
