import React from "react";
import { Link } from "react-router-dom";
import Beer from "../../assests/buy_bear.jpg";
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
                          <label htmlFor="">rnp progress</label>
                          <label htmlFor="" className="tex">
                            4/4
                          </label>
                        </div>
                        <div className="d-flex-1">
                          <div className="">
                            <p> 353&ged;hdg </p>
                            <label htmlFor="" className="color_pink">
                              {" "}
                              (intc){" "}
                            </label>
                            <p> rnp/actual</p>
                            <label htmlFor="">
                              <span className="bg_grey">1.00</span>/0.01nm{" "}
                            </label>
                            <p> xtk error</p>
                            <label htmlFor=""> </label>
                          </div>
                          <div className="text-right mr-0">
                            <p className="mt-4"></p>
                            <label htmlFor="">----/-----</label>
                            <p className="">vert rnp/anp</p>
                            <label htmlFor="">
                              <span className="bg_grey">400</span>/ft
                            </label>
                            <p>vtk error</p>
                          </div>
                        </div>
                        <br />
                        <br />
                        <br />

                        <p className="text-center mt-2">
                          ----------------- Approach ---------------
                        </p>

                        <div
                          className="d-flex-1"
                          style={{ marginTop: "-.8rem" }}
                        >
                          <div className="">
                            <p>rnp</p>
                            <label htmlFor="">0.30nm</label>
                          </div>
                          <div className="text-right mr-0">
                            <p>vert rnp</p>
                            <label htmlFor="">125ft</label>
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

                <div className="project3footer">
                  <div className="d-flex-1 ">
                    <ul>
                      <li>
                        <Link to="/InitRefP3" className="btn btn-1">
                          init ref
                        </Link>
                        <Link to="/RteP3act2" className="btn btn-1">
                          rte
                        </Link>
                        <Link to="/DepArrP3" className="btn btn-1">
                          dep/arr
                        </Link>
                        <Link to="/Altn1" className="btn btn-1">
                          altn
                        </Link>
                        <Link to="/Vnav" className="btn btn-1">
                          vnav
                        </Link>
                      </li>
                    </ul>
                    <div className="">
                      <Link className="btn btn-1">Exec</Link>
                    </div>
                  </div>
                  <div className="d-flex-1 margin-top">
                    <ul>
                      <li>
                        <Link to="/FixInfoP3" className="btn btn-1">
                          fix
                        </Link>
                        <Link to="/Rte1Hold" className="btn btn-1">
                          legs
                        </Link>
                        <Link to="/Rte1Hold1" className="btn btn-1">
                          hold
                        </Link>
                        <Link to="/CommP3" className="btn btn-1">
                          fmc/comm
                        </Link>
                        <Link to="/ProgressP3" className="btn btn-1">
                          prog
                        </Link>
                      </li>
                    </ul>
                    <Link className=""></Link>
                  </div>

                  <div className="d-flex-1 margin-top">
                    <ul>
                      <li>
                        <Link to="/NavRad" className="btn btn-1">
                          nav rad
                        </Link>
                        <Link to="/offsetp3" className="btn btn-1">
                          ofst
                        </Link>
                        <Link to="/ProgressP32" className="btn btn-1">
                          rta
                        </Link>
                      </li>
                    </ul>
                    <div className="">
                      <Link to="/ProgressP32" className="btn btn-1">
                        prev Page
                      </Link>
                      <Link to="/ProgressP3" className="btn btn-1">
                        next Page
                      </Link>
                    </div>
                  </div>
                  <Link to="/" className="btn btn-1 back-btn">
                    back to home
                  </Link>

                  <div className=" text-center mx-auto mt-2">
                    <label htmlFor="">
                      if you find this site helpful, <br /> i won't say no to a
                      beer
                    </label>{" "}
                    <br />
                    <a
                      href="https://www.paypal.com/donate?hosted_button_id=YQTWBX2LGLV4S"
                      className=" mx-auto"
                    >
                      <img
                        src={Beer}
                        width="120"
                        height="50"
                        className="my-1"
                        alt=""
                        style={{ borderRadius: "10px" }}
                      />
                    </a>
                  </div>
                </div>
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
