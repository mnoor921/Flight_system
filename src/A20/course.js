import React, { useState } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import Book from "../assests/book.PNG";
import { Link } from "react-router-dom";

const ControlledTabs = () => {
  const [key, setKey] = useState("home");
  return (
    <div >
      <div className="ControlledTabs-tab">
        <Container className="py-5 ">
          <div className="border p-2">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="home" title="Enrolled Courses">
                <div className="p-4">
                  <Link to="/Trainer">
                    <div className="book-course d-flex p-2 mt-1">
                      <div className="img pr-2">
                        <img src={Book} alt="" />
                      </div>
                      <div className="text">
                        <p>A320 fmgs Trainer v2</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/Trainer">
                    <div className="book-course d-flex p-2 mt-1">
                      <div className="img pr-2">
                        <img src={Book} alt="" />
                      </div>
                      <div className="text">
                        <p>787 videos v2</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/Trainer">
                    <div className="book-course d-flex p-2 mt-1">
                      <div className="img pr-2">
                        <img src={Book} alt="" />
                      </div>
                      <div className="text">
                        <p>B787- qualification sysem traning</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </Tab>
              <Tab eventKey="profile" title="References">
                <div className="p-4">
                  <Link to="/Trainer">
                    <div className="book-course d-flex p-2 mt-1">
                      <div className="img pr-2">
                        <img src={Book} alt="" />
                      </div>
                      <div className="text">
                        <p>A320 fmgs Trainer v2</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/Trainer">
                    <div className="book-course d-flex p-2 mt-1">
                      <div className="img pr-2">
                        <img src={Book} alt="" />
                      </div>
                      <div className="text">
                        <p>787 videos v2</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/Trainer">
                    <div className="book-course d-flex p-2 mt-1">
                      <div className="img pr-2">
                        <img src={Book} alt="" />
                      </div>
                      <div className="text">
                        <p>B787- qualification sysem traning</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ControlledTabs;
