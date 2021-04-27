import React from "react";
import Header from "../Header";

import { Container, Row, Col } from "react-bootstrap";

function Ads() {
  return (
    <div>
      <Container className="my-3">
        <Row>
          <Col></Col>
          <Col md="8" style={{ border: "1px solid silver", minHeight: "95vh" }}>
            <Header />
            <h4 className="text-center text-white text-uppercase">Ads</h4>

            <br />

            <form action="">
              <Row>
                <Col>
                  <div className="d-flex mt-2">
                    <input type="radio" />
                    <label htmlFor="" className="ml-3">
                      ads arm
                    </label>
                  </div>
                  <div className="d-flex mt-2">
                    <input type="radio" />
                    <label htmlFor="" className="ml-3">
                      ads emergency
                    </label>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex mt-2">
                    <input type="radio" />
                    <label htmlFor="" className="ml-3">
                      ads off
                    </label>
                  </div>
                  <div className="d-flex mt-2">
                    <input type="radio" />
                    <label htmlFor="" className="ml-3">
                      ads emergency off
                    </label>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <label htmlFor="">time</label>
                </Col>
                <Col>
                  <label htmlFor="">Facility</label>
                </Col>
                <Col>
                  <label htmlFor="">center</label>
                </Col>
                <Col>
                  <label htmlFor="">disconnect</label>
                </Col>
              </Row>

              <br/>
              <br/>
              <br/>

            <div className="ml-3 d-flex">
                <input type="checkbox"/>
                <label htmlFor="" className="ml-3">inhibit:</label>
                <input type="text" placeholder="---------" className="ml-4"/>
            </div>
              
              <hr />
              <br/>
              <br/>
              <br/>
              <div className="header-label mt-3 mb-0 pb-0">

                            <div className="all-buttons-footer">

                                <div className="" style={{justifyContent:'space-between'}}>
                                    {/* <a href="" className="btn btn-1 pb-0 float-left">Send</a> */}
                                    <ul className="d-flex left-button float-right">
                                        <li>
                                            {/* <a href="" className="btn btn-1">Reset</a> */}
                                        </li>
                                        <li>
                                            <a href="" className="btn btn-1">Return</a>
                                        </li>
                                        <li>
                                            <a href="" className="btn btn-1">Exit</a>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>

                        </div>
              
            </form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Ads;
