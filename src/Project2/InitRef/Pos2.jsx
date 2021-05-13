import React from "react";
import Header from "../Header1";
import Beer from "../../assests/buy_bear.jpg";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";
import { post } from "jquery";

function POS2() {
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
                <label htmlFor="">pos shift</label>
                <label htmlFor="" className="tex">
                  3/3
                </label>
              </div>
              <div className="text-center"></div>

              <div className="row">
                <div className="col-md-1 side-btn">
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link to="/init" className="btn btn-1 side-button"></Link>
                </div>
                <div className="col-md-10 pos-1">
                  <div className="d-flex-1">
                    <div className="model-indent">
                      <p>fms-l</p>
                      <label>
                        <i className="fa fa-angle-left mr-1"></i>
                        300&deg;/0.0
                      </label>
                    </div>
                    <div className="model-indent text-right">
                      <p>fmc-r</p>
                      <label>
                        100&deg;/0.0
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>
                    </div>
                  </div>

                  <div className="d-flex-1" style={{ marginTop: "-1.5rem" }}>
                    <div className="model-indent">
                      <p>gps-l</p>
                      <label>
                        <i className="fa fa-angle-left mr-1"></i>
                        110&deg;/0.2
                      </label>
                    </div>
                    <p>gps(2)</p>
                    <div className="model-indent text-right">
                      <p>gps-r</p>
                      <label>
                        200&deg;/0.1
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>
                    </div>
                  </div>
                  <div className="d-flex-1" style={{ marginTop: "-1.5rem" }}>
                    <div className="model-indent">
                      <p>irs-l</p>
                      <label>
                        <i className="fa fa-angle-left mr-1"></i>
                        120&deg;/0.6
                      </label>
                      <p>rnp/actual</p>
                      <label>1.00/0.05nm</label>
                      <br />
                      <br />
                      <br />
                      <br />
                      {/* <br /> */}
                      <label htmlFor="" className="mt-2">
                        <i className="fa fa-angle-left mr-1"></i>
                        index
                      </label>
                    </div>
                    <p>irs (2) </p>
                    <div className="model-indent text-right">
                      <p>isr-r</p>
                      <label>
                        250&deg;/0.4
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>
                      <p>radio</p>
                      <label>
                        250 /0.0 <i className="fa fa-angle-right ml-1"></i>
                      </label>
                      <br />
                      <br />
                      {/* <br /> */}
                      <label>
                        nav status <i className="fa fa-angle-right ml-1"></i>
                      </label>
                      <br />
                    </div>
                  </div>
                  <div className="d-flex-1">
                    <div className="model-indent"></div>

                    <div className="model-indent text-right"></div>
                  </div>
                </div>
                <div className="col-md-1 side-btn">
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link
                    to="/Navstatus"
                    className="btn btn-1 side-button"
                  ></Link>
                  <Link className="btn btn-1 side-button"></Link>
                </div>
              </div>
            </div>

            <div className="row mt-3 footer_all_btn p-2">
              <div className="col-md-4 col-4 ">
                <div className="row">
                  <div className="col-md-6 col-6 mt-1 ">
                    <Link to="/init" className="btn btn-1 w-100">
                      Init ref
                    </Link>
                  </div>
                  <div className="col-md-6 col-6  mt-1 ">
                    <Link to="/Rte1" className="btn btn-1 w-100">
                      rte
                    </Link>
                  </div>
                  <div className="col-md-6 col-6  mt-1 ">
                    <Link to="/ProjectMenu" className="btn btn-1 w-100">
                      menu
                    </Link>
                  </div>
                  <div className="col-md-6 col-6 mt-1  ">
                    <Link to="/legs" className="btn btn-1 w-100">
                      Legs
                    </Link>
                  </div>
                  <div className="col-md-6 col-6  mt-1 ">
                    <Link to="/Limits" className="btn btn-1 w-100">
                      n1 limit
                    </Link>
                  </div>
                  <div className="col-md-6 col-6 mt-1  ">
                    <Link to="/FixInfo" className="btn btn-1 w-100">
                      fix
                    </Link>
                  </div>
                  <div className="col-md-6 col-6  mt-1 ">
                    <Link to="/pos1" className="btn btn-1 w-100">
                      Prev page
                    </Link>
                  </div>
                  <div className="col-md-6 col-6 mt-1  ">
                    <Link to="/pos2" className="btn btn-1 w-100">
                      Next page
                    </Link>
                  </div>
                  <div className="col-md-12 col-12 mt-1  ">
                    <Link to="/" className="btn btn-1 w-100">
                      Back to home
                    </Link>
                  </div>
                </div>

                <div className="row number-button mt-2">
                  <div className="col-md-4 col-4 mt-3 text-center">
                    <Link className="btn btn-1">1</Link>
                  </div>
                  <div className="col-md-4 col-4 mt-3 text-center">
                    <Link className="btn btn-1">2</Link>
                  </div>
                  <div className="col-md-4 col-4 mt-3 text-center">
                    <Link className="btn btn-1">3</Link>
                  </div>
                  <div className="col-md-4 col-4 mt-3 text-center">
                    <Link className="btn btn-1">4</Link>
                  </div>
                  <div className="col-md-4 col-4 mt-3 text-center">
                    <Link className="btn btn-1">5</Link>
                  </div>
                  <div className="col-md-4 col-4 mt-3 text-center">
                    <Link className="btn btn-1">6</Link>
                  </div>
                  <div className="col-md-4 col-4 mt-3 text-center">
                    <Link className="btn btn-1">7</Link>
                  </div>
                  <div className="col-md-4 col-4 mt-3 text-center">
                    <Link className="btn btn-1">8</Link>
                  </div>
                  <div className="col-md-4 col-4 mt-3 text-center">
                    <Link className="btn btn-1">9</Link>
                  </div>
                  <div className="col-md-4 col-4 mt-3 text-center">
                    <Link className="btn btn-1">.</Link>
                  </div>
                  <div className="col-md-4 col-4 mt-3 text-center">
                    <Link className="btn btn-1">0</Link>
                  </div>
                  <div className="col-md-4 col-4 mt-3 text-center">
                    <Link className="btn btn-1">+</Link>
                  </div>
                </div>
              </div>

              <div className="col-md-8 col-8  ">
                <div className="row">
                  <div className="col-md-3 col-3 mt-1">
                    <Link to="/CLb" className="btn btn-1 w-100">
                      clb
                    </Link>
                  </div>
                  <div className="col-md-3 col-3 mt-1">
                    <Link to="/Crz" className="btn btn-1 w-100">
                      crz
                    </Link>
                  </div>
                  <div className="col-md-3 col-3 mt-1">
                    <Link to="/path" className="btn btn-1 w-100">
                      des
                    </Link>
                  </div>
                  <div className="col-md-3 col-3 mt-1"></div>
                </div>

                <div className="row ">
                  <div className="col-md-3 col-3 mt-1">
                    <Link to="/DepArr" className="btn btn-1 w-100">
                      Dep/arr
                    </Link>
                  </div>
                  <div className="col-md-3 col-3 mt-1">
                    <li>
                      <Link to="/Hold" className="btn btn-1 w-100">
                        hold
                      </Link>
                    </li>
                  </div>
                  <div className="col-md-3 col-3 mt-1">
                    <Link to="/Progress" className="btn btn-1 w-100">
                      proc
                    </Link>
                  </div>
                  <div className="col-md-3 col-3 mt-1">
                    <Link className="btn btn-1 w-100">exec</Link>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="row alphabets-button mt-2">
                    <div className="col-md-1 col-1"></div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">a</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">b</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">c</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">d</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">e</Link>
                    </div>
                    <div className="col-md-1 col-1 text-center"></div>
                  </div>

                  <div className="row alphabets-button mt-2">
                    <div className="col-md-1 col-1"></div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">f</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">g</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">h</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">i</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">j</Link>
                    </div>
                    <div className="col-md-1 col-1 text-center"></div>
                  </div>

                  <div className="row alphabets-button mt-2">
                    <div className="col-md-1 col-1"></div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">k</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">l</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">m</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">n</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">o</Link>
                    </div>
                    <div className="col-md-1 col-1 text-center"></div>
                  </div>

                  <div className="row alphabets-button mt-2">
                    <div className="col-md-1 col-1"></div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">p</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">q</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">r</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">s</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">t</Link>
                    </div>
                    <div className="col-md-1 col-1 text-center"></div>
                  </div>

                  <div className="row alphabets-button mt-2">
                    <div className="col-md-1 col-1"></div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">u</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">v</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">w</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">x</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">y</Link>
                    </div>
                    <div className="col-md-1 col-1 text-center"></div>
                  </div>

                  <div className="row alphabets-button mt-2">
                    <div className="col-md-1 col-1"></div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">z</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">sp</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">dl</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">/</Link>
                    </div>
                    <div className="col-md-2 col-2 text-center">
                      <Link className="btn btn-1">clr</Link>
                    </div>
                    <div className="col-md-1 col-1 text-center"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" text-center mx-auto mt-2">
              <label htmlFor="">
                if you find this site helpful, <br /> i won't say no to a beer
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
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default POS2;