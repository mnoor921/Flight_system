import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function CRB() {
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
                <label htmlFor="">Econ path des</label>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>e/d alt</p>
                  <label>867</label>

                  <p>tgt / spd </p>
                  <label>.615 / 256</label>

                  <p>spd / rest </p>
                  <label>.240 / 1000</label>
                </div>

                <div className="model-indent text-right">
                  <p>at hasood </p>
                  <label>193 / 3200a</label>

                  
                  <p>to  t/d </p>
                  <label>0531.4z / 117nm</label>

                  <p>wpt / alt </p>
                  <label>Hasdo / 3200</label>
                  
                  <p>fba  v/b    v/s </p>
                  <label>0.0       </label>


                </div>
              </div>
              
             
              <div className="d-flex-1">
                <Link className=""></Link>
                <Link to="/speed" className="btn btn-1">
                  speed
                </Link>
              </div>
              <div className="d-flex-1">
                <Link to="/forecast" className="btn btn-1">forecast</Link>
                <Link to="/rta" className="btn btn-1">
                  des now
                </Link>
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

export default CRB;
