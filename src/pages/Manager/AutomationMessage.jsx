import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Beer from "../../assests/buy_bear.jpg";

import { Container, Row, Col } from "react-bootstrap";

function AutomaticMessage() {
  return (
    <div>
      <Container className="my-3">
        <Row>
          <Col></Col>
          <Col md="8" style={{ border: "1px solid silver", minHeight: "95vh" }}>
            <Header />
            <h4 className="text-center text-white text-uppercase">Automatic Message</h4>

            <br />

            <form action="">
                <div className="ml-5 d-flex mt-4">
                    <input type="checkbox"/>
                    <label htmlFor="" className="ml-3">Automatic message off</label>
                </div>
              
              <br/>
              <br/>
              <br/>

            
              
              <hr />

              <div className="ml-5">
                  <label htmlFor="">*****z Automatic message - on</label>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
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

            <br />
            <div className=" text-center mx-auto">
              <Link
                to="https://www.paypal.com/donate?hosted_button_id=YQTWBX2LGLV4S"
                className=" mx-auto"
              >
                <img
                  src={Beer}
                  width="120"
                  height="50"
                  className="my-2"
                  alt=""
                  style={{ borderRadius: "10px" }}
                />
              </Link>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default AutomaticMessage;
