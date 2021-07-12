import React from "react";
import { Link } from "react-router-dom";

const A20Homepage = () => {
  return (
    <div>
      <div className="a20-homepage">
        <div className="a20-form">
          <form>
            <label htmlFor="">Login Name:</label>
            <input type="text" />
            <br />
            <label htmlFor="">Password:</label>
            <input type="password" />
            <br />
            <Link to="/Courses" className="btn btn-1 float-right">
              login
            </Link>
            {/* <input type="submit" value="login" className="btn-1" /> */}
            <br />
            <br />
            <p className="text-right">
              <a href="">Forget Password</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default A20Homepage;
