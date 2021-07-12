import React from "react";
import LaunchBg from "../assests/launch-bg.PNG";
import { Container } from "react-bootstrap";

import { Link } from "react-router-dom";

const launch = () => {
  return (
    <div className="bg-white ">
      <Container>
        <Link to="/launchDetail" className="launch1">
          <img src={LaunchBg} alt="" />
        </Link>
      </Container>
    </div>
  );
};

export default launch;
