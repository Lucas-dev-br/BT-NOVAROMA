import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap';
import ParticlesAuth from '../ParticlesAuth';
import logoLight from "../../../assets/images/logo-light.png";

const BasicPasswCreate = () => {

    document.title = "Create New Password | Velzon - React Admin & Dashboard Template";
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
                                        <h5 className="text-primary">Create new password</h5>
                                        <p className="text-muted">Your new password must be different from previous used password.</p>
                                    </div>

                                    <div className="p-2">
                                        <form action="/auth-signin-basic">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="password-input">Password</label>
                                                <div className="position-relative auth-pass-inputgroup">
                                                    <input type="password" className="form-control pe-5 password-input"
                                                        // onpaste="return false" 
                                                        placeholder="Enter password" id="password-input" aria-describedby="passwordInput" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
                                                    <Button color="link" className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button"
                                                        id="password-addon"><i className="ri-eye-fill align-middle"></i></Button>
                                                </div>
                                                <div id="passwordInput" className="form-text">Must be at least 8 characters.</div>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="confirm-password-input">Confirm Password</label>
                                                <div className="position-relative auth-pass-inputgroup mb-3">
                                                    <input type="password" className="form-control pe-5 password-input"
                                                        // onpaste="return false" 
                                                        placeholder="Confirm password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" id="confirm-password-input" required />
                                                    <Button color="link" className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button"><i className="ri-eye-fill align-middle"></i></Button>
                                                </div>
                                            </div>

                                            <div id="password-contain" className="p-3 bg-light mb-2 rounded">
                                                <h5 className="fs-13">Password must contain:</h5>
                                                <p id="pass-length" className="invalid fs-12 mb-2">Minimum <b>8 characters</b></p>
                                                <p id="pass-lower" className="invalid fs-12 mb-2">At <b>lowercase</b> letter (a-z)</p>
                                                <p id="pass-upper" className="invalid fs-12 mb-2">At least <b>uppercase</b> letter (A-Z)</p>
                                                <p id="pass-number" className="invalid fs-12 mb-0">A least <b>number</b> (0-9)</p>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                                <label className="form-check-label" htmlFor="auth-remember-check">Remember me</label>
                                            </div>

                                            <div className="mt-4">
                                                <Button color="success" className="w-100" type="submit">Reset Password</Button>
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
            </div >
        </ParticlesAuth >
    );
};

export default BasicPasswCreate;