import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Guide from "../assests/guide.PNG";

import MainImg from "../assests/main-img.PNG";
import MainImg2 from "../assests/main-img-2.PNG";

const launchDetail = () => {
  return (
    <div className="bg-white launchDetail">
      <Container>
        <div className="py-5">
          <p>
            Welcome, as a traine you have been enrolled in the Pelesys online
            enhanced CBT for <br /> advanced A320 FMS training.
          </p>
          <p>
            The Pelesys freeplay online A320 FMS trainers works on any computer
            or ipad with a <br />
            broadband internet connectons. Most Browser are supported, But
            Google Chrome is <br />
            recomended.
          </p>
          <p>Click the button below to launch the FMS page Load.</p>
          <br />
          <Link className="btn btn-1">Launch</Link>
          <br />
          <Link className="btn btn-1">ReLaunch</Link> <br />
          <small>(use only if Launch prompts for login)</small>
          <br />
          <br />
          <p>Then double click the A320 FMS Trainer Icon to launch </p>
          <p>For Support please contact support@pelesys.com</p>
          <strong>Below is a Quick Start Guide For Menu Operation</strong>
          <br />
          <img src={Guide} alt="" />
          <br />
          <br />
          <img src={MainImg} width="100%" alt="" />
          <br />
          <br />
          <img src={MainImg2} width="100%" alt="" />
          <br />
          <br />
          <Link to="/" className="btn btn-1 back-btn">
            Back to Home
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default launchDetail;
