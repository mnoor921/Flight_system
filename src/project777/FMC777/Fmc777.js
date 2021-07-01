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
                <label htmlFor="">fmc comm </label>
                <label htmlFor="" className="tex"></label>
              </div>

              <div className="row">
                <div className="col-md-1 col-1 side-btn">
                  <Link to="/Rte1777" className="btn btn-1 side-button"></Link>
                  <Link to="/Altn1777" className="btn btn-1 side-button"></Link>
                  <Link
                    to="/PrefInit777"
                    className="btn btn-1 side-button"
                  ></Link>
                  <Link
                    to="/ModRte1777"
                    className="btn btn-1 side-button"
                  ></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link
                    to="/DesForecast777"
                    className="btn btn-1 mb-2 side-button"
                  ></Link>
                </div>
                <div className="col-md-10 col-9">
                  <div className="d-flex-1 ">
                    <div className=" ">
                      <br />
                      <p className=""></p>
                      <label htmlFor="">
                        {" "}
                        <i className="fa fa-angle-left mr-1"></i>rte 1{" "}
                      </label>
                      <br />
                      <br />
                      <p></p>
                      <label htmlFor="">
                        {" "}
                        <i className="fa fa-angle-left mr-1"></i>ALTn{" "}
                      </label>
                      <br />
                      <br />
                      <p></p>
                      <label htmlFor="">
                        {" "}
                        <i className="fa fa-angle-left mr-1"></i>perf{" "}
                      </label>
                      <br />
                      <br />
                      <br />
                      <br />
                      <p></p>
                      <label htmlFor="">
                        {" "}
                        <i className="fa fa-angle-left mr-1"></i>wind{" "}
                      </label>
                      <br />
                      <br />
                      <p></p>
                      <label htmlFor="">
                        {" "}
                        <i className="fa fa-angle-left mr-1"></i>des forecast{" "}
                      </label>
                      <br />
                      <br />
                      <p></p>
                    </div>

                    <div className="text-right">
                      <br />
                      <p className=""></p>
                      <label htmlFor="">
                        {" "}
                        pos report
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />

                      <p className=""></p>
                      <label htmlFor="">
                        {" "}
                        ready
                        <i className="fa fa-angle-right ml-1"></i>{" "}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex"></div>
                <div className="col-md-1 col-1 side-btn">
                  <Link
                    to="/PosReport777"
                    className="btn btn-1 side-button"
                  ></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
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
