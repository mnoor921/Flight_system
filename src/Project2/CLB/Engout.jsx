import React from "react";
import Header from "../Header1";
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
                  1/1
                </label>
              </div>
              <div className="text-center">
                <label htmlFor="">eng out clb</label>
              </div>

              <div className="d-flex-1">
                <div className="">
                  <p>crz alt</p>
                  <label>fl220</label>

                  <p>eng out speed</p>
                  <label>222kt</label>

                  <p>con n1</p>
                  <label>99.5%</label>
                  <br /> 
                  <p> -------- </p>
                </div>

                <div className="model-indent text-right">
                  <p>max alt</p>
                  <label>fl259</label>

                  <p>to t/d</p>
                  <label> .z /   nm</label>

                  <p> -------- </p>
                </div>
              </div>
              
              <div className="d-flex-1">
                  <Link  className="btn btn-1">rt eng out</Link>
                  <Link  className="btn btn-1">lt eng out</Link>
              </div>
              <div className="d-flex-1">
                  <Link to="/Maxangel" className="btn btn-1">max angle</Link>
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
