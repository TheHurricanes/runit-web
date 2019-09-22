import React from 'react';

class SignIn extends React.Component {
  state = {
    imageQR:
      'http://qrcode.youlikeshare.com/qrcode_images/201909/f85d317022722d1da1ff06b967d469e6_1.png',
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light theme-nav fixed-top">
          <div id="navbar-main" className="container">
            <a className="navbar-brand" href={`${process.env.PUBLIC_URL}/`}>
              <img src="assets/images/logo.svg" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse default-nav"
              id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto" id="mymenu">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="authentication-form">
          <div className="innerpage-decor">
            <div className="innerpage-circle1">
              <img src="assets/images/Testimonial2.png" alt="" />
            </div>
            <div className="innerpage-circle2">
              <img src="assets/images/Testimonial1.png" alt="" />
            </div>
          </div>
          <div>
            <h2 className="title text-center">
              <span>Easy login</span>
            </h2>
            <div className="card">
              <img
                src={this.state.imageQR}
                alt="QR"
                width="400px"
                height="400px"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SignIn;
