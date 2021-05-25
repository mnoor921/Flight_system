import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Beer from "../../assests/buy_bear.jpg";
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
                  <div className="numbering d-flex-1">
                    <label htmlFor=""></label>
                    <label htmlFor="">takeoff ref</label>
                    <label htmlFor="" className="tex">
                      1/2
                    </label>
                  </div>

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
                        <div className="d-flex-1">
                          <div className="">
                            <p> flaps </p>
                            <label htmlFor="">5</label>
                            <p> thrust </p>
                            <label htmlFor="">48&deg;c d-to</label>
                            <p>cg trim </p>
                            <label htmlFor="">21%  5.50</label>
                            <p> rwy/pos </p>
                            <label htmlFor=""> 34r/----</label>
                            <p>takeoff data</p>
                            <label htmlFor="">
                              <i class="fa fa-angle-left mr-2"></i>request
                            </label>
                          </div>

                          <div className="text-right mr-0">
                            <p> v1 </p>
                            <label htmlFor="">154</label>
                            <p> vr </p>
                            <label htmlFor="">158</label>
                            <p> v2 </p>
                            <label htmlFor="">161</label>
                            <p> <span className="mr-2">gr wt</span> togw </p>
                            <label htmlFor=""><span className="mr-4">500.3</span>425.0</label>

                           
                          </div>
                        </div>

                        <p
                          className="text-center"
                          style={{ marginTop: "-1.5rem" }}
                        >
                          ---------------fmc preflight complete-------------
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

               
      <div className="project3footer">
        <div className="d-flex-1 m-0 p-0">
          <ul>
            <li>
              <Link to="/InitRefP3" className="btn btn-1">
                init ref
              </Link>
              <Link to="/RteP3act" className="btn btn-1">
                rte
              </Link>
              <Link to="/DepArrP3" className="btn btn-1">
                dep/arr
              </Link>
              <Link to="" className="btn btn-1">
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
        <div className="d-flex-1 m-0 p-0">
          <ul>
            <li>
              <Link to="/FixInfoP3" className="btn btn-1">
                fix
              </Link>
              <Link to="" className="btn btn-1">
                legs
              </Link>
              <Link to="/Rte1Hold1" className="btn btn-1">
                hold
              </Link>
              <Link to="/CommP3" className="btn btn-1">
                fmc comm
              </Link>
              <Link to="/ProgressP3" className="btn btn-1">
                prog
              </Link>
            </li>
          </ul>
          <Link className=""></Link>
        </div>

        <div className="d-flex-1 m-0 p-0">
          <ul>
            <li>
              <Link to="/NavRad" className="btn btn-1">
                nav rad
              </Link>
              <Link  className="btn btn-1">
                ofst
              </Link>
              <Link  className="btn btn-1">
                rta
              </Link>
              <Link to="/" className="btn btn-1">
                back to home
              </Link>
            </li>
          </ul>
          <div className="">
            <Link className="btn btn-1">prev Page</Link>
            <Link to="/TakeOffP31" className="btn btn-1">next Page</Link>
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
