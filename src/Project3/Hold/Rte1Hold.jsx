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
                        to="/desForcast"
                        className="btn btn-1 side-button"
                      ></Link>
                    </div>
                    <div className="col-md-10 col-9 px-0">
                      <div className="bg-dark-main">
                        <div className="numbering d-flex-1">
                          <label htmlFor=""></label>
                          <label htmlFor="">act rte 1 legs</label>
                          <label htmlFor="" className="tex">
                            1/2
                          </label>
                        </div>
                        <div className="d-flex-1">
                          <div className="">
                            <p> 353&deg; hdg</p>
                            <label htmlFor="" className="color_pink">(intc)</label>
                            <p> 059&deg; </p>
                            <label htmlFor="" className="bg_grey">nuggs</label>
                            <p> 080&deg; </p>
                            <label htmlFor="" className="bg_grey">hidef</label>
                            <p> 077&deg; </p>
                            <label htmlFor="" className="bg_grey">shobo</label>
                            <p> 074&deg; </p>
                            <label htmlFor="" className="bg_grey">luptn</label>
                          </div>

                          <div className=" mr-0">
                            <p className="mt-4"></p>
                            <label htmlFor="" className="bg_grey">----------/----</label>
                            <p className="">4nm</p>
                            <label htmlFor="" className="bg_grey">----------/----</label>
                            <p className="">10nm</p>
                            <label htmlFor="" className="bg_grey">----------/----</label>
                            <p className="">12nm</p>
                            <label htmlFor="" className="bg_grey">----------/----</label>
                            <p className="">11nm</p>
                            <label htmlFor="" className="bg_grey">----------/----</label>
                          </div>
                        </div>
                        <p
                          className="text-center"
                          style={{ marginTop: "-1.5rem" }}
                        >
                          --------------hold at--------------
                        </p>

                        <div
                          className="d-flex-1 "
                          //   style={{ marginTop: "-2rem" }}
                        >
                          <div className="">
                            <label htmlFor="" className="bg_grey">[][][][]</label>
                          </div>
                          <div className="text-right mr-0">
                            <label htmlFor="">
                              ppos<i className="fa fa-angle-right ml-1"></i>
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
