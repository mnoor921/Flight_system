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
                <label htmlFor="">Nav Radio</label>
                <label htmlFor="" className="tex"></label>
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
                      <p className="">vor l</p>
                      <label htmlFor="" className="color_green">
                        115.70 P SLI
                      </label>
                      <p className="">
                        CRS <span className="ml-5">radial</span>
                      </p>
                      <label htmlFor=""></label>
                      <br />

                      <p>Adf l</p>

                      <label htmlFor="">----------</label>
                      <p>ils</p>

                      <label htmlFor="">park</label>
                    </div>

                    <div className="text-right">
                      <p className=" "> vor r</p>
                      <label htmlFor="" className="color_green">
                        SLi p 70 . 115
                      </label>
                      <p>crs</p>
                      <label htmlFor="" className="text-left"></label>
                      <br />
                      <p>Adf r</p>
                      <label htmlFor="" className="text-left">
                        ----------
                      </label>
                    </div>
                  </div>

                  <p className="text-center" style={{ marginTop: "-1.3rem" }}>
                    ------------------ preselect ---------------------
                  </p>
                </div>
                <div className="d-flex"></div>
                <div className="col-md-1 col-1 side-btn">
                  <Link className="btn btn-1 side-button"></Link>
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

export default ActLeg1777;
