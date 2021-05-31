import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Project3Footer";

const PosP3 = () => {
  return (
    <div>
      <div>
        <div>
          <Container className="my-3">
            <Row>
              <Col></Col>
              <Col
                md="8"
                className="p-4"
                style={{
                  border: "1px solid silver",
                  minHeight: "95vh",
                  background: "#5B727A",
                }}
              >
                <div className="main-section-p3 p-2">
                  <div className="row">
                    <div className="col-md-1 col-1 side-btn-p3">
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                    </div>
                    <div className="col-md-10 col-9 px-0">
                      <div className="bg-dark-main">
                        <div className="numbering d-flex-1">
                          <label htmlFor=""></label>
                          <label htmlFor="">NAv radio</label>
                          <label htmlFor="" className="tex"></label>
                        </div>
                        <div className="d-flex-1">
                          <div className="">
                            <p> vor l</p>
                            <label htmlFor="" className="bg_grey color_green"> 116.60 a iah </label>
                          </div>

                          <div className="text-right mr-0">
                            <p className="">vor r</p>
                            <label htmlFor="" className="bg_grey color_green"> iaha160.60 </label>
                          </div>
                        </div>
                        <div
                          className="d-flex-1"
                          style={{ marginTop: "-1.5rem" }}
                        >
                          <div className="">
                            <p> crs</p>
                          </div>
                          <div className="">
                            <p> radial </p>
                            <label htmlFor=""> 015 015 </label>
                          </div>

                          <div className="text-right mr-0">
                            <p className="">vor r</p>
                          </div>
                        </div>
                        <br />
                        <div className="d-flex-1 mt-3">
                          <div className="">
                            <p>ils-gls</p>
                            <label htmlFor="" className="bg_grey ">111.10/353</label>
                          </div>
                        </div>

                        <br />
                        <br />
                        <p
                          className="text-center"
                          style={{ marginTop: "-1.5rem" }}
                        >
                          PRESELECT
                        </p>

                        <div
                          className="d-flex-1 mt-2"
                          //   style={{ marginTop: "-2rem" }}
                        >
                          <div className="">
                            <label htmlFor="" className="bg_grey ">--------</label>
                          </div>
                          <div className="text-right mr-0">
                            <label htmlFor="" className="bg_grey ">----------</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-1 col-1 side-btn-p3">
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                      <Link className="btn btn-1 side-button"></Link>
                    </div>
                  </div>
                </div>
                <Footer />
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default PosP3;
