import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form, Tab, Nav, Sonnet } from "react-bootstrap";
function TakeOff2() {
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

            <label htmlFor="" style={{ fontSize: "18px" }}>
              Clutter Type
            </label>

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Form>
                <Row>
                  <Col sm={5} className="">
                    <Nav variant="pills" className="flex-column ">
                      <Nav.Item>
                        <Nav.Link eventKey="first">None</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="second"> Standing water</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Slush</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="four">Dry Snow</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="five">Compact Now</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="six">Wet snow</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={7}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first"></Tab.Pane>
                      <Tab.Pane eventKey="second" className="text-center mt-5">
                        <label htmlFor="">CLUTTER DEPTH:</label>
                        <Form.Check id={`default-`} label={`1/8 Inches `} />

                        <Form.Check id={`default-`} label={`1/4 Inches `} />

                        <Form.Check id={`default-`} label={`3/8 Inches `} />

                        <Form.Check id={`default-`} label={`1/2 Inches `} />
                      </Tab.Pane>

                      <Tab.Pane eventKey="third" className="text-center mt-5">
                        <label htmlFor="">CLUTTER DEPTH:</label>
                        <Form.Check id={`default-`} label={`1/8 Inches `} />

                        <Form.Check id={`default-`} label={`1/4 Inches `} />

                        <Form.Check id={`default-`} label={`3/8 Inches `} />

                        <Form.Check id={`default-`} label={`1/2 Inches `} />
                      </Tab.Pane>

                      <Tab.Pane eventKey="four" className="text-center mt-5">
                        <label htmlFor="">CLUTTER DEPTH:</label>
                        <Form.Check id={`default-`} label={`1 Inches `} />

                        <Form.Check id={`default-`} label={`2 Inches `} />

                        <Form.Check id={`default-`} label={`3 Inches `} />

                        <Form.Check id={`default-`} label={`4 Inches `} />
                      </Tab.Pane>

                      <Tab.Pane eventKey="five"></Tab.Pane>
                      <Tab.Pane eventKey="six" className="text-center mt-5">
                      <label htmlFor="">CLUTTER DEPTH:</label>
                        <Form.Check id={`default-`} label={`1/8 Inches `} />

                        <Form.Check id={`default-`} label={`1/4 Inches `} />

                        <Form.Check id={`default-`} label={`3/8 Inches `} />

                        <Form.Check id={`default-`} label={`1/2 Inches `} />
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Form>
            </Tab.Container>

            {/* <!-- Nav tabs --> */}
            {/* <ul className="nav nav-tabs tabs-left sideways">
                            <li className="active pill-badge"><a href="#home-v" data-toggle="tab">None</a></li>
                            <li><a href="#profile-v" data-toggle="tab">Standing Water</a></li>
                            <li><a href="#messages-v" data-toggle="tab">Slush</a></li>
                            <li><a href="#settings-v" data-toggle="tab">Dry Snow</a></li>
                            <li><a href="#compact-snow" data-toggle="tab">Compact Snow</a></li>
                            <li><a href="#wet-snow" data-toggle="tab">Wet Snow</a></li>
                        </ul> */}

            {/* <!-- Tab panes --> */}

            {/* <Form>
                            {['checkbox'].map((type) => (
                                <div key={`default-`} className="mb-3">











                                    <div className="tab-content" style={{ border: '1px solid silver' }}>
                                        <div className="tab-pane active" id="home-v">

                                            <div className="m-5">
                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`None `}
                                                />
                                            </div>

                                        </div>
                                        <div className="tab-pane" id="profile-v">

                                            <div className="my-5 text-center">
                                                <label htmlFor="">CLUTTER DEPTH:</label>
                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`1/8 Inches `}
                                                />

                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`1/4 Inches `}
                                                />

                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`3/8 Inches `}
                                                />

                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`1/2 Inches `}
                                                />

                                            </div>

                                        </div>
                                        <div className="tab-pane" id="messages-v">

                                            <div className="my-5 text-center">
                                                <label htmlFor="">CLUTTER DEPTH:</label>
                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`1/8 Inches `}
                                                />

                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`1/4 Inches `}
                                                />

                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`3/8 Inches `}
                                                />

                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`1/2 Inches `}
                                                />

                                            </div>


                                        </div>
                                        <div className="tab-pane" id="settings-v">

                                            <div className="my-5 text-center">
                                                <label htmlFor="">CLUTTER DEPTH:</label>
                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`1 Inches `}
                                                />

                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`2 Inches `}
                                                />

                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`3 Inches `}
                                                />

                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`4 Inches `}
                                                />

                                            </div>


                                        </div>
                                        <div className="tab-pane" id="compact-snow">

                                            
                                        </div>
                                        <div className="tab-pane" id="wet-snow">

                                            <div className="my-5 text-center">
                                                <label htmlFor="">CLUTTER DEPTH:</label>
                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`1/8 Inches `}
                                                />

                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`1/4 Inches `}
                                                />

                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`3/8 Inches `}
                                                />

                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`1/2 Inches `}
                                                />

                                            </div>


                                        </div>
                                    </div>


                                </div>
                            ))}
                        </Form>








                        <div className="clearfix"></div> */}

            <Footer />
            <div className="bg-dark w-100" style={{ height: "40px" }}></div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default TakeOff2;
