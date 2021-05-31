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
                      <Link
                        to="/InitRefP3"
                        className="btn btn-1 side-button"
                      ></Link>
                    </div>
                    <div className="col-md-10 col-9 px-0">
                      <div className="bg-dark-main">
                        <div className="numbering d-flex-1">
                          <label htmlFor=""></label>
                          <label htmlFor="">perf init</label>
                          <label htmlFor="" className="tex"></label>
                        </div>
                        <div className="d-flex-1">
                          <div className="">
                            <p> gr wt </p>
                            <label htmlFor="">500.3</label>
                            <p> fuel </p>
                            <label htmlFor="">
                              <span className="bg_grey">125.3</span> lb calc
                            </label>
                            <p>zfw </p>
                            <label htmlFor="">
                              <span className="bg_grey">375.0</span>
                            </label>
                            <p> reserves </p>
                            <label htmlFor="">
                              {" "}
                              <span className="bg_grey">[][][].[]</span>{" "}
                            </label>
                            <p>perf init</p>
                            <label htmlFor="">
                              <i class="fa fa-angle-left mr-2"></i>request
                            </label>
                          </div>

                          <div className="text-right mr-0">
                            <p> crz alt </p>
                            <label htmlFor="">
                              <span className="bg_grey">fl250</span>
                            </label>
                            <p> cost index </p>
                            <label htmlFor="">
                              <span className="bg_grey">30</span>
                            </label>
                            <p> min fuel tem </p>
                            <label htmlFor="">
                              - <span className="bg_grey">37</span> &deg;c
                            </label>
                            <p> crz cg </p>
                            <label htmlFor=""><span className="bg_grey">28.0</span>z</label>

                            <p> step size </p>
                            <label htmlFor=""><span className="bg_grey">2000</span></label>
                          </div>
                        </div>

                        <p
                          className="text-center"
                          style={{ marginTop: "-1.5rem" }}
                        >
                          --------------- <span className="bg_green">fmc preflight complete</span> -------------
                        </p>
                        <div
                          className="d-flex-1"
                          style={{ marginTop: "-1.5rem" }}
                        >
                          <div className="">
                            <label htmlFor="" className="mt-4">
                              <i class="fa fa-angle-left mr-2"></i>index
                            </label>
                          </div>
                          <div className="text-right mr-0">
                            <label htmlFor="" className="mt-4">
                              thrust lim
                              <i className="fa fa-angle-right ml-1"></i>
                            </label>
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
