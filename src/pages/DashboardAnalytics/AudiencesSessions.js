import React from 'react';
import { Card, CardHeader, Col, DropdownMenu, DropdownToggle, UncontrolledDropdown, DropdownItem } from 'reactstrap';
import AudiencesSessionsCharts from './AudiencesSessionsCharts';

const AudiencesSessions = () => {
    return (
        <React.Fragment>
            <Col xl={6}>
                <Card className="card-height-100">
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Audiences Sessions by Country</h4>
                        <div className="flex-shrink-0">
                            <UncontrolledDropdown className="card-header-dropdown">
                                <DropdownToggle tag="a" className="text-reset dropdown-btn" role="button">
                                    <span className="fw-semibold text-uppercase fs-12">Sort by: </span><span className="text-muted">Current Week<i className="mdi mdi-chevron-down ms-1"></i></span>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">
                                    <DropdownItem>Today</DropdownItem>
                                    <DropdownItem>Last Week</DropdownItem>
                                    <DropdownItem>Last Month</DropdownItem>
                                    <DropdownItem>Current Year</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                    </CardHeader>
                    <div className="card-body p-0">
                        <div>
                            <div id="audiences-sessions-country-charts" className="apex-charts" dir="ltr">
                                <AudiencesSessionsCharts dataColors='["--vz-success", "--vz-info"]' />
                            </div>
                        </div>
                    </div>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default AudiencesSessions;