import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, Input, Label, Modal, ModalBody, Offcanvas, OffcanvasBody, Row, UncontrolledDropdown } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';

// Rating
import Rating from "react-rating";

//User Images
import avatar2 from '../../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../../assets/images/users/avatar-3.jpg';
import avatar5 from '../../../assets/images/users/avatar-5.jpg';
import avatar4 from '../../../assets/images/users/avatar-4.jpg';
import avatar6 from '../../../assets/images/users/avatar-6.jpg';
import avatar7 from '../../../assets/images/users/avatar-7.jpg';
import avatar8 from '../../../assets/images/users/avatar-8.jpg';

//Small Images
import smallImage1 from '../../../assets/images/small/img-1.jpg';
import smallImage2 from '../../../assets/images/small/img-2.jpg';
import smallImage3 from '../../../assets/images/small/img-3.jpg';
import smallImage4 from '../../../assets/images/small/img-4.jpg';
import smallImage5 from '../../../assets/images/small/img-5.jpg';
import smallImage6 from '../../../assets/images/small/img-6.jpg';
import smallImage7 from '../../../assets/images/small/img-7.jpg';
import smallImage8 from '../../../assets/images/small/img-8.jpg';
import smallImage9 from '../../../assets/images/small/img-9.jpg';
import smallImage10 from '../../../assets/images/small/img-10.jpg';
import smallImage11 from '../../../assets/images/small/img-11.jpg';
import smallImage12 from '../../../assets/images/small/img-12.jpg';

