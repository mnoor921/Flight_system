import React from "react";
import { Link } from "react-router-dom";
import Beer from "../assests/buy_bear.jpg";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col>
            <div className="header-label mt-3 mb-0 pb-0">
              <div className="all-buttons-footer">
                <div className="" style={{ justifyContent: "space-between" }}>
                  <a href="" className="btn btn-1 pb-0 float-left">
                    Send
                  </a>
                  <ul className="d-flex left-button float-right">
                    <li>
                      <a href="" className="btn btn-1">
                        Reset
                      </a>
                    </li>
                    <li>
                      <a href="" className="btn btn-1">
                        Return
                      </a>
                    </li>
                    <li>
                      <a href="" className="btn btn-1">
                        Exit
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className=" text-center mx-auto">
          <p>if you found this site helpful</p>
          <Link
            to="https://www.paypal.com/donate?hosted_button_id=YQTWBX2LGLV4S"
            className=" mx-auto"
          >
            <img src={Beer} width="120" height="50" className="my-2" alt="" style={{borderRadius:'10px'}} />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
