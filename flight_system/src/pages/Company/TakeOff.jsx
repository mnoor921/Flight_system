import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function TakeOff() {
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
              Takeoff data Request
            </h4>

            <hr />

            <Row>
              <Col md={6} xs={12}>
                <div className="take-off-data">
                  <div className="intail-text">
                    <div className="labels d-flex mt-2">
                      <div className="label-heading-1 ">
                        <h4>Runway:</h4>
                      </div>
                      <div className="label-heading ">
                        <input
                          type="text"
                          placeholder="XXXXXX"
                          style={{ width: "50px" }}
                        />
                      </div>
                    </div>

                    <div className="labels d-flex mt-2">
                      <div className="label-heading-1 ">
                        <h4>Intersection:</h4>
                      </div>
                      <div className="label-heading ">
                        <input
                          type="text"
                          placeholder="XXXXXX"
                          style={{ width: "50px" }}
                        />
                      </div>
                    </div>

                    <div className="labels d-flex mt-2">
                      <div className="label-heading-1 ">
                        <h4>TOGW:</h4>
                      </div>
                      <div className="label-heading ">
                        <input
                          type="text"
                          placeholder="XXXXXX"
                          style={{ width: "60px" }}
                        />
                      </div>
                    </div>

                    <div className="labels d-flex mt-2">
                      <div className="label-heading-1 ">
                        <h4>Flaps:</h4>
                      </div>
                      <div className="label-heading ">
                        <input
                          type="text"
                          placeholder="XXXXXX"
                          style={{ width: "50px" }}
                        />
                      </div>
                    </div>

                    <div className="labels d-flex mt-2">
                      <div className="label-heading-1 ">
                        <h4>Temprature (c):</h4>
                      </div>
                      <div className="label-heading ">
                        <input
                          type="text"
                          placeholder="XXXXXX"
                          style={{ width: "60px" }}
                        />
                      </div>
                    </div>

                    <div className="labels d-flex mt-2">
                      <div className="label-heading-1 ">
                        <h4>Alitmeter (in):</h4>
                      </div>
                      <div className="label-heading ">
                        <input
                          type="text"
                          placeholder="XXXXXX"
                          style={{ width: "45px" }}
                        />
                      </div>
                    </div>

                    <div className="labels d-flex mt-2">
                      <div className="label-heading-1 ">
                        <h4>Wid Dir:</h4>
                      </div>
                      <div className="label-heading ">
                        <input
                          type="text"
                          placeholder="XXXXXX"
                          style={{ width: "50px" }}
                        />
                      </div>
                    </div>

                    <div className="labels d-flex mt-2">
                      <div className="label-heading-1 ">
                        <h4>Wid Speed:</h4>
                      </div>
                      <div className="label-heading ">
                        <input
                          type="text"
                          placeholder="XXXXXX"
                          style={{ width: "40px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="anti-ice">
                  <label htmlFor="">Windshear</label>
                  <div className="checkbox-style ">
                    <Form className="ml-5">
                      {["radio"].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={`ON `}
                            // style={{marginLeft:'-2rem'}}
                          />

                          <br />

                          <Form.Check
                            type={type}
                            label={`OFF `}
                            id={`disabled-default-${type}`}
                          />
                        </div>
                      ))}
                    </Form>
                    <br />
                    <label htmlFor="">anti-ice</label>
                    <Form className="ml-5">
                      {["radio"].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={`on `}
                          />

                          <br/>

                          <Form.Check
                            type={type}
                            label={`off `}
                            id={`disabled-default-${type}`}
                          />
                        <br/>
                          
                        </div>
                      ))}
                    </Form>
                    <br />

                    <Link to="/takeoff2" className="btn btn-1 float-right">
                      Clutter type/Depth <br /> Page 2
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>

            <Footer />
            <div className="bg-dark w-100" style={{ height: "40px" }}></div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default TakeOff;
