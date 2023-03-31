import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, Card, CardBody, Col, Container, Row } from 'reactstrap';
import ParticlesAuth from '../ParticlesAuth';
import logoLight from "../../../assets/images/logo-light.png";


const BasicPasswReset = () => {
    document.title="Reset Password | Velzon - React Admin & Dashboard Template";
    return (
        <ParticlesAuth>
            <div className="auth-page-content">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center mt-sm-5 mb-4 text-white-50">
                                <div>
                                    <Link to="/" className="d-inline-block auth-logo">
                                        <img src={logoLight} alt="" height="20" />
                                    </Link>
                                </div>
                                <p className="mt-3 fs-15 fw-medium">Premium Admin & Dashboard Template</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5}>
                            <Card className="mt-4">

                                <CardBody className="p-4">
                                    <div className="text-center mt-2">
                                        <h5 className="text-primary">Forgot Password?</h5>
                                        <p className="text-muted">Reset password with velzon</p>

                                        <lord-icon
                                            src="https://cdn.lordicon.com/rhvddzym.json"
                                            trigger="loop"
                                            colors="primary:#0ab39c"
                                            className="avatar-xl"
                                            style={{ width: "120px", height: "120px" }}>
                                        </lord-icon>

                                    </div>

                                    <Alert className="alert-borderless alert-warning text-center mb-2 mx-2" role="alert">
                                        Enter your email and instructions will be sent to you!
                                    </Alert>
                                    <div className="p-2">
                                        <form>
                                            <div className="mb-4">
                                                <label className="form-label">Email</label>
                                                <input type="email" className="form-control" id="email" placeholder="Enter Email" required/>
                                            </div>

                                            <div className="text-center mt-4">
                                                <button className="btn btn-success w-100" type="submit">Send Reset Link</button>
                                            </div>
                                        </form>
                                    </div>
                                </CardBody>
                            </Card>

                            <div className="mt-4 text-center">
                                <p className="mb-0">Wait, I remember my password... <Link to="/auth-signin-basic" className="fw-semibold text-primary text-decoration-underline"> Click here </Link> </p>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </ParticlesAuth>
    );
};

export default BasicPasswReset;