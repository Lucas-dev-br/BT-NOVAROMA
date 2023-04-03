import React from "react";
import { Col } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

// Import Images
import logoLight from "../../assets/images/login/Logo1Login.png";

const AuthSlider2 = () => {
  return (
    <React.Fragment>
      <Col lg={6}>
        <div className="p-lg-5 p-4 auth-two-bg h-100">
          <div className="position-relative h-100 d-flex flex-column">
            <div className="mb-4">
              <Link to="/dashboard" className="d-block">
                <img src={logoLight} alt="" height="50" />
              </Link>
            </div>
            <div className="mt-auto">
              <div className="mb-3"></div>
            </div>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default AuthSlider2;