const Team = () => {
    useEffect(() => {
        const list = document.querySelectorAll(".team-list");
        const buttonGroups = document.querySelectorAll('.filter-button');
        for (let i = 0; i < buttonGroups.length; i++) {
            buttonGroups[i].addEventListener('click', onButtonGroupClick);
        }

        function onButtonGroupClick(event) {
            if (event.target.id === 'list-view-button' || event.target.parentElement.id === 'list-view-button') {
                document.getElementById("list-view-button").classList.add("active");
                document.getElementById("grid-view-button").classList.remove("active");
                list.forEach(function (el) {
                    el.classList.add("list-view-filter");
                    el.classList.remove("grid-view-filter");
                });

            } else {
                document.getElementById("grid-view-button").classList.add("active");
                document.getElementById("list-view-button").classList.remove("active");
                list.forEach(function (el) {
                    el.classList.remove("list-view-filter");
                    el.classList.add("grid-view-filter");
                });
            }
        }
    }, []);


    //Modal  
    const [modal, setModal] = useState(false);
    const openModal = () => setModal(!modal);

    //OffCanvas  
    const [isOpen, setIsOpen] = useState(false);

    const toggleOffCanvas = () => {
        setIsOpen(!isOpen);
    };

    //Dropdown
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggledropDown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const team = [
        {
            id: 1,
            backgroundImg: smallImage9,
            userImage: avatar2,
            name: "Nancy Martino",
            jobPosition: "Team Leader & HR",
            projectCount: 225,
            taskCount: 197
        },
        {
            id: 2,
            backgroundImg: smallImage12,
            userImage: null,
            userShortName: "HB",
            name: "Henry Baird",
            jobPosition: "Full Stack Developer",
            projectCount: 352,
            taskCount: 376,
            bgColor: "danger",
            textColor: "danger",
        },
        {
            id: 3,
            backgroundImg: smallImage11,
            userImage: avatar3,
            name: "Frank Hook",
            jobPosition: "Project Manager",
            projectCount: 162,
            taskCount: 192
        },
        {
            id: 4,
            backgroundImg: smallImage1,
            userImage: avatar8,
            name: "Jennifer Carter",
            jobPosition: "UI/UX Designer",
            projectCount: 241,
            taskCount: 205

        },
        {
            id: 5,
            backgroundImg: smallImage10,
            userImage: null,
            userShortName: "ME",
            name: "Megan Elmore",
            jobPosition: "Team Leader & Web Developer",
            projectCount: 201,
            taskCount: 263,
            bgColor: "success",
            textColor: "success",

        },
        {
            id: 6,
            backgroundImg: smallImage2,
            userImage: avatar4,
            name: "Alexis Clarke",
            jobPosition: "Backend Developer",
            projectCount: 132,
            taskCount: 147

        },
        {
            id: 7,
            backgroundImg: smallImage4,
            userImage: null,
            userShortName: "NC",
            name: "Nathan Cole",
            jobPosition: "Front-End Developer",
            projectCount: 352,
            taskCount: 376,
            bgColor: "info",
            textColor: "info",
        },
        {
            id: 8,
            backgroundImg: smallImage7,
            userImage: avatar6,
            name: "Joseph Parker",
            jobPosition: "Full Stack Developer",
            projectCount: 64,
            taskCount: 93
        },
        {
            id: 9,
            backgroundImg: smallImage3,
            userImage: avatar5,
            name: "Erica Kernan",
            jobPosition: "Web Designer",
            projectCount: 345,
            taskCount: 298
        },
        {
            id: 10,
            backgroundImg: smallImage5,
            userImage: null,
            userShortName: "DP",
            name: "Donald Palmer",
            jobPosition: "Wed Developer",
            projectCount: 95,
            taskCount: 135,
            bgColor: "light",
            textColor: "primary",

        },
        {
            id: 11,
            backgroundImg: smallImage8,
            userImage: avatar7,
            name: "Jack Gough",
            jobPosition: "React Js Developer",
            projectCount: 87,
            taskCount: 121

        },
        {
            id: 12,
            backgroundImg: smallImage6,
            userImage: null,
            userShortName: "MW",
            name: "Marie Ward",
            jobPosition: "Backend Developer",
            projectCount: 145,
            taskCount: 210,
            bgColor: "success",
            textColor: "success",

        },

    ];

    document.title="Team | Velzon - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Team" pageTitle="Pages" />
                    <Card>
                        <CardBody>
                            <Row className="g-2">
                                <Col sm={4}>
                                    <div className="search-box">
                                        <Input type="text" className="form-control" placeholder="Search for name, tasks, projects or something..." />
                                        <i className="ri-search-line search-icon"></i>
                                    </div>
                                </Col>
                                <Col className="col-sm-auto ms-auto">
                                    <div className="list-grid-nav hstack gap-1">

                                        <Button color="info" id="grid-view-button" className="btn btn-soft-info nav-link btn-icon fs-14 active filter-button"><i className="ri-grid-fill"></i></Button>
                                        <Button color="info" id="list-view-button" className="btn btn-soft-info nav-link  btn-icon fs-14 filter-button"><i className="ri-list-unordered"></i></Button>
                                        <Dropdown
                                            isOpen={dropdownOpen}
                                            toggle={toggledropDown}>
                                            <DropdownToggle type="button" className="btn btn-soft-info btn-icon fs-14">
                                                <i className="ri-more-2-fill"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <li><Link className="dropdown-item" to="#">All</Link></li>
                                                <li><Link className="dropdown-item" to="#">Last Week</Link></li>
                                                <li><Link className="dropdown-item" to="#">Last Month</Link></li>
                                                <li><Link className="dropdown-item" to="#">Last Year</Link></li>
                                            </DropdownMenu>
                                        </Dropdown>
                                        <Button color="success"
                                            onClick={openModal}>
                                            <i className="ri-add-fill me-1 align-bottom"></i> Add Members</Button>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                    <Row>
                        <Col lg={12}>
                            <div>
                                <Row className="team-list grid-view-filter">
                                    {(team || []).map((item, key) => (
                                        <Col key={key}>
                                            <Card className="team-box">
                                                <div className="team-cover">
                                                    <img src={item.backgroundImg} alt="" className="img-fluid" />
                                                </div>
                                                <CardBody className="p-4">
                                                    <Row className="align-items-center team-row">
                                                        <Col className="team-settings">
                                                            <Row>
                                                                <Col>
                                                                    <div className="bookmark-icon flex-shrink-0 me-2">
                                                                        <Rating
                                                                            stop={1}
                                                                            emptySymbol="mdi mdi-star-outline text-muted "
                                                                            fullSymbol="mdi mdi-star text-warning "
                                                                        />
                                                                    </div>
                                                                </Col>
                                                                <UncontrolledDropdown direction='start' className="col text-end">
                                                                    <DropdownToggle tag="a" id="dropdownMenuLink2" role="button">
                                                                        <i className="ri-more-fill fs-17"></i>
                                                                    </DropdownToggle>
                                                                    <DropdownMenu>
                                                                        <DropdownItem><i className="ri-eye-line me-2 align-middle" />View</DropdownItem>
                                                                        <DropdownItem><i className="ri-star-line me-2 align-middle" />Favorites</DropdownItem>
                                                                        <DropdownItem><i className="ri-delete-bin-5-line me-2 align-middle" />Delete</DropdownItem>
                                                                    </DropdownMenu>
                                                                </UncontrolledDropdown>
                                                            </Row>
                                                        </Col>
                                                        <Col lg={4} className="col">
                                                            <div className="team-profile-img">

                                                                <div className="avatar-lg img-thumbnail rounded-circle flex-shrink-0">
                                                                    {item.userImage != null ?
                                                                        <img src={item.userImage} alt="" className="img-fluid d-block rounded-circle" />

                                                                        :
                                                                        <div className={"avatar-title rounded-circle bg-soft-" + item.bgColor + " text-" + item.textColor}>
                                                                            {item.userShortName}
                                                                        </div>}
                                                                </div>
                                                                <div className="team-content">
                                                                    <Link to="#" onClick={toggleOffCanvas}><h5 className="fs-16 mb-1">{item.name}</h5></Link>
                                                                    <p className="text-muted mb-0">{item.jobPosition}</p>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col lg={4} className="col">
                                                            <Row className="text-muted text-center">
                                                                <Col xs={6} className="border-end border-end-dashed">
                                                                    <h5 className="mb-1">{item.projectCount}</h5>
                                                                    <p className="text-muted mb-0">Projects</p>
                                                                </Col>
                                                                <Col xs={6}>
                                                                    <h5 className="mb-1">{item.taskCount}</h5>
                                                                    <p className="text-muted mb-0">Tasks</p>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col lg={2} className="col">
                                                            <div className="text-end">
                                                                <Link to="/pages-profile" className="btn btn-light view-btn">View Profile</Link>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    ))}

                                    <Col lg={12}>
                                        <div className="text-center mb-3">
                                            <Link to="#" className="text-success"><i className="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i> Load More </Link>
                                        </div>
                                    </Col>
                                </Row>


                                <div className="modal fade" id="addmembers" tabIndex="-1" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <Modal isOpen={modal} toggle={openModal} centered>
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="myModalLabel">Add New Members</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <ModalBody>
                                                    <Form>
                                                        <Row>
                                                            <Col lg={12}>
                                                                <div className="mb-3">
                                                                    <Label htmlFor="teammembersName" className="form-label">Name</Label>
                                                                    <Input type="text" className="form-control" id="teammembersName" placeholder="Enter name" />
                                                                </div>
                                                            </Col>
                                                            <Col lg={12}>
                                                                <div className="mb-3">
                                                                    <Label htmlFor="designation" className="form-label">Designation</Label>
                                                                    <Input type="text" className="form-control" id="designation" placeholder="Enter designation" />
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <Label htmlFor="totalProjects" className="form-label">Projects</Label>
                                                                    <Input type="number" className="form-control" id="totalProjects" placeholder="Total projects" />
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <Label htmlFor="totalTasks" className="form-label">Tasks</Label>
                                                                    <Input type="number" className="form-control" id="totalTasks" placeholder="Total tasks" />
                                                                </div>
                                                            </Col>
                                                            <Col lg={12}>
                                                                <div className="mb-4">
                                                                    <Label htmlFor="formFile" className="form-label">Profile Images</Label>
                                                                    <Input className="form-control" type="file" id="formFile" />
                                                                </div>
                                                            </Col>
                                                            <Col lg={12}>
                                                                <div className="hstack gap-2 justify-content-end">
                                                                    <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                                                    <button type="submit" className="btn btn-success">Add Member</button>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </ModalBody>
                                            </div>
                                        </Modal>
                                    </div>
                                </div>

                                <Offcanvas
                                    isOpen={isOpen}
                                    direction="end"
                                    toggle={toggleOffCanvas}
                                    className="offcanvas-end border-0"
                                    tabIndex="-1"
                                >
                                    <OffcanvasBody className="profile-offcanvas p-0">
                                        <div className="team-cover">
                                            <img src={smallImage9} alt="" className="img-fluid" />
                                        </div>
                                        <div className="p-3">
                                            <div className="team-settings">
                                                <Row>
                                                    <Col>
                                                        <div className="bookmark-icon flex-shrink-0 me-2">
                                                            <Input type="checkbox" id="favourite13" className="bookmark-input bookmark-hide" />
                                                            <Label htmlFor="favourite13" className="btn-star">
                                                                <svg width="20" height="20">
                                                                    {/* <use xlink:href="#icon-star"/> */}
                                                                </svg>
                                                            </Label>
                                                        </div>
                                                    </Col>
                                                    <UncontrolledDropdown direction='start' className="col text-end">
                                                        <DropdownToggle tag="a" id="dropdownMenuLink14" role="button">
                                                            <i className="ri-more-fill fs-17"></i>
                                                        </DropdownToggle>
                                                        <DropdownMenu>
                                                            <DropdownItem><i className="ri-eye-line me-2 align-middle" />View</DropdownItem>
                                                            <DropdownItem><i className="ri-star-line me-2 align-middle" />Favorites</DropdownItem>
                                                            <DropdownItem><i className="ri-delete-bin-5-line me-2 align-middle" />Delete</DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </Row>
                                            </div>
                                        </div>
                                        <div className="p-3 text-center">
                                            <img src={avatar2} alt="" className="avatar-lg img-thumbnail rounded-circle mx-auto" />
                                            <div className="mt-3">
                                                <h5 className="fs-15"><Link to="#" className="link-primary">Nancy Martino</Link></h5>
                                                <p className="text-muted">Team Leader & HR</p>
                                            </div>
                                            <div className="hstack gap-2 justify-content-center mt-4">
                                                <div className="avatar-xs">
                                                    <Link to="#" className="avatar-title bg-soft-secondary text-secondary rounded fs-16">
                                                        <i className="ri-facebook-fill"></i>
                                                    </Link>
                                                </div>
                                                <div className="avatar-xs">
                                                    <Link to="#" className="avatar-title bg-soft-success text-success rounded fs-16">
                                                        <i className="ri-slack-fill"></i>
                                                    </Link>
                                                </div>
                                                <div className="avatar-xs">
                                                    <Link to="#" className="avatar-title bg-soft-info text-info rounded fs-16">
                                                        <i className="ri-linkedin-fill"></i>
                                                    </Link>
                                                </div>
                                                <div className="avatar-xs">
                                                    <Link to="#" className="avatar-title bg-soft-danger text-danger rounded fs-16">
                                                        <i className="ri-dribbble-fill"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <Row className="g-0 text-center">
                                            <Col xs={6}>
                                                <div className="p-3 border border-dashed border-start-0">
                                                    <h5 className="mb-1">124</h5>
                                                    <p className="text-muted mb-0">Projects</p>
                                                </div>
                                            </Col>
                                            <Col xs={6}>
                                                <div className="p-3 border border-dashed border-start-0">
                                                    <h5 className="mb-1">81</h5>
                                                    <p className="text-muted mb-0">Tasks</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="p-3">
                                            <h5 className="fs-15 mb-3">Personal Details</h5>
                                            <div className="mb-3">
                                                <p className="text-muted text-uppercase fw-semibold fs-12 mb-2">Number</p>
                                                <h6>+(256) 2451 8974</h6>
                                            </div>
                                            <div className="mb-3">
                                                <p className="text-muted text-uppercase fw-semibold fs-12 mb-2">Email</p>
                                                <h6>nancymartino@email.com</h6>
                                            </div>
                                            <div>
                                                <p className="text-muted text-uppercase fw-semibold fs-12 mb-2">Location</p>
                                                <h6 className="mb-0">Carson City - USA</h6>
                                            </div>
                                        </div>
                                        <div className="p-3 border-top">
                                            <h5 className="fs-15 mb-4">File Manager</h5>
                                            <div className="d-flex mb-3">
                                                <div className="flex-shrink-0 avatar-xs">
                                                    <div className="avatar-title bg-soft-danger text-danger rounded fs-16">
                                                        <i className="ri-image-2-line"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className="mb-1"><Link to="#">Images</Link></h6>
                                                    <p className="text-muted mb-0">4469 Files</p>
                                                </div>
                                                <div className="text-muted">
                                                    12 GB
                                                </div>
                                            </div>
                                            <div className="d-flex mb-3">
                                                <div className="flex-shrink-0 avatar-xs">
                                                    <div className="avatar-title bg-soft-secondary text-secondary rounded fs-16">
                                                        <i className="ri-file-zip-line"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className="mb-1"><Link to="#">Documents</Link></h6>
                                                    <p className="text-muted mb-0">46 Files</p>
                                                </div>
                                                <div className="text-muted">
                                                    3.46 GB
                                                </div>
                                            </div>
                                            <div className="d-flex mb-3">
                                                <div className="flex-shrink-0 avatar-xs">
                                                    <div className="avatar-title bg-soft-success text-success rounded fs-16">
                                                        <i className="ri-live-line"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className="mb-1"><Link to="#">Media</Link></h6>
                                                    <p className="text-muted mb-0">124 Files</p>
                                                </div>
                                                <div className="text-muted">
                                                    4.3 GB
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 avatar-xs">
                                                    <div className="avatar-title bg-soft-primary text-primary rounded fs-16">
                                                        <i className="ri-error-warning-line"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className="mb-1"><Link to="#">Others</Link></h6>
                                                    <p className="text-muted mb-0">18 Files</p>
                                                </div>
                                                <div className="text-muted">
                                                    846 MB
                                                </div>
                                            </div>
                                        </div>
                                    </OffcanvasBody>
                                    <div className="offcanvas-foorter border p-3 hstack gap-3 text-center position-relative">
                                        <button className="btn btn-light w-100"><i className="ri-question-answer-fill align-bottom ms-1"></i> Send Message</button>
                                        <Link to="/pages-profile" className="btn btn-primary w-100"><i className="ri-user-3-fill align-bottom ms-1"></i> View Profile</Link>
                                    </div>
                                </Offcanvas>
                            </div>
                        </Col>
                    </Row>

                    <svg className="bookmark-hide">
                        <symbol viewBox="0 0 24 24" stroke="currentColor" fill="var(--color-svg)" id="icon-star"><path strokeWidth=".4" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></symbol>
                    </svg>

                </Container>
            </div>
        </React.Fragment>
    );
};

export default Team;