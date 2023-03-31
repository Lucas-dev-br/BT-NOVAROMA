import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'reactstrap';

import AuthSlider from '../authCarousel';

const CoverPasswCreate = () => {
    document.title = "Create New Password | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
                <div className="bg-overlay"></div>
                <div className="auth-page-content overflow-hidden pt-lg-5">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <Card className="overflow-hidden">
                                    <Row className="justify-content-center g-0">
                                        <AuthSlider />
                                        <Col lg={6}>
                                            <div className="p-lg-5 p-4">
                                                <h5 className="text-primary">Create new password</h5>
                                                <p className="text-muted">Your new password must be different from previous used password.</p>

                                                <div className="p-2">
                                                    <form action="/auth-signin-basic">
                                                        <div className="mb-3">
                                                            <label className="form-label" htmlFor="password-input">Password</label>
                                                            <div className="position-relative auth-pass-inputgroup">
                                                                <input type="password" className="form-control pe-5 password-input"
                                                                    // onpaste="return false"
                                                                    placeholder="Enter password" id="password-input" aria-describedby="passwordInput"
                                                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
                                                                <Button color="link" className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                                                    id="password-addon"><i className="ri-eye-fill align-middle"></i></Button>
                                                            </div>
                                                            <div id="passwordInput" className="form-text">Must be at least 8 characters.</div>
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label" htmlFor="confirm-password-input">Confirm Password</label>
                                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                                                <input type="password" className="form-control pe-5 password-input"
                                                                    // onpaste="return false"
                                                                    placeholder="Confirm password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" id="confirm-password-input"
                                                                    required />
                                                                <Button color="link" className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                                                    ><i className="ri-eye-fill align-middle"></i></Button>
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

                                                <div className="mt-5 text-center">
                                                    <p className="mb-0">Wait, I remember my password... <Link to="/auth-signin-cover" className="fw-semibold text-primary text-decoration-underline"> Click here </Link> </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <footer className="footer">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="text-center">
                                    <p className="mb-0">&copy; {new Date().getFullYear()} Velzon. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        </React.Fragment>
    );
};

export default CoverPasswCreate;