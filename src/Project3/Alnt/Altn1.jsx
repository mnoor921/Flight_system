import React from "react";
import { Link } from "react-router-dom";
import Beer from "../../assests/buy_bear.jpg";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Project3Footer";

const Altn1 = () => {
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
                <div className="numbering d-flex-1">
                  <label htmlFor=""></label>
                  <label htmlFor="">altn</label>
                  <label htmlFor="" className="tex">
                    1/2
                  </label>
                </div>
                <div className="numbering d-flex-1">
                  <label htmlFor=""></label>
                  <label htmlFor="">eta</label>
                  <label htmlFor="" className="tex">
                    fuel
                  </label>
                </div>

                <div className="row">
                  <div className="col-md-1 col-1 side-btn-p3">
                    <Link to="/indent" className="btn btn-1 side-button"></Link>
                    <Link to="/pos" className="btn btn-1 side-button"></Link>
                    <Link to="/perf" className="btn btn-1 side-button"></Link>
                    <Link
                      to="/Takeoffpp"
                      className="btn btn-1 side-button"
                    ></Link>
                    <Link
                      to="/Approach"
                      className="btn btn-1 side-button"
                    ></Link>
                    <Link to="/Offset" className="btn btn-1 side-button"></Link>
                  </div>
                  <div className="col-md-10 col-9 px-0">
                    <div className="bg-dark-main">
                      <div className="d-flex-1">
                        <div className="">
                          <p> </p>
                          <label htmlFor="" className="mt-4">
                            <i class="fa fa-angle-left mr-2"></i>egkk
                          </label>
                        </div>

                        <div className="text-right mr-0">
                          <label htmlFor="" className="mt-4">
                            <i class="fa fa-angle-right ml-2"></i>
                          </label>
                        </div>
                      </div>
                      <div className="d-flex-1">
                        <label htmlFor="" className="mt-1">
                          <i class="fa fa-angle-left mr-2"></i>egll
                        </label>
                        <div className="text-right mr-0">
                          <label htmlFor="" className="mt-1">
                            <i class="fa fa-angle-right ml-2"></i>
                          </label>
                        </div>
                      </div>
                      <div className="d-flex-1">
                        <label htmlFor="" className="mt-1">
                          <i class="fa fa-angle-left mr-2"></i>eglf
                        </label>
                        <div className="text-right mr-0">
                          <label htmlFor="" className="mt-1">
                            <i class="fa fa-angle-right ml-2"></i>
                          </label>
                        </div>
                      </div>
                      <div className="d-flex-1">
                        <label htmlFor="" className="mt-1">
                          <i class="fa fa-angle-left mr-2"></i>egvo
                        </label>
                        <div className="text-right mr-0">
                          <label htmlFor="" className="mt-1">
                            <i class="fa fa-angle-right ml-2"></i>
                          </label>
                        </div>
                      </div>
                      <div className="d-flex-1" style={{marginTop:'-1.4rem'}}>
                        <div className="">
                          <p>Altn</p>
                          <label htmlFor="" className="mt-1">
                            <i class="fa fa-angle-left mr-2"></i>request
                          </label>
                        </div>
                        <div className="text-right mr-0">
                          <p>altn inhibit</p>
                          <label htmlFor="" className="mt-1">
                            --------/-------
                          </label>
                        </div>
                      </div>
                      <div className="d-flex-1" style={{marginTop:'-1.4rem'}}>
                        <div className="">
                          <p>wxr </p>
                          <label htmlFor="" className="mt-1">
                            <i class="fa fa-angle-left mr-2"></i> request
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1 col-1 side-btn-p3">
                    <Link
                      to="/navdata"
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
            <Link to="/Altn2" className="btn btn-1">next Page</Link>
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
  
  );
};

export default Altn1;
