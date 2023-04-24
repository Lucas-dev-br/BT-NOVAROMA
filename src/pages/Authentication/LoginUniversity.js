import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Label,
  Row,
  Button,
  Form,
  FormFeedback,
  Alert,
} from "reactstrap";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";

import { useHistory } from "react-router-dom";

//redux
import { useSelector, useDispatch } from "react-redux";

import { withRouter, Link } from "react-router-dom";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

//Social Media Imports
import { GoogleLogin } from "react-google-login";
// import TwitterLogin from "react-twitter-auth"
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
// actions
import { loginUser, socialLogin, resetLoginFlag } from "../../store/actions";

import logoLight from "../../assets/images/logo-light.png";
//Import config
import { facebook, google } from "../../config";

// Components
import AuthSlider2 from "../AuthenticationInner/authCarousel2.js";

// Images
import logo from "../../assets/images/login/logo-login.jpeg";
import studentImage from "../../assets/images/login/graduation-cap-line.svg";
import universityImage from "../../assets/images/login/school-line.svg";
import logoFabrica from "../../assets/images/login/logoFabrica.svg";

const LoginUniversity = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({
    user: state.Account.user,
  }));

  const history = useHistory();

  const [userLogin, setUserLogin] = useState([]);

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: userLogin.email || "admin@themesbrand.com" || "",
      password: userLogin.password || "123456" || "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values, props.history));
    },
  });

  const { error } = useSelector((state) => ({
    error: state.Login.error,
  }));

  const signIn = (res, type) => {
    if (type === "google" && res) {
      const postData = {
        name: res.profileObj.name,
        email: res.profileObj.email,
        token: res.tokenObj.access_token,
        idToken: res.tokenId,
      };
      dispatch(socialLogin(postData, props.history, type));
    } else if (type === "facebook" && res) {
      const postData = {
        name: res.name,
        email: res.email,
        token: res.accessToken,
        idToken: res.tokenId,
      };
      dispatch(socialLogin(postData, props.history, type));
    }
  };

  //handleGoogleLoginResponse
  const googleResponse = (response) => {
    signIn(response, "google");
  };

  //handleTwitterLoginResponse
  // const twitterResponse = e => {}

  //handleFacebookLoginResponse
  const facebookResponse = (response) => {
    signIn(response, "facebook");
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(resetLoginFlag());
    }, 3000);
  }, [dispatch, error]);

  //   document.title = "Basic SignIn | Velzon - React Admin & Dashboard Template";

  //   return (
  //     <React.Fragment>
  //       <ParticlesAuth>
  //         <div className="auth-page-content">
  //           <Container>
  //             <Row>
  //               <Col lg={12}>
  //                 <div className="text-center mt-sm-5 mb-4 text-white-50">
  //                   <div>
  //                     <Link to="/" className="d-inline-block auth-logo">
  //                       <img src={logoLight} alt="" height="20" />
  //                     </Link>
  //                   </div>
  //                   <p className="mt-3 fs-15 fw-medium">
  //                     Premium Admin & Dashboard Template
  //                   </p>
  //                 </div>
  //               </Col>
  //             </Row>

  //             <Row className="justify-content-center">
  //               <Col md={8} lg={6} xl={5}>
  //                 <Card className="mt-4">
  //                   <CardBody className="p-4">
  //                     <div className="text-center mt-2">
  //                       <h5 className="text-primary">Welcome Back !</h5>
  //                       <p className="text-muted">
  //                         Sign in to continue to Velzon.
  //                       </p>
  //                     </div>
  //                     {error && error ? (
  //                       <Alert color="danger"> {error} </Alert>
  //                     ) : null}
  //                     <div className="p-2 mt-4">
  //                       <Form
  //                         onSubmit={(e) => {
  //                           e.preventDefault();
  //                           validation.handleSubmit();
  //                           return false;
  //                         }}
  //                         action="#"
  //                       >
  //                         <div className="mb-3">
  //                           <Label htmlFor="email" className="form-label">
  //                             Email
  //                           </Label>
  //                           <Input
  //                             name="email"
  //                             className="form-control"
  //                             placeholder="Enter email"
  //                             type="email"
  //                             onChange={validation.handleChange}
  //                             onBlur={validation.handleBlur}
  //                             value={validation.values.email || ""}
  //                             invalid={
  //                               validation.touched.email &&
  //                               validation.errors.email
  //                                 ? true
  //                                 : false
  //                             }
  //                           />
  //                           {validation.touched.email &&
  //                           validation.errors.email ? (
  //                             <FormFeedback type="invalid">
  //                               {validation.errors.email}
  //                             </FormFeedback>
  //                           ) : null}
  //                         </div>

  //                         <div className="mb-3">
  //                           <div className="float-end">
  //                             <Link to="/forgot-password" className="text-muted">
  //                               Forgot password?
  //                             </Link>
  //                           </div>
  //                           <Label
  //                             className="form-label"
  //                             htmlFor="password-input"
  //                           >
  //                             Password
  //                           </Label>
  //                           <div className="position-relative auth-pass-inputgroup mb-3">
  //                             <Input
  //                               name="password"
  //                               value={validation.values.password || ""}
  //                               type="password"
  //                               className="form-control pe-5"
  //                               placeholder="Enter Password"
  //                               onChange={validation.handleChange}
  //                               onBlur={validation.handleBlur}
  //                               invalid={
  //                                 validation.touched.password &&
  //                                 validation.errors.password
  //                                   ? true
  //                                   : false
  //                               }
  //                             />
  //                             {validation.touched.password &&
  //                             validation.errors.password ? (
  //                               <FormFeedback type="invalid">
  //                                 {validation.errors.password}
  //                               </FormFeedback>
  //                             ) : null}
  //                             <button
  //                               className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
  //                               type="button"
  //                               id="password-addon"
  //                             >
  //                               <i className="ri-eye-fill align-middle"></i>
  //                             </button>
  //                           </div>
  //                         </div>

  //                         <div className="form-check">
  //                           <Input
  //                             className="form-check-input"
  //                             type="checkbox"
  //                             value=""
  //                             id="auth-remember-check"
  //                           />
  //                           <Label
  //                             className="form-check-label"
  //                             htmlFor="auth-remember-check"
  //                           >
  //                             Remember me
  //                           </Label>
  //                         </div>

  //                         <div className="mt-4">
  //                           <Button
  //                             color="success"
  //                             className="btn btn-success w-100"
  //                             type="submit"
  //                           >
  //                             Sign In
  //                           </Button>
  //                         </div>

  //                         <div className="mt-4 text-center">
  //                           <div className="signin-other-title">
  //                             <h5 className="fs-13 mb-4 title">Sign In with</h5>
  //                           </div>
  //                           <div>
  //                             <FacebookLogin
  //                               appId={facebook.APP_ID}
  //                               autoLoad={false}
  //                               callback={facebookResponse}
  //                               render={(renderProps) => (
  //                                 <Button
  //                                   color="primary"
  //                                   className="btn-icon me-1"
  //                                   onClick={renderProps.onClick}
  //                                 >
  //                                   <i className="ri-facebook-fill fs-16" />
  //                                 </Button>
  //                               )}
  //                             />
  //                             <GoogleLogin
  //                               clientId={google.CLIENT_ID}
  //                               render={(renderProps) => (
  //                                 <Button
  //                                   color="danger"
  //                                   to="#"
  //                                   className="btn-icon me-1"
  //                                   onClick={renderProps.onClick}
  //                                 >
  //                                   <i className="ri-google-fill fs-16" />
  //                                 </Button>
  //                               )}
  //                               onSuccess={googleResponse}
  //                               onFailure={() => {}}
  //                             />
  //                             {/* <Button color="primary" className="btn-icon"><i className="ri-facebook-fill fs-16"></i></Button>{" "} */}
  //                             {/* <Button color="danger" className="btn-icon"><i className="ri-google-fill fs-16"></i></Button>{" "} */}
  //                             <Button color="dark" className="btn-icon">
  //                               <i className="ri-github-fill fs-16"></i>
  //                             </Button>{" "}
  //                             <Button color="info" className="btn-icon">
  //                               <i className="ri-twitter-fill fs-16"></i>
  //                             </Button>
  //                           </div>
  //                         </div>
  //                       </Form>
  //                     </div>
  //                   </CardBody>
  //                 </Card>

  //                 <div className="mt-4 text-center">
  //                   <p className="mb-0">
  //                     Don't have an account ?{" "}
  //                     <Link
  //                       to="/register"
  //                       className="fw-semibold text-primary text-decoration-underline"
  //                     >
  //                       {" "}
  //                       Signup{" "}
  //                     </Link>{" "}
  //                   </p>
  //                 </div>
  //               </Col>
  //             </Row>
  //           </Container>
  //         </div>
  //       </ParticlesAuth>
  //     </React.Fragment>
  //   );

  document.title = "Banco de Estagio - Nova Roma";
  return (
    <React.Fragment>
      <div className="auth-page-content pt-lg-5">
        <Container>
          <Row>
            <Col lg={12}>
              <Card className="">
                <Row className="g-0">
                  <AuthSlider2 />

                  <Col lg={6}>
                    <div className="p-lg-5 p-4 ">
                      <div className="text-center">
                        <img src={logo} />
                      </div>

                      <div className="mt-4">
                      <Form
                          onSubmit={(e) => {
                            e.preventDefault();
                            validation.handleSubmit();
                            return false;
                          }}
                          action="#"
                        > 
                          <div className="mb-3">
                            <Label htmlFor="username" className="form-label">
                              Usuario
                            </Label>
                            <Input
                              name="email"
                              className="form-control"
                              placeholder="Enter email"
                              type="email"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.email || ""}
                              invalid={
                                validation.touched.email &&
                                validation.errors.email
                                  ? true
                                  : false
                              }
                            />
                          </div>

                          <div className="mb-3">
                            <Label
                              className="form-label"
                              htmlFor="password-input"
                            >
                              Senha
                            </Label>
                            <div className="position-relative auth-pass-inputgroup mb-3">
                            <Input
                                name="password"
                                value={validation.values.password || ""}
                                type="password"
                                className="form-control pe-5"
                                placeholder="Enter Password"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                invalid={
                                  validation.touched.password &&
                                  validation.errors.password
                                    ? true
                                    : false
                                }
                              />
                              <button
                                className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                                type="button"
                                id="password-addon"
                              >
                                <i className="ri-eye-fill align-middle"></i>
                              </button>
                            </div>
                          </div>

                          <div className="form-check">
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="auth-remember-check"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="auth-remember-check"
                            >
                              Lembre de mim
                            </Label>
                          </div>

                          <div className="mt-4">
                            <Button
                              style={{ backgroundColor: "#008f98" }}
                              className="w-100"
                              type="submit"
                            >
                              Entrar
                            </Button>
                          </div>

                          <div className="mt-4 text-center">
                            <div className="signin-other-title">
                              <h5 className="fs-13 mb-4 title">Logar como </h5>
                            </div>

                            <div className="d-flex justify-content-center">
                              <div>
                                <Button
                                  color="warning"
                                  className="btn-icon me-1"
                                  onClick={() =>
                                    history.push("/login/estudante")
                                  }
                                >
                                  <img
                                    src={studentImage}
                                    className=" fs-16"
                                  ></img>
                                </Button>
                              </div>

                              <div>
                                <Button
                                  color="info"
                                  className="btn-icon"
                                  onClick={() =>
                                    history.push("/login/instituição")
                                  }
                                >
                                  <img
                                    src={universityImage}
                                    className=" fs-16"
                                  ></img>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Form>
                      </div>

                      <div className="mt-5 text-center">
                        <p className="mb-0">
                          Esqueceu sua conta?{" "}
                          <a
                            href="/auth-signup-cover"
                            className="fw-semibold text-primary text-decoration-underline"
                          >
                            Clique aqui
                          </a>{" "}
                        </p>
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
                <p className="mb-0 fs-15">
                  &copy; {new Date().getFullYear()} Desenvolvido e criado pela
                  StageUp{" "}
                  <img
                    src={logoFabrica}
                    className="fs-5"
                    style={{ width: "50px" }}
                  ></img>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default withRouter(LoginUniversity);
