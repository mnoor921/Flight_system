import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Project3Footer";
import Beer from "../../assests/buy_bear.jpg";

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
                        // to="/ClimbForest"
                        className="btn btn-1 side-button"
                      ></Link>
                    </div>
                    <div className="col-md-10 col-9 px-0">
                      <div className="bg-dark-main">
                        <div className="numbering d-flex-1">
                          <label htmlFor=""></label>
                          <label htmlFor="">act 161kt clb</label>
                          <label htmlFor="" className="tex">
                            1/3
                          </label>
                        </div>

                        <div className="d-flex-1">
                          <div className="">
                            <p>crz alt </p>
                            <label htmlFor="" className="bg_grey">
                              fl400
                            </label>

                            <p className=""> econ spd </p>
                            <label htmlFor="" className="bg_grey">
                              310/ .854
                            </label>
                            <p className=""> spd trans </p>
                            <label htmlFor="" className="bg_grey">
                              250/fl100
                            </label>
                            <p className=""> spd RESTR </p>
                            <label htmlFor="" className="bg_grey">
                              -----/--------
                            </label>
                          </div>

                          <div className="text-right mr-0 ">
                            <p className=""> AT kkw07 </p>
                            <label htmlFor="">
                              250/ <span className="color_pink">2500a</span>
                            </label>
                            <br />
                            <br />
                            <br />
                            <p className="mt-1"> trans alt </p>
                            <label htmlFor="" className="bg_grey">
                              6000
                            </label>
                            <p className="mt-1"> max angle </p>
                            <label htmlFor="">226</label>
                          </div>
                        </div>

                        <p
                          className="text-center"
                          style={{ marginTop: "-1.9rem" }}
                        >
                          ----------------------------
                        </p>
                        <div className="d-flex-1">
                          <div className="" style={{ marginTop: "-1.5rem" }}>
                            <p className=""> </p>
                            <label htmlFor=""></label>
                          </div>
                          <div className="text-right mr-0">
                            <p className=""> </p>
                            <label htmlFor="">
                              eng out
                              <i className="fa fa-angle-right ml-1"></i>
                            </label>
                          </div>
                        </div>
                        <div className="d-flex-1 mt-1">
                          <div className="">
                            <label htmlFor="">
                              {/* <i className="fa fa-angle-left mr-1"></i>
                              clb forecast */}
                            </label>
                          </div>
                          <div className="text-right mr-0">
                            <label htmlFor="">
                              clb dir<i className="fa fa-angle-right ml-1"></i>
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
                      <Link
                        to="/Vnav1"
                        className="btn btn-1 side-button"
                      ></Link>
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
                      <Link to="/Vnav" className="btn btn-1">
                        prev Page
                      </Link>
                      <Link to="/Vnav12" className="btn btn-1">
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
