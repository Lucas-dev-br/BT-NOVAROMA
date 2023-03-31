import React from 'react';
import { Card, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { DealTypeCharts } from "./DashboardCrmCharts";

const DealType = () => {
    return (
        <React.Fragment>
            <Col xxl={3} md={6}>
                <Card className="card-height-100">
                    <div className="card-header align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Deal Type</h4>
                        <div className="flex-shrink-0">
                            <UncontrolledDropdown className="card-header-dropdown">
                                <DropdownToggle tag="a" className="text-reset dropdown-btn" role="button">
                                    <span className="fw-semibold text-uppercase fs-12">Sort by: </span><span className="text-muted">Monthly<i className="mdi mdi-chevron-down ms-1"></i></span>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">
                                    <DropdownItem>Today</DropdownItem>
                                    <DropdownItem>Weekly</DropdownItem>
                                    <DropdownItem>Monthly</DropdownItem>
                                    <DropdownItem>Yearly</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                    </div>
                    <div lass="card-body pb-0">
                        <div id="deal-type-charts" dir="ltr">
                            <DealTypeCharts dataColors='["--vz-warning", "--vz-danger", "--vz-success"]' />
                        </div>
                    </div>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default DealType;