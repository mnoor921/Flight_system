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
                      <Link
                        to="/ProgressP32"
                        className="btn btn-1 side-button"
                      ></Link>
                    </div>
                    <div className="col-md-10 col-9 px-0">
                      <div className="bg-dark-main">
                        <div className="numbering d-flex-1">
                          <label htmlFor=""></label>
                          <label htmlFor="">act econ crz</label>
                          <label htmlFor="" className="tex">
                            2/3
                          </label>
                        </div>
                        <div className="d-flex-1">
                          <div className="">
                            <p>crz alt </p>
                            <label htmlFor="" className="bg_grey color_pink">
                              fl200
                            </label>

                            <p className=""> eo spd </p>
                            <label htmlFor="" className="bg_grey color_pink">
                              .810
                            </label>
                            <p className=""> n1 </p>
                            <label htmlFor="" className="bg_grey color_pink">
                              86.1%
                            </label>

                            <p className=""> step </p>
                            <label htmlFor="" className="bg_grey">
                              1000
                            </label>
                          </div>

                          <div className="text-right mr-0 ">
                            <p className="mt-1">step to </p>
                            <label htmlFor="" className="bg_grey">
                              {" "}
                              fl390{" "}
                            </label>

                            <p className=""> at </p>
                            <label htmlFor="">1300z/ 1512nm</label>
                            <p className=""> eta/fuel w/mod </p>
                            <label htmlFor="">1951z/ 23.6</label>
                            <div
                              className="d-flex-1"
                              style={{ marginTop: "-.7rem" }}
                            >
                              <div className="mr-4">
                                <p>opt</p>
                                <label htmlFor="">fl328</label>
                              </div>
                              <div className="mr-4">
                                <p>max</p>
                                <label htmlFor="">fl329</label>
                              </div>
                              <div className="text-right">
                                <p>recnd</p>
                                <label htmlFor="">fl329</label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p
                          className="text-center"
                          style={{ marginTop: "-1.5rem" }}
                        >
                          ----------------------------
                        </p>
                        <div
                          className="d-flex-1"
                          style={{ marginTop: "-.7rem" }}
                        >
                          <div className="">
                            <p className=""> </p>
                            <label htmlFor=""></label>
                          </div>
                          <div className="text-right mr-0">
                            <p className=""> </p>
                            <label htmlFor="">
                              engout
                              <i className="fa fa-angle-right ml-1"></i>
                            </label>
                          </div>
                        </div>
                        <div className="d-flex-1">
                          <div className="">
                            <label htmlFor="">
                              <i className="fa fa-angle-left mr-1"></i>
                              rta progress
                            </label>
                          </div>
                          <div className="text-right mr-0">
                            <label htmlFor="">
                              lrc<i className="fa fa-angle-right ml-1"></i>
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
                        to="/EngoutP3"
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
                      <Link to="/Vnav2" className="btn btn-1">
                        next Page
                      </Link>
                    </div>
                  </div>
                  <Link to="/" className="btn btn-1">
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
