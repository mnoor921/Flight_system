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
                <label htmlFor="">act econ clb</label>
              </div>

              <div className="d-flex-1">
                <div className="">
                  <p>crz alt</p>
                  <label>fl220</label>

                  <p>tgt / sro</p>
                  <label>289 / .616</label>

                  <p>spd / rest</p>
                  <label>250 / 10000</label>
                  <br /> 
                  <p> -------- </p>
                </div>

                <div className="model-indent text-right">
                  <p>to fl220</p>
                  <label>0408.5z/ 37nm</label>

                  <p>clb n1</p>
                  <label> 92.4/ 92.4% </label>

                  <p> -------- </p>
                </div>
              </div>
              <div className="d-flex-1">
                  <Link to="/maxrate" className="btn btn-1">max rate</Link>
                  <Link to="/Engout" className="btn btn-1">eng out</Link>
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
