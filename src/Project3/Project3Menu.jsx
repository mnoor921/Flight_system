import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./Project3Footer";

const Project3Footer = () => {
  return (
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
                    <Link  className="btn btn-1 side-button"></Link>
                    <Link  className="btn btn-1 side-button"></Link>
                    <Link className="btn btn-1 side-button"></Link>
                    <Link
                      
                      className="btn btn-1 side-button"
                    ></Link>
                    <Link
                     
                      className="btn btn-1 side-button"
                    ></Link>
                    <Link  className="btn btn-1 side-button"></Link>
                  </div>
                  <div className="col-md-10 col-9 px-0">
                    <div
                      className="bg-dark-main"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <div className="numbering d-flex-1">
                        <label htmlFor=""></label>
                        <label htmlFor="">init / ref index</label>
                        <label htmlFor="" className="tex">
                          1/1
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1 col-1 side-btn-p3">
                    <Link
                      // to="/navdata"
                      className="btn btn-1 side-button"
                    ></Link>
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
  );
};

export default Project3Footer;
