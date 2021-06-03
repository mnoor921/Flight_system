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
                        // to="/desForcast"
                        className="btn btn-1 side-button"
                      ></Link>
                    </div>
                    <div className="col-md-10 col-9 px-0">
                      <div className="bg-dark-main">
                        <div className="numbering d-flex-1">
                          <label htmlFor=""></label>
                          <label htmlFor="">act rte 1 legs</label>
                          <label htmlFor="" className="tex">
                            5/11
                          </label>
                        </div>
                        <div className="d-flex-1">
                          <div className="">
                            <p> 082&deg; </p>
                            <label htmlFor="" className="bg_grey">Allex</label>
                            <p> 071&deg; </p>
                            <label htmlFor="" className="bg_grey">allry</label>
                            <p> 088&deg; </p>
                            <label htmlFor="" className="bg_grey">n51w050</label>
                            <p> 097&deg; </p>
                            <label htmlFor="" className="bg_grey">n52w040</label>
                            <p> 095&deg; </p>
                            <label htmlFor="" className="bg_grey">n53w030</label>
                          </div>

                          <div className=" mr-0">
                            <p className="">313nm</p>
                            <label htmlFor="" className="bg_grey">843/fl399</label>
                            <p className="">710nm</p>
                            <label htmlFor="" className="bg_grey">844/fl390</label>
                            <p className="">82nm</p>
                            <label htmlFor="" className="bg_grey">844/fl390</label>
                            <p className="">379nm</p>
                            <label htmlFor="" className="bg_grey">843/fl390</label>
                            <p className="">371nm</p>
                            <label htmlFor="" className="bg_grey">842/fl410</label>
                          </div>
                        </div>
                        <p
                          className="text-center"
                          style={{ marginTop: "-1.8rem" }}
                        >
                          ----------------------------
                        </p>

                        <div
                          className="d-flex-1 "
                          //   style={{ marginTop: "-2rem" }}
                        >
                          <div className="">
                            <label htmlFor="" >
                              <i className="fa fa-angle-left mr-1"></i>
                              rte 2 legs
                            </label>
                          </div>
                          <div className="text-right mr-0">
                            <label htmlFor="">
                              rte data<i className="fa fa-angle-right ml-1"></i>
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
