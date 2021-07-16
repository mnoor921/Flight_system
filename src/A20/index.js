import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import A320 from "../assests/a20.PNG";
import Select1 from "../assests/select1.PNG";
import Select2 from "../assests/select2.PNG";
import Detailimg from "../assests/details.PNG";
import FMG from "../assests/fmg-launch.PNG";
import LaunchBg from "../assests/launch-bg.PNG";
import MainImg from "../assests/main-img.PNG";
import MainImg2 from "../assests/main-img-2.PNG";

const A20Homepage = () => {
  return (
    <div className="bg-white">
      <div className="a20-homepage bg-white">
        <Container>
          <br />
          <br />
          <br />
          <p>For the UAL Trainer you’ll need to log onto Pelesys</p>
          <a href="https://united.pelesys.com/">United.pelesys.com</a>
          <br />
          <p>Your login is your U number “Uxxxxxx”</p>
          <p>
            Your password is the first letter of your first name and your last
            name “John Smith is jsmith”
          </p>
          <img src={A320} width="100%" alt="" />
          <br />
          <br />
          <p>
            Once you’ve logged on you should see the following pages. If you
            don’t see A320 FMGS Trainer under the References tab it may be under
            the Enrolled Courses tab. You need to be assigned to the Airbus for
            this to be visible.
          </p>
          <br />
          <img src={Select1} alt="" className="w-100" />
          <br />
          <br />
          <p>
            <strong>Select A320 FMGS Trainer</strong>
          </p>
          <br />
          <img src={Select2} alt="" className="w-100" />
          <br />
          <br />
          <p>
            <strong>Click Launch</strong>
          </p>
          <br />
          <img
            src={LaunchBg}
            alt=""
            style={{ width: "100%", height: "100vh" }}
          />
          <br />
          <br />
          <p>
            <strong>Click Launch FMS</strong>
          </p>
          <br />
          <img src={Detailimg} alt="" className="w-100" />
          <br />
          <br />
          <p>
            Read the Instuctions. This is a fully functinal trainer
            <br /> Click Launch
          </p>
          <br />
          <br />
          <img src={FMG} alt="" className="w-100" />
          <br />
          <br />
          <p>Click any icon</p>
          <br />
          <img src={MainImg} alt="" className="w-100" />
          <br />
          <br />
          <p>
            This is your trainer. Flaps, throttles all work. You can practice
            for your event by selecting a departure airport first. On the top
            menu select the red position icon.
          </p>
          <br />
          <img src={MainImg2} alt="" className="w-100" />
          <br />
          <br />
          <p>
            You can prepare for your lesson and load the entire flight and
            practice your DIFRIPS
          </p>
          <br />
          <br />
        </Container>
      </div>
    </div>
  );
};

export default A20Homepage;
