import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function ActLeg1777() {
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
                <label htmlFor="">act rte 1 data</label>
                <label htmlFor="" className="tex">
                  1/6
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
                      <p className="">eta</p>
                      <label htmlFor="">2232z</label>
                      <br />
                      <br />
                      <label htmlFor="">2232z</label>
                      <br />
                      <br />
                      <label htmlFor="">2232z</label>
                      <br />
                      <br />
                      <label htmlFor="">2232z</label>
                      <br />
                      <br />
                      <label htmlFor="">2232z</label>
                    </div>

                    <div className="">
                      <p>wpt</p>
                      <label htmlFor="" className="color_pink">
                        (intc){" "}
                      </label>
                      <br />
                      <br />
                      <label htmlFor="">vectors</label>
                      <br />
                      <br />
                      <label htmlFor="">sli</label>
                      <br />
                      <br />
                      <label htmlFor="">sxc</label>
                      <br />
                      <br />
                      <label htmlFor="">goatz</label>
                    </div>
                    <div className="">
                      <p>fuel</p>
                      <label htmlFor="">145.3</label>
                      <br />
                      <br />
                      <label htmlFor="">145.3</label>
                      <br />
                      <br />
                      <label htmlFor="">143.6</label>
                      <br />
                      <br />
                      <label htmlFor="">142.3</label>
                      <br />
                      <br />
                      <label htmlFor="">141.7</label>
                    </div>

                    <div className="text-right">
                      <p className="text-left">wind</p>
                      <label htmlFor="">
                        <i className="fa fa-angle-right"></i>
                      </label>
                      <br />
                      <br />
                      <label htmlFor="">
                        <i className="fa fa-angle-right"></i>
                      </label>
                      <br />
                      <br />
                      <label htmlFor="">
                        <i className="fa fa-angle-right"></i>
                      </label>
                      <br />
                      <br />
                      <label htmlFor="">
                        <i className="fa fa-angle-right"></i>
                      </label>
                      <br />
                      <br />
                      <label htmlFor="">
                        <i className="fa fa-angle-right"></i>
                      </label>
                    </div>
                  </div>

                  <p className="text-center" style={{ marginTop: "-1.3rem" }}>
                    --------------------------------------- wind data
                  </p>
                  <div className="d-flex-1">
                    <div className="">
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        legs
                      </label>
                    </div>
                    <div className="text-right">
                      <label htmlFor="">
                        load
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
                    to="/Rte1Data777"
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

export default ActLeg1777;
