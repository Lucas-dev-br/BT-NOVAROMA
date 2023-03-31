import React from 'react';
import { Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { PrjectsStatusCharts } from './DashboardProjectCharts';

const ProjectsStatus = () => {
    return (
        <React.Fragment>
            <Col xxl={4} lg={6}>
                <Card className="card-height-100">
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Projects Status</h4>
                        <div className="flex-shrink-0">
                            <UncontrolledDropdown className="card-header-dropdown">
                                <DropdownToggle tag="a" className="dropdown-btn text-muted" role="button">
                                    All Time <i className="mdi mdi-chevron-down ms-1"></i>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">
                                    <DropdownItem>All Time</DropdownItem>
                                    <DropdownItem>Last 7 Days</DropdownItem>
                                    <DropdownItem>Last 30 Days</DropdownItem>
                                    <DropdownItem>Last 90 Days</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                    </CardHeader>

                    <CardBody>
                        <div id="prjects-status" className="apex-charts" dir="ltr">
                            <PrjectsStatusCharts dataColors='["--vz-success", "--vz-primary", "--vz-warning", "--vz-danger"]' />
                        </div>
                        <div className="mt-3">
                            <div className="d-flex justify-content-center align-items-center mb-4">
                                <h2 className="me-3 ff-secondary mb-0">258</h2>
                                <div>
                                    <p className="text-muted mb-0">Total Projects</p>
                                    <p className="text-success fw-medium mb-0">
                                        <span className="badge badge-soft-success p-1 rounded-circle"><i className="ri-arrow-right-up-line"></i></span> +3 New
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between border-bottom border-bottom-dashed py-2">
                                <p className="fw-medium mb-0"><i className="ri-checkbox-blank-circle-fill text-success align-middle me-2"></i> Completed</p>
                                <div>
                                    <span className="text-muted pe-5">125 Projects</span>
                                    <span className="text-success fw-medium fs-12">15870hrs</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between border-bottom border-bottom-dashed py-2">
                                <p className="fw-medium mb-0"><i className="ri-checkbox-blank-circle-fill text-primary align-middle me-2"></i> In Progress</p>
                                <div>
                                    <span className="text-muted pe-5">42 Projects</span>
                                    <span className="text-success fw-medium fs-12">243hrs</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between border-bottom border-bottom-dashed py-2">
                                <p className="fw-medium mb-0"><i className="ri-checkbox-blank-circle-fill text-warning align-middle me-2"></i> Yet to Start</p>
                                <div>
                                    <span className="text-muted pe-5">58 Projects</span>
                                    <span className="text-success fw-medium fs-12">~2050hrs</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between py-2">
                                <p className="fw-medium mb-0"><i className="ri-checkbox-blank-circle-fill text-danger align-middle me-2"></i> Cancelled</p>
                                <div>
                                    <span className="text-muted pe-5">89 Projects</span>
                                    <span className="text-success fw-medium fs-12">~900hrs</span>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default ProjectsStatus;