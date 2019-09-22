import React from 'react';
import Navbar from '../components/navbar';
import About from '../components/about';
import 'react-modal-video/scss/modal-video.scss';
import Tilt from 'react-tilt';

class HomeTwo extends React.Component {
  state = {
    isOpen: false,
  };

  openModal = () => this.setState({ isOpen: true });

  render() {
    document.body.classList.remove('landing-page');
    document.body.classList.remove('home-style');
    document.body.classList.remove('three');
    document.body.classList.add('home-style-two');
    return (
      <div>
        <Navbar />
        <section id="home" className="home home-two vertical-scrolling">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-12">
                <div className="home-contain">
                  <div className="text-white">
                    <div className="contain">
                      <h1 className="text-white">
                        Just <span className="f-bold ">Run</span>It<span className="f-bold " />
                      </h1>
                      <p className="slide-cap-desc">
                        Reading a programming book, studying for a test, or
                        copying code from StackOverflow is now easier with the
                        brand new code camera detection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="home-right">
                  <Tilt
                    options={{
                      perspective: 110,
                      speed: 400,
                      max: 1.2,
                      scale: 1,
                    }}>
                    <img
                      data-tilt
                      data-tilt-perspective="110"
                      data-tilt-speed="400"
                      data-tilt-max="1.2"
                      src="assets/images/home2/slider-caption.png"
                      className="img-fluid"
                      alt="slider-caption"
                    />
                  </Tilt>
                </div>
              </div>
            </div>
          </div>
        </section>
        <About />
      </div>
    );
  }
}

export default HomeTwo;
