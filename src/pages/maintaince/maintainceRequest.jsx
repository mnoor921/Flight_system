import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function MaintainceRequest() {
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
            <Header />

            <h4 className="text-center text-white text-uppercase">
              MAINTENANCE REQUESTS
            </h4>

            <hr />

            <div className="m-2">
              <form action="">
                <div className="d-flex mt-3">
                  <input type="checkbox" name="muhRadio" value="" />
                  <label
                    htmlFor=""
                    style={{ marginLeft: "20px", marginTop: "-5px" }}
                  >
                    RELEASE VERIFY (Dispatch / mx)
                  </label>
                </div>
                <div className="d-flex mt-3">
                  <input type="checkbox" name="muhRadio" value="" />
                  <label
                    htmlFor=""
                    style={{ marginLeft: "20px", marginTop: "-5px" }}
                  >
                    MAINTENANCE RELEASE (mrd)
                  </label>
                </div>
                <div className="d-flex mt-3">
                  <input type="checkbox" name="muhRadio" value="" />
                  <label
                    htmlFor=""
                    style={{ marginLeft: "20px", marginTop: "-5px" }}
                  >
                    Minimum requirments request
                  </label>
                </div>
                <div className="d-flex w-100 mt-2">
                  <label
                    htmlFor=""
                    className="text-right mr-3"
                    style={{ width: "40%" }}
                  >
                    mel ref number:
                  </label>
                  <input
                    type="text"
                    className="mr-2"
                    placeholder="-----------"
                    style={{ width: "100px" }}
                  />
                </div>
                <div className="d-flex mt-3">
                  <input type="checkbox" name="muhRadio" value="" />
                  <label
                    htmlFor=""
                    style={{ marginLeft: "20px", marginTop: "-5px" }}
                  >
                    differed inbond logic
                  </label>
                </div>
                <div className="d-flex mt-3">
                  <input type="checkbox" name="muhRadio" value="" />
                  <label
                    htmlFor=""
                    style={{ marginLeft: "20px", marginTop: "-5px" }}
                  >
                    maintaince logic history
                  </label>
                </div>


                <div className="d-flex" style={{justifyContent:'space-between'}}>
                <div className="d-flex  mt-2">
                  <label
                    htmlFor=""
                    className="text-right mr-3"
                    style={{ width: "40%" }}
                  >
                    flt #:
                  </label>
                  <input
                    type="text"
                    className="mr-2"
                    placeholder="-----------"
                    style={{ width: "100px" }}
                  />
                </div>
                <div className="d-flex  mt-2">
                  <label
                    htmlFor=""
                    className="text-right mr-3"
                    style={{ width: "40%" }}
                  >
                    date:
                  </label>
                  <input
                    type="text"
                    className="mr-2"
                    placeholder="-----------"
                    style={{ width: "100px" }}
                  />
                </div>
                
                </div>



              </form>
            </div>

            <br />
            

            <Footer />
            <div className="bg-dark w-100" style={{ height: "40px" }}></div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default MaintainceRequest;
