import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function DispatchRelease2() {
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
              departure release{" "}
            </h4>

            <hr />

            <div className="m-5">
              <Form>
                <div className="dispatch_release">
                  <div className="d-flex">
                  <label htmlFor="">FLT number:</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      style={{width:'40px'}}
                    />
                  </div>
                  <div className="d-flex">
                  <label htmlFor="">FLT date:</label>
                    <input
                      type="date"
                      placeholder="XXXXX"
                      
                    />
                  </div>

                  <div className="d-flex">
                  <label htmlFor="">Release NBr:</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      style={{width:'40px'}}
                    />
                  </div>

                  <div className="d-flex">
                  <label htmlFor="">Aircraft NBr:</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      style={{width:'70px'}}
                    />
                  </div>

                  <div className="d-flex">
                  <label htmlFor="">dept / desp :</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      style={{width:'50px'}}
                    /> / 
                    <input
                      type="text"
                      placeholder="XXXXX"
                      style={{width:'50px'}}
                    />
                  </div>

                  <div className="d-flex">
                  <label htmlFor="">Flight Rules :</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      style={{width:'50px'}}
                    />
                  </div>

                  <div className="d-flex">
                  <label htmlFor="">ALTN1 / Altn2 :</label>
                    <input
                      type="text"
                      placeholder="XX"
                      style={{width:'40px'}}
                    /> /
                    <input
                      type="text"
                      placeholder="XX"
                      style={{width:'40px'}}
                    /> 
                  </div>
                  <div className="d-flex">
                  <label htmlFor="">Fuel (LBS):</label>
                    <input
                      type="text"
                      placeholder="XX"
                      style={{width:'50px'}}
                    /> /
                    <input
                      type="text"
                      placeholder="XX"
                      style={{width:'50px'}}
                    /> 

                  </div>
                  <div className="d-flex">
                  <label htmlFor="">ATOG</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      style={{width:'70px'}}
                    />
                  </div>
                  <div className="d-flex">
                  <label htmlFor="">capt fuel:</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      style={{width:'70px'}}
                    />
                  </div>
                  <div className="d-flex">
                  <label htmlFor="">Dispatcher Name:</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      style={{width:'200px'}}
                      
                    />
                  </div>
                  <div className="d-flex">
                  <label htmlFor="">Caption Name:</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      style={{width:'200px'}}
                                          />
                  </div>
                  <div className="d-flex">
                  <label htmlFor="">Capt emp number:</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      style={{width:'200px'}}
                    />
                  </div>

                  <div className="d-flex">
                  <label htmlFor="">Capt crew base:</label>
                    <input
                      type="text"
                      placeholder="XXXXX"
                      style={{width:'70px'}}
                    />
                  </div>

                  <div className="d-flex">

                  </div>

                </div>

               <div className="text-center mt-5">
                  <h4>CAPT APPROACH MINS</h4>

                  <Form.Check type="radio" id={`default-`} label={`full qual `} />
                  <Form.Check type="radio" className="mt-3" id={`default-`} label={`high mins `} />

                  <br />

                  <p>Select Send to accept displayed data</p>
                </div>
              </Form>
            </div>

            <Footer />
            <div className="bg-dark w-100" style={{ height: "40px" }}></div>
          </Col>

          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default DispatchRelease2;
