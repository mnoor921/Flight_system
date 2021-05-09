import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Navstatus() {
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
                <label htmlFor="" className="tex">
                  
                </label>
                <label htmlFor="" className="tex">
                  Nav status
                </label>
                <label htmlFor="" className="tex">
                  1/2
                </label>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>ils l</p>
                  <label htmlFor="">iptnm108.30</label>
                  <p>dme l </p>
                  <label htmlFor="">iptnm 108.30</label>
                  <label htmlFor="">ihew 110.50</label> <br />
                  <label htmlFor="">icxo 108.70</label> <br />
                  <label htmlFor="">iah 116.60</label> <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  
                </div>

                <div className="model-indent text-right ">
                  <p>ils-r</p>
                  <label htmlFor="">iptnm108.30</label>

                  <p>dme-r </p>
                  <label htmlFor="">iptnm 108.30</label>
                  
                  
                  
                </div>
              </div>

              <div className="d-flex" style={{justifyContent:'space-around'}}>
                  <label htmlFor="">gps (2) </label>
                  <label htmlFor="">ils (2) </label>
              </div>
              {/* <hr /> */}

              <div className="d-flex-1">
                <div className="">
                  <Link  className="btn btn-1">
                   
                    Index
                  </Link>
                </div>

                <div className="">
                  <Link to="/Navpos" className="btn btn-1">Pos shift</Link> <br />
                  <Link to="/Navstatus2" className="btn btn-1 mt-2 ">Next</Link>
                </div>
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

export default Navstatus;
