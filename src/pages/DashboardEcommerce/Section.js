import React from "react";
import { Col, Row } from "reactstrap";
import Flatpickr from "react-flatpickr";

const Section = () => {
  const sidebar = () => {
    const element = document.getElementById("layout-rightside-coll");
    element.classList.toggle("d-none");
  };

  return (
    <React.Fragment>
      <Row className="mb-3 pb-1">
        <Col xs={12}>
          <div className="d-flex align-items-lg-center flex-lg-row flex-column">
            <div className="flex-grow-1">
              <h4 className="fs-16 mb-1">Bem vindo, Lucas!</h4>
              <p className="text-muted mb-0">
                Veja aqui suas vagas de estagio.
              </p>
            </div>
            <div className="mt-3 mt-lg-0">
              <form action="#">
                <Row className="g-3 mb-0 align-items-center">
                  <div className="col-sm-auto">
                    <div className="input-group"></div>
                  </div>
                </Row>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Section;
