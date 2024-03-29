import React, { Component } from 'react';

class PageNotFound extends Component {
  render() {
    return (
      <div className="authentication-form not-found">
        <div className="innerpage-decor">
          <div className="innerpage-circle1">
            <img src="assets/images/Testimonial2.png" alt="" />
          </div>
          <div className="innerpage-circle2">
            <img src="assets/images/Testimonial1.png" alt="" />
          </div>
        </div>
        <div className="text-center">
          <h2 className="error-font">
            4<span>0</span>4
          </h2>
          <h2 className="f-bold">Not found</h2>
          <div className="col-md-8 offset-md-2 col-12">
            <h3>
              You are in the best app ever, but not in the best place ever.
            </h3>
          </div>
          <div className="mt-5">
            <a
              href={`${process.env.PUBLIC_URL}/`}
              className="btn btn-custom theme-color theme-color pt-2 pb-2">
              BACK TO HOME PAGE
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
