import React from "react";
// import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function CLb() {
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
              <div className="numbering text-right">
                <label htmlFor="" className="tex">
                  3/4
                </label>
              </div>
              <div className="text-center">
                <label htmlFor="">rta progress</label>
              </div>

              <div className="d-flex-1">
                <div className="">
                  <p>rta wpt </p>
                  <label> -------------- </label>

                  
                </div>

                
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              
              <div className="d-flex-1">
                  <Link to="/Maxangel" className="btn btn-1">limits</Link>
                  <Link to="/rta" className="btn btn-1">rta</Link>
              </div>

              
            </div>
            <Footer />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default CLb;
