import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container py-5 contact">
        <h2 className="text-center about-heading text-dark">Contact Us</h2>
        <hr className="text-center w-25 mx-auto" />
        <br />
        <div className="row">
          <div className="col-md-8 col-12">
            <form action="">
              <label htmlFor="" className="mt-2">
                Name
              </label>
              <input type="text" className="form-control" />
              <label htmlFor="" className="mt-2">
                Email
              </label>
              <input type="text" className="form-control" />
              <label htmlFor="" className="mt-2">
                Subject
              </label>
              <input type="text" className="form-control" />
              <label htmlFor="" className="mt-2">
                Message
              </label>
              <textarea type="text" className="form-control" />
              <button className="btn btn-1">send</button>
            </form>
          </div>
          <div className="col-md-4 col-12">
            <h2>Contact Us</h2>
            <p>You Can Follow Us on Social Media</p>
            <ul className="social">
                <li>
                    <a href=""><i className="fa fa-facebook"></i></a>
                </li>
                <li>
                    <a href=""><i className="fa fa-twitter"></i></a>
                </li>
                <li>
                    <a href=""><i className="fa fa-youtube"></i></a>
                </li>
                <li>
                    <a href=""><i className="fa fa-instagram"></i></a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
